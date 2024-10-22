import { ReactNode } from "react"

type BadgeItem = {
     children?: ReactNode
}

const BadgeItem = ({ children }: BadgeItem) => {
     return (
          <button className="size-10 bg-secondary rounded-md flex items-center justify-center">
               {children}
          </button>
     )
}

export default BadgeItem