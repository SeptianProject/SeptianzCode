import { images } from '../../assets/assets'

const ImageHead = () => {
     return (
          <>
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
          </>
     )
}

export default ImageHead