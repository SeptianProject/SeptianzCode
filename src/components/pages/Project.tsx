import { useRef } from "react";
import { projects } from "../../assets/assets"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Project {
     id: number;
     title: string;
     image: string;
}

gsap.registerPlugin(ScrollTrigger)

const Project = () => {
     const scrollRef = useRef<HTMLDivElement>(null)
     const containerRef = useRef<HTMLDivElement>(null)

     const shuffledProjects = [...projects, ...projects, ...projects, ...projects, ...projects]
          .sort(() => Math.random() - 0.5)

     useGSAP(() => {
          if (!scrollRef.current || !containerRef.current) return;

          const cards = gsap.utils.toArray<HTMLElement>(scrollRef.current.children)

          const tl = gsap.timeline({
               scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top center",
                    end: "bottom center",
                    scrub: true,
               }
          });

          cards.forEach((card, index) => {
               tl.to(card, {
                    x: -10,
                    y: -100,
               }, index * 0.1)
          })
     }, [])


     return (
          <div id="project" className="min-h-[200vh] max-w-full transition-all duration-1000 
          flex flex-col justify-start">
               <div className="w-full max-w-screen-lg mx-auto h-[10vh] my-20">
                    <h1 className="">Lorem, ipsum dolor.</h1>
                    <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
               </div>
               <div ref={containerRef} className="w-full h-[100vh] relative overflow-hidden">
                    <div ref={scrollRef}
                         className="grid grid-cols-4 grid-rows-4 gap-y-[16rem] gap-x-[14rem]
                    lg:grid-rows-5 lg:grid-cols-6 lg:gap-y-[17rem] lg:gap-x-[25rem]
                    transform -rotate-45 translate-y-32 -translate-x-40 lg:-translate-x-80 
                    lg:-translate-y-80 absolute inset-0 scale-110">
                         {shuffledProjects.map((project) => (
                              <div key={project.id} style={{ backgroundImage: `url(${project.image})` }}
                                   className="bg-secondary w-52 h-60 lg:w-96 lg:h-64 transform
                                   hover:scale-105 transition-all duration-500 bg-cover bg-top
                                   cursor-pointer grayscale brightness-50 hover:grayscale-0 
                                   hover:brightness-100"/>
                         ))}
                    </div>
               </div>
          </div>
     )
}

export default Project 