import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import TextPlugin from "gsap/TextPlugin"

type SplashScreenProps = {
     setIsLoading: (value: boolean) => void
}

gsap.registerPlugin(TextPlugin)
gsap.registerPlugin(useGSAP)

const SplashScreen = ({ setIsLoading }: SplashScreenProps) => {
     const containerRef = useRef<HTMLDivElement>(null)
     const textRef = useRef<HTMLDivElement>(null)
     const cursorRef = useRef<HTMLSpanElement>(null)

     const createRandomColor = () => {
          const colors = ['#ff0000', '#00ff00', '#0000ff', '#ff00ff', '#ffff00', '#00ffff', '#f5f5f5']
          return colors[Math.floor(Math.random() * colors.length)]
     }

     const createGlitchText = (text: string) => {
          const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
          return text.split('').map(() =>
               chars.charAt(Math.floor(Math.random() * chars.length))
          ).join('')
     }

     useGSAP(() => {
          const text = 'SeptianzCode'

          const tl = gsap.timeline({
               onComplete: () => setIsLoading(false)
          })

          gsap.to(cursorRef.current, {
               duration: 0.5,
               opacity: 0,
               repeat: -1,
               yoyo: true,
          })

          tl.to(textRef.current, {
               delay: 2,
               duration: 1.5,
               text: text,
               ease: "power2.out",
          }).to(textRef.current, {
               delay: 1,
               duration: 0.1,
               repeat: 8,
               repeatDelay: 0,
               onRepeat: () => {
                    if (textRef.current) {
                         const originalText = text
                         textRef.current.innerHTML = createGlitchText(originalText)
                         textRef.current.style.color = createRandomColor()
                         textRef.current.style.transform = `translate(${gsap.utils.random(-10, 10)}px, 
                              ${gsap.utils.random(-10, 10)}px)`

                         gsap.delayedCall(0.05, () => {
                              if (textRef.current) {
                                   textRef.current.innerHTML = originalText
                                   textRef.current.style.color = '#f5f5f5'
                                   textRef.current.style.transform = 'translate(0, 0)'
                              }
                         })
                    }
               }
          })
               .to(textRef.current, {
                    duration: 1,
                    text: text,
                    color: '#f5f5f5',
                    ease: "power2.out",
               })
               .to(textRef.current, {
                    delay: 1,
                    duration: 1,
                    text: {
                         value: "",
                         type: "diff",
                         delimiter: "",
                         speed: 0.5,
                         rtl: true
                    },
                    ease: "power2.inOut"
               })
               .to({}, { duration: 1 })
               .to([textRef.current, cursorRef.current], {
                    duration: 1,
                    opacity: 0,
                    color: "#1F1F1F",
                    y: 100,
                    ease: "power2.out"
               })
               .to(containerRef.current, {
                    duration: 1,
                    y: "-100%",
                    backgroundColor: "#1F1F1F",
                    ease: "power2.out"
               })
     }, { scope: containerRef })

     return (
          <div ref={containerRef}
               className="fixed inset-0 bg-dark z-50 flex items-center justify-center">
               <div className="flex items-center justify-center relative">
                    <div ref={textRef}
                         className="text-2xl lg:text-4xl font-bold text-light">
                    </div>
                    <span ref={cursorRef}
                         className="text-xl lg:text-3xl font-bold text-light">
                         |
                    </span>
               </div>
          </div>
     )
}

export default SplashScreen