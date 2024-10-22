import BadgeItem from "../fragments/BadgeItem"
import { BiHome } from "react-icons/bi"
import { SiAboutdotme } from "react-icons/si"
import { GiSkills } from "react-icons/gi"
import { GrProjects } from "react-icons/gr"
import { Link } from "react-scroll"

const Nav = () => {
     const iconStyle: string = 'text-neutral-500 size-6 hover:text-light transition duration-300'
     const navItems = [
          {
               icon: <BiHome className={iconStyle} />,
               link: '/'
          },
          {
               icon: <SiAboutdotme className={iconStyle} />,
               link: 'about'
          },
          {
               icon: <GiSkills className={iconStyle} />,
               link: 'skill'
          },
          {
               icon: <GrProjects className={iconStyle} />,
               link: 'project'
          },
     ]

     return (
          <nav className="hidden lg:block fixed right-10 inset-y-1/3">
               <div className="flex flex-col gap-y-2">
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