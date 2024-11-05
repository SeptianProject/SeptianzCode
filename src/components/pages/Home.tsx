import ImageHead from "../layouts/ImageHead"
import Nav from "../layouts/Nav"
import { useGSAP } from "@gsap/react"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { badgeItems } from "../../assets/assets"

const Home = ({ startAnimation = false }) => {
     const containerRef = useRef(null)
     const titleRef = useRef(null)
     const descRef = useRef(null)
     const badgeRef = useRef(null)
     const imageRef = useRef(null)
     const timelineRef = useRef<GSAPTimeline | null>(null)

     useGSAP(() => {
          timelineRef.current = gsap.timeline({
               paused: true,
               defaults: {
                    ease: "power3.out",
                    duration: 0.6
               }
          })

          gsap.set([titleRef.current, descRef.current, badgeRef.current], {
               opacity: 0,
               y: 50
          })

          if (imageRef.current) {
               gsap.set(imageRef.current, {
                    opacity: 0,
                    y: -50,
                    x: 100
               })
          }

          timelineRef.current.to(titleRef.current, {
               opacity: 1,
               y: 0,
               duration: 0.8
          }).to(descRef.current, {
               opacity: 1,
               y: 0,
               duration: 0.8
          }, "-=0.4")
               .to(badgeRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.8
               }, "-=0.4")
               .to(".badge-item", {
                    x: 0,
                    stagger: {
                         each: 0.08,
                         from: 'edges',
                         grid: 'auto',
                         ease: 'power2.inOut',
                    }
               }, "-=0.4")

          if (imageRef.current) {
               timelineRef.current.to(imageRef.current, {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    duration: 0.8
               }, "-=0.6")
          }

          const badges = document.querySelectorAll('.badge-item')
          badges.forEach(badge => {
               badge.addEventListener('mouseenter', () => {
                    gsap.to(badge, {
                         scale: 1.1,
                         duration: 0.2,
                         ease: "power2.out"
                    })
               })
               badge.addEventListener('mouseleave', () => {
                    gsap.to(badge, {
                         scale: 1,
                         duration: 0.2,
                         ease: "power2.out"
                    })
               })
          })
     }, { scope: containerRef })

     useEffect(() => {
          if (startAnimation && timelineRef.current) {
               timelineRef.current.play()
          }
     }, [startAnimation])

     return (
          <div ref={containerRef} id="/" className="min-h-[100vh] transition-all duration-1000 relative
          lg:max-w-screen-lg flex flex-col items-center lg:items-start justify-center mx-auto">
               <Nav />
               <div className="flex justify-between items-center gap-x-60 lg:w-full">
                    <div className="flex flex-col items-center justify-center
                    lg:items-start gap-y-2 lg:w-1/2 lg:h-[55vh] lg:mt-20">
                         <h1 ref={titleRef} className="font-bold text-4xl lg:text-6xl leading-tight 
                         text-center lg:text-start">
                              Hello, Im <br />
                              <span className=""> SeptianzCode</span>
                         </h1>
                         <p ref={descRef} className="text-sm font-light lg:font-normal lg:text-base 
                         text-center lg:text-start w-80">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit.
                              Dignissimos esse deleniti quos neque qui fugiat
                              laboriosam quia! Reiciendis, culpa autem magnam
                         </p>
                         <div ref={badgeRef} className="flex gap-x-2 mt-5">
                              {badgeItems.map((item, index) => (
                                   <button key={index} className="badge-item size-10 bg-secondary 
                                   rounded-md flex items-center justify-center">
                                        {item.icon}
                                   </button>
                              ))}
                         </div>
                    </div>
                    <div ref={imageRef} className="hidden lg:w-1/2 lg:h-[90vh] lg:block relative">
                         <ImageHead />
                    </div>
               </div>
          </div>
     )
}

export default Home