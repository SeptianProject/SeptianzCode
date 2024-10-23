import { images, navItems } from "../../assets/assets"
import BadgeSosmed from "../layouts/BadgeSosmed"

const Home = () => {
     return (
          <div id="/" className="min-h-[100vh] transition-all duration-1000 
          lg:max-w-screen-lg flex flex-col items-center lg:items-start justify-center mx-auto">
               <h1 className="text-lg font-semibold absolute top-20">{navItems.logo}</h1>
               <div className="flex justify-between items-center gap-x-60 lg:w-full">
                    <div className="flex flex-col items-center justify-center
                    lg:items-start gap-y-2 lg:w-1/2 lg:h-[55vh] lg:mt-20">
                         <h1 className="font-bold text-4xl lg:text-6xl leading-tight 
                         text-center lg:text-start">
                              Hello, Im <br />
                              <span className=""> SeptianzCode</span>
                         </h1>
                         <p className="text-sm font-light lg:font-normal lg:text-base 
                         text-center lg:text-start w-80">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit.
                              Dignissimos esse deleniti quos neque qui fugiat
                              laboriosam quia! Reiciendis, culpa autem magnam
                         </p>
                         <div className="flex gap-x-2 mt-5">
                              <BadgeSosmed />
                         </div>
                    </div>
                    <div className="hidden lg:w-1/2 lg:h-[90vh] lg:block relative">
                         <img src={images.septianz} alt=""
                              className="w-[20rem] h-full cursor-grabbing select-none
                              object-cover object-top transition-all box-content
                              duration-500 hover:grayscale-0 grayscale brightness-75
                              hover:brightness-100 group-hover:hover" />
                         <div className="bg-secondary hover:bg-primary w-[10rem] h-[55vh] 
                         absolute bottom-0 -left-20 -z-10 rounded-bl-3xl" />
                         <div className="bg-secondary hover:bg-primary w-[10rem] h-[80vh] 
                         absolute bottom-0 right-52 -z-10 rounded-tl-3xl" />
                         <div className="bg-secondary hover:bg-primary w-[16rem] h-[70vh] 
                         absolute bottom-0 right-16 -z-10 rounded-tr-3xl" />
                    </div>
               </div>
          </div>
     )
}

export default Home