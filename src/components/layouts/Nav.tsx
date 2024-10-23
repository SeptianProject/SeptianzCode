import BadgeItem from "../fragments/BadgeItem"
import { BiHome } from "react-icons/bi"
import { SiAboutdotme } from "react-icons/si"
import { GiSkills } from "react-icons/gi"
import { GrProjects } from "react-icons/gr"
import { Link } from "react-scroll"

const Nav = () => {
     const className = 'text-neutral-500 size-6 hover:text-light transition duration-300'
     const navItems = [
          {
               icon: <BiHome className={className} />,
               link: '/'
          },
          {
               icon: <SiAboutdotme className={className} />,
               link: 'about'
          },
          {
               icon: <GiSkills className={className} />,
               link: 'skill'
          },
          {
               icon: <GrProjects className={className} />,
               link: 'project'
          },
     ]

     return (
          <nav className="fixed bottom-0 bg-secondary h-[10dvh] lg:h-[100dvh] w-full 
          lg:right-10 lg:w-auto lg:bg-transparent z-20">
               <div className="flex flex-row items-center justify-around h-full 
               lg:flex-col lg:gap-y-4 lg:justify-center">
                    {navItems.map((item, index) => (
                         <Link key={index} smooth={true} to={item.link}>
                              <BadgeItem>
                                   {item.icon}
                              </BadgeItem>
                         </Link>
                    ))}
               </div>
          </nav>
     )
}

export default Nav