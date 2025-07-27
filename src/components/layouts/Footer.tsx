import { useRef, useEffect } from 'react'
import usePhysicsEngine from '../../hooks/usePhysicsEngine'

const PhysicsSection = () => {
     const containerRef = useRef<HTMLDivElement>(null)

     const objects = [
          'Flutter',
          'Filament',
          'GSAP',
          'Javascript',
          'Laravel',
          'Next.js',
          'React',
          'Svelte',
          'Typescript',
          'Vue'
     ]

     const { cleanup } = usePhysicsEngine(containerRef, objects, true)

     useEffect(() => {
          return () => {
               cleanup()
          }
     }, [cleanup])

     return (
          <section className="footer relative w-full h-[50svh] p-8 overflow-hidden">
               <div className="object-container absolute top-0 left-0 w-full h-full bg-dark" ref={containerRef}>
                    {objects.map((objectName, index) => (
                         <div key={index} className="object absolute w-max text-xl font-medium bg-white px-8 py-4 rounded-full cursor-grab select-none pointer-events-auto z-10 active:cursor-grabbing" >
                              <p className='text-dark'>{objectName}</p>
                         </div>
                    ))}
               </div>
          </section>
     )
}

export default PhysicsSection
