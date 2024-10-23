import BoxDash from "../fragments/BoxDash"

const About = () => {
     return (
          <div id="about" className="lg:max-w-screen-lg min-h-[100dvh] transition-all duration-1000 flex justify-center items-center mx-auto">
               <div className="flex flex-col lg:flex-row lg:justify-between items-start justify-center gap-y-20 lg:gap-x-32">
                    <div className="spacey-2 lg:w-1/2">
                         <h2 className="text-4xl lg:text-6xl font-bold">About Me!</h2>
                         <p className="lg:pr-24 text-sm font-light lg:text-base lg:font-normal 
                         text-opacity-75 leading-relaxed mt-4 w-80 lg:w-full">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta error voluptatem, aperiam natus, vel saepe, quas consectetur nemo assumenda provident qui voluptates accusamus distinctio? Maxime, nemo iste at numquam praesentium laudantium perspiciatis quisquam ipsa quidem velit harum facere quasi possimus libero incidunt! Facere sit eligendi minima itaque harum deleniti, quibusdam maiores, ipsam natus fugiat possimus, nostrum dicta obcaecati dolorum necessitatibus?
                         </p>
                    </div>
                    <div className="flex w-1/2">
                         <div className="flex flex-col">
                              <BoxDash />
                         </div>
                         <div>
                              <h1 className=""></h1>
                              <h4></h4>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default About