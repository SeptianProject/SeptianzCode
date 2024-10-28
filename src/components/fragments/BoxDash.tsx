import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"

interface BoxDashProps {
     currentStep: number
}

interface BoxProps {
     text: string
     isActive: boolean
}

const BoxDash = ({ currentStep }: BoxDashProps) => {
     const items = ['SD', 'SMP', 'SMK']
     const containerRef = useRef(null)
     const dashRef = useRef<HTMLDivElement[]>([])

     useGSAP(() => {
          const dashs = dashRef.current

          dashs.forEach((dash, index) => {
               if (!dash) return

               if (index <= currentStep) {
                    gsap.to(dash, {
                         width: '10rem',
                         duration: 0.5,
                         delay: index * 0.2,
                    })
               } else {
                    gsap.to(dash, {
                         width: 0,
                         duration: 0.3,
                    })
               }
          })
     }, [currentStep])

     return (
          <div ref={containerRef} className='flex items-center gap-2'>
               {items.map((item, index) => (
                    <div key={index}
                         className={`flex items-center`}>
                         <Box text={item} isActive={index <= currentStep} />
                         {index <= item.length - 1 && (
                              <div ref={el => dashRef.current[index] = el!}
                                   className="h-[2.5rem] w-0 bg-secondary 
                                   transition-all duration-300"
                              />
                         )}
                    </div>
               ))}
          </div>
     )
}

export default BoxDash


const Box = ({ isActive, text }: BoxProps) => {
     return (
          <div>
               <h2 className={`bg-secondary size-12 text-base font-light 
               rounded justify-center flex items-center transition-opacity duration-300
               ${isActive ? 'opacity-100' : 'opacity-40'}`}>
                    {text}
               </h2>
          </div>
     )
}