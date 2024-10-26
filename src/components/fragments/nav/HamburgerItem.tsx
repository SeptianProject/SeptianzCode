import { forwardRef } from "react"

type TProps = {
     className?: string
}

const HamburgerItem = forwardRef<HTMLDivElement, TProps>(({ className }, ref) => {
     return (
          <div ref={ref} className={`w-6 h-[3px] bg-white 
               transition-all duration-500 ${className}`} />
     )
})

export default HamburgerItem