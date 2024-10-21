import { useState } from "react"
import { navItems } from "../../assets/assets"
import HamburgerMenu from "../fragments/nav/HamburgerMenu"
import NavItem from "../fragments/nav/NavItem"

const Nav = () => {
     const [onTap, setOnTap] = useState(false)

     const handleOnTap = () => {
          setOnTap(!onTap)
          if (onTap) {
               console.log("Hamburger menu is open")
          }
     }

     return (
          <nav className="flex justify-between items-end min-h-[10vh]">
               <div>
                    <h1 className="text-white font-medium text-lg">{navItems.logo}</h1>
               </div>
               <div className="">
                    <HamburgerMenu isOpen={onTap} setIsOpen={handleOnTap}
                         className={`${onTap ? 'absolute translate-y-20 -translate-x-40' : 'static'}`} />
                    <div className={`${onTap ? 'flex z-10 bg-secondary bg-opacity-100 ' : 'bg-opacity-0 -z-50'} 
                    absolute inset-0 items-center justify-center flex-col gap-y-4`}>
                         <NavItem />
                    </div>
               </div>
          </nav>
     )
}

export default Nav