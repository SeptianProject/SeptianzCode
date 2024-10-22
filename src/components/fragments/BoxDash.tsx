import Box from "./Box"
import Dash from "./Dash"


const BoxDash = () => {
     const items = ['SD', 'HD', 'FHD']

     return (
          <div className='flex flex-col items-center'>
               {items.map((item, index) => (
                    <div key={index} className='flex flex-col items-center'>
                         <Box
                              text={item}
                         />
                         {index <= item.length && <Dash />}
                    </div>
               ))}
          </div>
     )
}

export default BoxDash