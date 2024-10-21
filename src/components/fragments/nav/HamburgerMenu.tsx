import HamburgerItem from "./HamburgerItem"

type TProps = {
     isOpen: boolean
     setIsOpen: () => void
     className?: string
}

const HamburgerMenu = ({ isOpen, setIsOpen, className }: TProps) => {
     return (
          <button className={`space-y-1 ${className} transition-all duration-500 z-20`}>
               {isOpen ? (
                    <>
                         <HamburgerItem setIsOpen={setIsOpen} isOpen={isOpen}
                              className={`${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                         <HamburgerItem setIsOpen={setIsOpen} isOpen={isOpen}
                              className={`${isOpen ? 'opacity-0 w-0 -translate-x-2' : ''}`} />
                         <HamburgerItem setIsOpen={setIsOpen} isOpen={isOpen}
                              className={`${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
                    </>
               ) : (
                    <>
                         <HamburgerItem setIsOpen={setIsOpen} isOpen={isOpen} />
                         <HamburgerItem setIsOpen={setIsOpen} isOpen={isOpen} />
                         <HamburgerItem setIsOpen={setIsOpen} isOpen={isOpen} />
                    </>
               )}
          </button>
     )
}

export default HamburgerMenu