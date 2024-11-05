import { useEffect, useRef, useState } from "react"
import HamburgerMenu from "../fragments/nav/HamburgerMenu"
import NavItem from "../fragments/nav/NavItem"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { navItems } from "../../assets/assets"

const Nav = () => {
     const [onTap, setOnTap] = useState(false)
     const [isSticky, setIsSticky] = useState(false)
     const navContainerRef = useRef<HTMLDivElement>(null)
     const navRef = useRef<HTMLDivElement>(null)
     const tlRef = useRef<gsap.core.Timeline | null>(null)

     useEffect(() => {
          if (onTap) {
               const scrollPosition = window.scrollY
               document.body.style.top = `-${scrollPosition}px`
               document.body.style.width = '100%'
          } else {
               const scrollPosition = document.body.style.top
               document.body.style.position = ''
               document.body.style.top = ''
               document.body.style.width = ''
               window.scrollTo(0, parseInt(scrollPosition || '0') * -1)
          }
     }, [onTap])

     useEffect(() => {
          const handleScroll = () => {
               const scrollPercent = (window.scrollY / window.innerHeight) * 100
               if (scrollPercent > 10) {
                    setIsSticky(true)
               } else {
                    setIsSticky(false)
               }
          }

          window.addEventListener('scroll', handleScroll)
          return () => window.removeEventListener('scroll', handleScroll)
     }, [])

     useGSAP(() => {
          gsap.set(navContainerRef.current, {
               scale: 0,
               opacity: 1,
               x: '-190px',
               rotate: -90,
               borderRadius: '100%',
               transformOrigin: 'top right'
          })

          tlRef.current = gsap.timeline({ paused: true })
               .fromTo(navContainerRef.current, {
                    scale: 0,
                    opacity: 0,
                    transformOrigin: 'top right'
               }, {
                    scale: 1,
                    opacity: 1,
                    x: 0,
                    y: 0,
                    rotate: 0,
                    borderRadius: 0,
                    duration: 1,
                    ease: 'elastic.inOut(0.4, 0.5)'
               })
     }, [])

     const handleOnTap = () => {
          setOnTap(!onTap)

          if (!onTap) {
               tlRef.current?.play()
          } else {
               tlRef.current?.reverse()
          }
     }

     return (
          <>
               <nav ref={navRef}
                    className={`flex w-full px-10 lg:px-0 h-[10vh] z-50 top-0 py-10
                    justify-between items-center
                    ${isSticky ? `fixed inset-x-0 lg:px-[10.6rem] bg-dark shadow-lg`
                              : 'absolute'}
                    ${onTap ? 'shadow-none' : 'shadow-none'}`}>
                    <h1 className={`font-medium text-lg`}>
                         SeptianzCode.
                    </h1>
                    <HamburgerMenu isOpen={onTap}
                         setIsOpen={handleOnTap}
                         className={`transition-all duration-500`}
                    />
               </nav>
               <div ref={navContainerRef}
                    className="flex flex-col items-center justify-center gap-y-2
                    bg-dark fixed inset-0 z-20">
                    <NavItem navItems={navItems} />
               </div>
          </>
     )
}

export default Nav