
type Dash = {
     className?: string
}

const Dash = ({ className }: Dash) => {
     return (
          <div
               className={`h-[4rem] border-l-[2.5px] border-solid border-secondary
               ${className}`} />
     )
}

export default Dash