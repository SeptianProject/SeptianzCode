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

     useGSAP(() => {
          const container = containerRef.current
          const section = sectionRef.current
          if (!container || !section) return

          gsap.set(container, {
               height: section.offsetHeight,
               width: '100%',
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
          <div ref={containerRef} className="flex max-w-screen-lg min-h-screen mx-auto items-center">
               <div className="w-1/2">
                    <div>
                         <h1 className="text-6xl font-bold">About Me!</h1>
                    </div>
                    <div className="w-80">
                         <p className="font-light text-lg">
                              Lorem ipsum dolor, sit amet consectetur
                              adipisicing elit. Qui minus rerum nam
                              eveniet asperiores, commodi dolores quam
                              dolor ea aspernatur neque, optio architecto?
                              Harum eaque animi at voluptatem obcaecati in!
                         </p>
                    </div>
               </div>
               <div className="overflow-hidden w-1/2">
                    <div ref={sectionRef} className="flex items-center"
                         style={{ width: `${items.length * 100}vw` }}>
                         {items.map((item, index) => {
                              return (
                                   <div key={index}
                                        className={`w-screen h-screen flex items-center px-8`}>
                                        <div id="section-content"
                                             className="lg:max-w-screen-lg flex flex-col lg:flex-row 
                                   lg:justify-between items-start justify-center gap-y-20 lg:gap-x-32">
                                             <div className="space-y-2 lg:w-1/2">
                                                  <h2 className="text-4xl lg:text-6xl font-bold">
                                                       {item.title}
                                                  </h2>
                                                  <p className="lg:pr-24 text-sm font-light lg:text-base lg:font-normal text-opacity-75 leading-relaxed mt-4 w-80 lg:w-full">
                                                       {item.description}
                                                  </p>
                                             </div>
                                             <div className="flex w-1/2">
                                                  <BoxDash currentStep={index} />
                                             </div>
                                        </div>
                                   </div>
                              )
                         })}
                    </div>
               </div >
          </div>
     )
}

export default About