import { Link } from "react-scroll"

type NavItemProps = {
     navItems: {
          link: string
          title: string
     }[]
}

const NavItem = ({ navItems }: NavItemProps) => {
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