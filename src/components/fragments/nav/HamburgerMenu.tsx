import { useRef } from "react"
import HamburgerItem from "./HamburgerItem"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"

type TProps = {
     isOpen: boolean
     setIsOpen: () => void
     className?: string
}

const HamburgerMenu = ({ isOpen, setIsOpen, className }: TProps) => {
     const topLineRef = useRef(null)
     const middleLineRef = useRef(null)
     const bottomLineRef = useRef(null)

     useGSAP(() => {
          if (isOpen) {
               gsap.to(topLineRef.current, {
                    duration: 0.3,
                    rotate: 45,
                    y: 7,
                    ease: 'power2.out'
               })

               gsap.to(middleLineRef.current, {
                    duration: 0.3,
                    opacity: 0,
                    width: 0,
                    x: -8,
                    ease: 'power2.out'
               })

               gsap.to(bottomLineRef.current, {
                    duration: 0.3,
                    rotate: -45,
                    y: -7,
                    ease: 'power2.out'
               })
          } else {
               gsap.to([topLineRef.current, bottomLineRef.current], {
                    rotate: 0,
                    y: 0,
                    duration: 0.3,
                    ease: 'power2.out'
               })

               gsap.to(middleLineRef.current, {
                    width: '1.5rem',
                    opacity: 1,
                    x: 0,
                    duration: 0.3,
                    ease: 'power2.out'
               })
          }
     }, [isOpen])


     return (
          <button onClick={setIsOpen} className={`space-y-1 ${className} z-20`}>
               <HamburgerItem ref={topLineRef} />
               <HamburgerItem ref={middleLineRef} />
               <HamburgerItem ref={bottomLineRef} />
          </button>
     )
}

export default HamburgerMenu