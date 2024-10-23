import { useRef } from "react";
import { projects } from "../../assets/assets"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

interface Project {
     id: number;
     title: string;
     image: string;
}

gsap.registerPlugin(ScrollTrigger)

const Project = () => {
     const scrollRef = useRef<HTMLDivElement>(null)

     const shuffledProjects = [...projects, ...projects, ...projects, ...projects, ...projects]
          .sort(() => Math.random() - 0.5)

     useGSAP(() => {
          const cards = gsap.utils.toArray<HTMLElement>(scrollRef.current!.children)

          cards.forEach((card) => {
               gsap.to(card, {
                    x: 10,
                    y: -100,
                    scale: 1,
                    scrollTrigger: {
                         trigger: card,
                         start: 'top center',
                         end: 'bottom center',
                         scrub: true,
                    }
               })
          })
     }, [scrollRef])


     return (
          <div id="project" className="min-h-[150dvh] max-w-full transition-all duration-1000 
          flex flex-col justify-start">
               <div className="w-full max-w-screen-lg mx-auto h-[10vh] my-20">
                    <h1 className="">Lorem, ipsum dolor.</h1>
                    <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
               </div>
               {/* card yang dimaksud */}
               <div className="w-full h-[100vh] relative overflow-hidden">
                    <div ref={scrollRef}
                         className="grid grid-cols-4 grid-rows-4 gap-y-[16rem] gap-x-[14rem]
                    lg:grid-rows-5 lg:grid-cols-6 lg:gap-y-[17rem] lg:gap-x-[25rem]
                    transform -rotate-45 translate-y-32 -translate-x-40 lg:-translate-x-80 
                    lg:-translate-y-80 absolute inset-0 scale-110">
                         {shuffledProjects.map((project, index) => (
                              <div id="scroll-card" key={`${project.id}-${index}`}
                                   className="bg-secondary w-52 h-60 lg:w-96 lg:h-64
                                   hover:scale-105 transition-all duration-500 bg-cover bg-top
                                   cursor-pointer grayscale brightness-50 hover:grayscale-0 
                                   hover:brightness-100"
                                   style={{ backgroundImage: `url(${project.image})` }}>
                              </div>
                         ))}
                    </div>
               </div>
          </div>
     )
}

export default Project 