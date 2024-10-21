
type TProps = {
     isOpen: boolean
     setIsOpen: () => void
     className?: string
}

const HamburgerItem = ({ isOpen, setIsOpen, className }: TProps) => {
     return (
          <div onClick={setIsOpen} className={`w-6 h-[3px] bg-white 
               transition-all duration-500
               ${isOpen ? className : ''}`} />
     )
}

export default HamburgerItem