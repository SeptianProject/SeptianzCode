import { useEffect, useRef, useCallback, useMemo } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Matter from 'matter-js'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

// Type definitions
interface PhysicsBody {
     body: Matter.Body
     element: HTMLElement
     width: number
     height: number
}

interface PhysicsConfig {
     gravity: { x: number; y: number; scale: number }
     restitution: number
     friction: number
     frictionAir: number
     density: number
     wallThickness: number
     mouseStiffness: number
}

interface UsePhysicsEngineReturn {
     engine: Matter.Engine | null
     bodies: PhysicsBody[]
     cleanup: () => void
}

interface MouseDragEvent {
     body: Matter.Body
}

const usePhysicsEngine = (
     containerRef: React.RefObject<HTMLElement>, 
     _objects?: unknown[], 
     animateOnScroll: boolean = true
): UsePhysicsEngineReturn => {
     const engineRef = useRef<Matter.Engine | null>(null)
     const runnerRef = useRef<Matter.Runner | null>(null)
     const mouseConstraintRef = useRef<Matter.MouseConstraint | null>(null)
     const bodiesRef = useRef<PhysicsBody[]>([])
     const topWallRef = useRef<Matter.Body | null>(null)
     const lenisRef = useRef<Lenis | null>(null)
     const draggingRef = useRef<Matter.Body | null>(null)
     const originalInertiaRef = useRef<number | null>(null)

     const config = useMemo<PhysicsConfig>(() => ({
          gravity: { x: 0, y: 1, scale: 0.001 },
          restitution: 0.5,
          friction: 0.15,
          frictionAir: 0.02,
          density: 0.002,
          wallThickness: 200,
          mouseStiffness: 0.6,
     }), [])

     const clamp = useCallback((val: number, min: number, max: number): number => {
          return Math.max(min, Math.min(max, val))
     }, [])

     const initPhysics = useCallback((container: HTMLElement) => {
          if (!container || engineRef.current) return

          // Create engine
          const engine = Matter.Engine.create()
          engine.gravity = config.gravity
          engine.constraintIterations = 10
          engine.positionIterations = 20
          engine.velocityIterations = 16
          engine.timing.timeScale = 1
          engineRef.current = engine

          const containerRect = container.getBoundingClientRect()
          const wallThickness = config.wallThickness

          // Create walls
          const walls = [
               Matter.Bodies.rectangle(
                    containerRect.width / 2,
                    containerRect.height + wallThickness / 2,
                    containerRect.width + wallThickness * 2,
                    wallThickness,
                    { isStatic: true }
               ),
               Matter.Bodies.rectangle(
                    -wallThickness / 2,
                    containerRect.height / 2,
                    wallThickness,
                    containerRect.height + wallThickness * 2,
                    { isStatic: true }
               ),
               Matter.Bodies.rectangle(
                    containerRect.width + wallThickness / 2,
                    containerRect.height / 2,
                    wallThickness,
                    containerRect.height + wallThickness * 2,
                    { isStatic: true }
               )
          ]
          Matter.World.add(engine.world, walls)

          // Create physics bodies for objects
          const objectElements = container.querySelectorAll('.object')
          const bodies: PhysicsBody[] = []

          objectElements.forEach((obj: Element, index: number) => {
               const element = obj as HTMLElement
               const objRect = element.getBoundingClientRect()
               const startX = Math.random() * (containerRect.width - objRect.width) + objRect.width / 2
               const startY = -500 - index * 200
               const startRotation = (Math.random() - 0.5) * Math.PI

               const body = Matter.Bodies.rectangle(
                    startX,
                    startY,
                    objRect.width,
                    objRect.height,
                    {
                         restitution: config.restitution,
                         friction: config.friction,
                         frictionAir: config.frictionAir,
                         density: config.density,
                    }
               )

               Matter.Body.setAngle(body, startRotation)

               bodies.push({
                    body: body,
                    element: element,
                    width: objRect.width,
                    height: objRect.height,
               })

               Matter.World.add(engine.world, body)
          })

          bodiesRef.current = bodies

          // Add top wall after delay
          setTimeout(() => {
               const topWall = Matter.Bodies.rectangle(
                    containerRect.width / 2,
                    -wallThickness / 2,
                    containerRect.width + wallThickness * 2,
                    wallThickness,
                    { isStatic: true }
               )
               Matter.World.add(engine.world, topWall)
               topWallRef.current = topWall
          }, 3000)

          // Create mouse constraint
          const mouse = Matter.Mouse.create(container)
          // Remove default mouse wheel handling to prevent conflicts with scroll
          // Note: mousewheel property may not exist on all mouse instances

          const mouseConstraint = Matter.MouseConstraint.create(engine, {
               mouse: mouse,
               constraint: {
                    stiffness: config.mouseStiffness,
                    render: { visible: false }
               }
          })

          mouseConstraint.mouse.element.oncontextmenu = () => false
          mouseConstraintRef.current = mouseConstraint

          // Mouse events
          Matter.Events.on(mouseConstraint, 'startdrag', function (event: Matter.IEvent<Matter.MouseConstraint>) {
               const dragEvent = event as unknown as MouseDragEvent
               draggingRef.current = dragEvent.body
               if (draggingRef.current) {
                    originalInertiaRef.current = draggingRef.current.inertia
                    Matter.Body.setInertia(draggingRef.current, Infinity)
                    Matter.Body.setVelocity(draggingRef.current, { x: 0, y: 0 })
                    Matter.Body.setAngularVelocity(draggingRef.current, 0)
               }
          })

          Matter.Events.on(mouseConstraint, 'enddrag', function () {
               if (draggingRef.current) {
                    Matter.Body.setInertia(draggingRef.current, originalInertiaRef.current || 1)
                    draggingRef.current = null
                    originalInertiaRef.current = null
               }
          })

          Matter.Events.on(engine, 'beforeUpdate', function () {
               if (draggingRef.current) {
                    const found = bodies.find((b) => b.body === draggingRef.current)
                    if (found) {
                         const minX = found.width / 2
                         const maxX = containerRect.width - found.width / 2
                         const minY = found.height / 2
                         const maxY = containerRect.height - found.height / 2

                         Matter.Body.setPosition(draggingRef.current, {
                              x: clamp(draggingRef.current.position.x, minX, maxX),
                              y: clamp(draggingRef.current.position.y, minY, maxY)
                         })

                         Matter.Body.setVelocity(draggingRef.current, {
                              x: clamp(draggingRef.current.velocity.x, -20, 20),
                              y: clamp(draggingRef.current.velocity.y, -20, 20)
                         })
                    }
               }
          })

          // Mouse leave events
          const handleMouseLeave = () => {
               if (mouseConstraint.constraint) {
                    mouseConstraint.constraint.bodyB = null
                    mouseConstraint.constraint.pointB = { x: 0, y: 0 }
               }
          }

          const handleMouseUp = () => {
               if (mouseConstraint.constraint) {
                    mouseConstraint.constraint.bodyB = null
                    mouseConstraint.constraint.pointB = { x: 0, y: 0 }
               }
          }

          container.addEventListener('mouseleave', handleMouseLeave)
          document.addEventListener('mouseup', handleMouseUp)

          Matter.World.add(engine.world, mouseConstraint)

          // Start runner
          const runner = Matter.Runner.create()
          Matter.Runner.run(runner, engine)
          runnerRef.current = runner

          // Animation loop
          function updatePositions() {
               bodies.forEach(({ body, element, width, height }) => {
                    const x = clamp(
                         body.position.x - width / 2,
                         0,
                         containerRect.width - width
                    )
                    const y = clamp(
                         body.position.y - height / 2,
                         -height * 3,
                         containerRect.height - height
                    )

                    element.style.left = x + 'px'
                    element.style.top = y + 'px'
                    element.style.transform = `rotate(${body.angle}rad)`
               })

               requestAnimationFrame(updatePositions)
          }
          updatePositions()

          // Cleanup function
          return () => {
               container.removeEventListener('mouseleave', handleMouseLeave)
               document.removeEventListener('mouseup', handleMouseUp)
          }
     }, [clamp, config])

     const initLenis = useCallback(() => {
          if (lenisRef.current) return

          const lenis = new Lenis()
          lenisRef.current = lenis

          lenis.on('scroll', ScrollTrigger.update)

          gsap.ticker.add((time) => {
               lenis.raf(time * 1000)
          })

          gsap.ticker.lagSmoothing(0)
     }, [])

     const cleanup = useCallback(() => {
          if (engineRef.current) {
               Matter.Engine.clear(engineRef.current)
               engineRef.current = null
          }

          if (runnerRef.current) {
               Matter.Runner.stop(runnerRef.current)
               runnerRef.current = null
          }

          bodiesRef.current = []
          mouseConstraintRef.current = null
          topWallRef.current = null
          draggingRef.current = null
          originalInertiaRef.current = null

          if (lenisRef.current) {
               lenisRef.current.destroy()
               lenisRef.current = null
          }
     }, [])

     useEffect(() => {
          initLenis()

          if (animateOnScroll && containerRef.current) {
               const container = containerRef.current
               const section = container.closest('section')

               if (section) {
                    ScrollTrigger.create({
                         trigger: section,
                         start: "top bottom",
                         once: true,
                         onEnter: () => {
                              if (container && !engineRef.current) {
                                   initPhysics(container)
                              }
                         }
                    })
               }
          } else if (containerRef.current) {
               // Initialize immediately if not using scroll trigger
               const timer = setTimeout(() => {
                    if (containerRef.current && !engineRef.current) {
                         initPhysics(containerRef.current)
                    }
               }, 100)

               return () => clearTimeout(timer)
          }

          return cleanup
     }, [animateOnScroll, containerRef, initPhysics, initLenis, cleanup])

     return {
          engine: engineRef.current,
          bodies: bodiesRef.current,
          cleanup
     }
}

export default usePhysicsEngine
