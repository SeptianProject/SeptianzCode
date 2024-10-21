const Home = () => {
     return (
          <div id="/" className="min h-[90vh] flex items-center">
               <div className="flex justify-between max-w-full items-center gap-x-5">
                    <div className="flex flex-col gap-y-2 w-1/2 h-[55vh]">
                         <h1 className="text-white font-bold text-6xl leading-tight">
                              Hello, Im <br />
                              <span className=""> SeptianzCode</span>
                         </h1>
                         <p className="text-white font-light text-base">
                              Lorem ipsum dolor sit amet consectetur adipisicing elit.
                              Dignissimos esse deleniti quos neque qui fugiat
                              laboriosam quia! Reiciendis, culpa autem magnam
                         </p>
                         <div className="flex gap-x-2 mt-5">
                              <button className="size-10 bg-secondary rounded-md"></button>
                              <button className="size-10 bg-secondary rounded-md"></button>
                              <button className="size-10 bg-secondary rounded-md"></button>
                              <button className="size-10 bg-secondary rounded-md"></button>
                         </div>
                    </div>
                    <div className="w-1/2 h-[70vh] bg-secondary rounded-lg">
                         <div className="bg-secondary" />
                    </div>
               </div>
          </div>
     )
}

export default Home