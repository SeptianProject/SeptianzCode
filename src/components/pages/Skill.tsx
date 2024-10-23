

const Skill = () => {
     const gridItem = ['0', '1', '2', '3', '4', '5']

     return (
          <div id="skill" className="min-h-[100dvh] max-w-screen-lg transition-all duration-1000 mx-auto">
               <div className="flex flex-col items-center justify-center w-full">
                    <h1 className="py-12 text-3xl font-bold">Lorem, ipsum dolor.</h1>
                    <div className="grid grid-cols-4 grid-rows-2 gap-2 w-full px-10 lg:px-0">
                         {gridItem.map((item, index) => {
                              const gridSetting = index === 0 ?
                                   'col-span-4 lg:col-span-2' : index <= 2 ?
                                        'col-span-2  lg:col-span-1' : index <= 4 ?
                                             'col-span-2 lg:col-span-1' :
                                             'col-span-4 lg:col-span-2'
                              return (
                                   <div key={index} className={`bg-secondary rounded-md w-full h-32 lg:h-60 
                                        flex items-center justify-center text-light ${gridSetting}`}>
                                        {item}
                                   </div>
                              )
                         })}
                    </div>
               </div>
          </div>
     )
}

export default Skill