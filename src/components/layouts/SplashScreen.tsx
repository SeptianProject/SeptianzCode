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

     useGSAP(() => {
          const text = 'SeptinazCode'

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
               duration: 1.5,
               text: text,
               ease: "power2.out",
          }).to(textRef.current, {
               delay: 2,
               duration: 1,
               text: {
                    value: "",
                    type: "diff",
                    delimiter: "",
                    speed: 0.5,
                    rtl: true
               },
               ease: "power2.inOut"
          }).to({},
               { duration: 1 }
          ).to([textRef.current, cursorRef.current], {
               duration: 1,
               opacity: 0,
               color: "#1F1F1F",
               y: 100,
               ease: "power2.out"
          }).to(containerRef.current, {
               duration: 1,
               y: "-100%",
               backgroundColor: "#1F1F1F",
               ease: "power2.out"
          })
     }, { scope: containerRef })

     return (
          <div ref={containerRef} className="fixed inset-0 bg-dark z-50 flex items-center justify-center">
               <div className="flex items-center justify-center">
                    <div ref={textRef}
                         className="text-2xl lg:text-4xl font-bold text-light">
                    </div>
                    <span
                         ref={cursorRef}
                         className="text-xl lg:text-3xl font-bold text-light"
                    >|</span>
               </div>
          </div>
     )
}

export default SplashScreen