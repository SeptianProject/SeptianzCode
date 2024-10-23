import { FaLinkedinIn } from "react-icons/fa"
import { FaGithub, FaInstagram, FaWhatsapp } from "react-icons/fa6"
import BadgeItem from '../fragments/BadgeItem'

const BadgeSosmed = () => {
     const className = 'hover:text-primary lg:size-4 text-neutral-500 transition duration-500 hover:scale-125'

     return (
          <>
               <BadgeItem>
                    <FaInstagram className={className} />
               </BadgeItem>
               <BadgeItem>
                    <FaLinkedinIn className={className} />
               </BadgeItem>
               <BadgeItem>
                    <FaGithub className={className} />
               </BadgeItem>
               <BadgeItem>
                    <FaWhatsapp className={className} />
               </BadgeItem>
          </>
     )
}

export default BadgeSosmed