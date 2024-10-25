import { navItems } from "../../assets/assets"
import TextHead from "../layouts/TextHead"
import BadgeSosmed from "../layouts/BadgeSosmed"
import ImageHead from "../layouts/ImageHead"

const Home = () => {
     return (
          <div id="/" className="min-h-[100vh] transition-all duration-1000 
          lg:max-w-screen-lg flex flex-col items-center lg:items-start justify-center mx-auto">
               <h1 className="text-lg font-semibold absolute top-20">{navItems.logo}</h1>
               <div className="flex justify-between items-center gap-x-60 lg:w-full">
                    <div className="flex flex-col items-center justify-center
                    lg:items-start gap-y-2 lg:w-1/2 lg:h-[55vh] lg:mt-20">
                         <TextHead />
                         <div className="flex gap-x-2 mt-5">
                              <BadgeSosmed />
                         </div>
                    </div>
                    <div className="hidden lg:w-1/2 lg:h-[90vh] lg:block relative">
                         <ImageHead />
                    </div>
               </div>
          </div>
     )
}

export default Home