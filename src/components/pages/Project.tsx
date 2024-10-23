
const Project = () => {
     const items = [
          '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
          '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
          '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
     ]

     return (
          <div id="project" className="min-h-[100dvh] max-w-full flex flex-col justify-center">
               <div className="w-full max-w-screen-lg mx-auto py-10">
                    <h1 className="">Lorem, ipsum dolor.</h1>
                    <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
               </div>
               <div className="w-full h-[80dvh] relative overflow-hidden">
                    <div className="grid grid-cols-4 grid-rows-4 gap-y-[16rem] gap-x-[14rem]
                    lg:grid-rows-5 lg:grid-cols-6 lg:gap-y-[19rem] lg:gap-x-[10rem]
                    transform -rotate-45 translate-y-32 -translate-x-40 lg:-translate-x-80 lg:-translate-y-80
                    absolute inset-0 scale-110">
                         {items.map((item, index) => {

                              return (
                                   <div
                                        key={index}
                                        className="bg-secondary w-52 h-60 lg:w-60 lg:h-72 hover:scale-105 rounded-lg transition-transform duration-500
                                        flex items-center justify-center text-lime-50">
                                        {item}
                                   </div>
                              )
                         })}
                    </div>
               </div>
          </div>
     )
}

export default Project 