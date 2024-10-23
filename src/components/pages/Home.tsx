import { navItems } from "../../assets/assets"
import BadgeSosmed from "../layouts/BadgeSosmed"

const Home = () => {
     return (
          <div id="/" className="min-h-[100dvh] transition-all duration-1000 lg:max-w-screen-lg flex flex-col items-center lg:items-start justify-center mx-auto">
               <h1 className="text-lg font-semibold absolute top-20">{navItems.logo}</h1>
               <div className="flex justify-between items-center gap-x-20 lg:mt-20">
                    <div className="flex flex-col items-center justify-center lg:items-start gap-y-2 lg:w-1/2 lg:h-[55vh]">
                         <h1 className="font-bold text-4xl lg:text-6xl leading-tight 
                         text-center lg:text-start">
                              Hello, Im <br />
                              <span className=""> SeptianzCode</span>
                         </h1>
                         <p className="text-sm font-light lg:font-normal lg:text-base text-center lg:text-start w-80">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit.
                              Dignissimos esse deleniti quos neque qui fugiat
                              laboriosam quia! Reiciendis, culpa autem magnam
                         </p>
                         <div className="flex gap-x-2 mt-5">
                              <BadgeSosmed />
                         </div>
                    </div>
                    <div className="hidden lg:w-1/2 lg:h-[70vh] lg:block">
                         {/* <img src={images.septianz} alt=""
                              className="w-full h-full object-cover object-center transition-all 
                              duration-500 hover:grayscale-0 grayscale brightness-75 hover:brightness-100" /> */}
                    </div>
               </div>
          </div>
     )
}

export default Home