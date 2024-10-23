type BoxProps = {
     text: string
}

const Box = ({ text }: BoxProps) => {
     return (
          <h2 className="bg-secondary size-12 text-base font-light
          rounded justify-center center flex items-center">
               {text}
          </h2>
     )
}

export default Box