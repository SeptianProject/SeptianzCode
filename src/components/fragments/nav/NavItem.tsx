import { Link } from "react-scroll"
import { navItems } from "../../../assets/assets"
import { useState } from "react"

const NavItem = () => {
     const [onHover, setOnHover] = useState(false)

     return (
          <>
               {navItems.items.map((item, index) => (
                    <div key={index}>
                         <Link to={item.to} onMouseMove={() => setOnHover(true)}
                              className="text-white cursor-pointer">
                              {item.title}
                         </Link>
                         <div
                              className={`bg-white w-10 mx-auto h-[2px] rounded absolute inset-x-0
                              ${onHover ? 'translatex-10' : ''}`} />
                    </div>
               ))}
          </>
     )
}

export default NavItem