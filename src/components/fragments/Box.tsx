type BoxProps = {
     text: string
}

const Box = ({ text }: BoxProps) => {
     return (
          <h2 className="bg-secondary size-10 
          rounded justify-center center flex items-center">
               {text}
          </h2>
     )
}

export default Box