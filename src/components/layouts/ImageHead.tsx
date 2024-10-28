import { images } from '../../assets/assets'

const ImageHead = () => {
     return (
          <>
               <img id='image' src={images.septianz} alt="SeptianzCode.id"
                    className="w-[20rem] h-full cursor-grabbing select-none
                              object-cover object-top transition-all box-content
                              duration-500 hover:grayscale-0 grayscale brightness-75
                              hover:brightness-100 group-hover:hover" />
               <BgRectangle index='rectangle-1' className='h-[55vh] -left-20' />
               <BgRectangle index='rectangle-2' className='h-[80vh] right-52 rounded-tl-3xl' />
               <BgRectangle index='rectangle-3' className='w-[16rem] h-[70vh] right-16 rounded-tr-3xl' />
          </>
     )
}

export default ImageHead

type BgRectangle = {
     className: string
     index: string
}

const BgRectangle = ({ className, index }: BgRectangle) => {
     return (
          <div id={index} className={`bg-secondary w-[10rem] ${className}
                         absolute bottom-0 -z-10 rounded-bl-3xl`} />
     )
}