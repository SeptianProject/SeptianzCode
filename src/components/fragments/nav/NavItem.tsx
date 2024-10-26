import { Link } from "react-scroll"
import { navItems } from "../../../assets/assets"

const NavItem = () => {
     return (
          <>
               {navItems.map((item, index) => (
                    <div key={index}>
                         <Link to={item.link} smooth={true} duration={500}
                              className="text-light font-normal text-[16px] hover:text-[20px]
                              transition-all transform duration-300 cursor-pointer">
                              {item.title}
                         </Link>
                    </div>
               ))}
          </>
     )
}

export default NavItem