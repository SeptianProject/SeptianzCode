import gsap from "gsap"
import BoxDash from "../fragments/BoxDash"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import { items } from "../../assets/assets"

gsap.registerPlugin(ScrollTrigger)

const About = () => {
     const containerRef = useRef<HTMLDivElement>(null)
     const sectionRef = useRef<HTMLDivElement>(null)
     const aboutTextRef = useRef<HTMLDivElement>(null)

     useGSAP(() => {
          const container = containerRef.current
          const section = sectionRef.current
          const aboutText = aboutTextRef.current
          if (!container || !section || !aboutText) return

          gsap.set(container, {
               height: section.offsetHeight,
               width: '100%',
          })

          gsap.from(aboutText, {
               scrollTrigger: {
                    trigger: aboutText,
                    start: 'top center',
                    end: 'bottom center',
                    scrub: 1
               },
               opacity: 0,
               y: 50,
               duration: 1,
               ease: 'power2.out'
          })

          const tl = gsap.timeline({
               scrollTrigger: {
                    trigger: container,
                    start: 'top top',
                    end: '+=3000',
                    pin: true,
                    scrub: 1,
               }
          })

          tl.to(section, {
               x: -(section.offsetWidth - window.innerWidth),
               ease: 'power2.out',
               duration: 1
          })

          gsap.from("#section-content", {
               scrollTrigger: {
                    trigger: container,
                    start: "top center",
                    end: "+=3000",
                    scrub: 1
               },
               opacity: 0,
               scale: 0.5,
               stagger: 0.4,
               duration: 1,
               ease: "power2.out"
          })

     }, { scope: containerRef })

     return (
          <div ref={containerRef} className="w-full min-h-screen">
               <div className="flex flex-col lg:flex-row max-w-screen-lg 
                    mx-auto items-center justify-center relative">
                    <div ref={aboutTextRef} className="w-full lg:w-1/2 px-4 lg:px-0 text-left">
                         <div className="max-w-md mx-auto lg:mx-0 py-8">
                              <h1 className="text-4xl lg:text-6xl font-bold">About Me!</h1>
                              <p className="font-light text-sm lg:text-lg">
                                   Lorem ipsum dolor, sit amet consectetur
                                   adipisicing elit. Qui minus rerum nam
                                   eveniet asperiores, commodi dolores quam
                                   dolor ea aspernatur neque, optio architecto?
                                   Harum eaque animi at voluptatem obcaecati in!
                              </p>
                         </div>
                    </div>
                    <div className="overflow-hidden w-full lg:w-1/2">
                         <div ref={sectionRef} className="flex items-center"
                              style={{ width: `${items.length * 100}vw` }}>
                              {items.map((item, index) => {
                                   return (<div key={index}
                                        className={`w-screen h-screen flex items-center lg:px-8`}>
                                        <div id="section-content"
                                             className="max-w-screen-lg flex flex-col items-center 
                                             justify-center lg:flex-row lg:justify-between lg:items-start
                                             gap-y-8 lg:gap-x-16">
                                             <div className="space-y-4 text-left lg:w-1/2">
                                                  <h2 className="text-4xl lg:text-6xl font-bold">
                                                       {item.title}
                                                  </h2>
                                                  <p className="lg:pr-24 text-sm font-light lg:text-base lg:font-normal text-opacity-75 leading-relaxed mt-4 w-80 lg:w-full">
                                                       {item.description}
                                                  </p>
                                             </div>
                                             <div className="flex justify-center lg:justify-start w-full lg:w-1/2">
                                                  <BoxDash currentStep={index} />
                                             </div>
                                        </div>
                                   </div>)
                              })}
                         </div>
                    </div >
               </div>
          </div>
     )
}

export default About