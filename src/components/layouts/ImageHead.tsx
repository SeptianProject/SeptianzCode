import gsap from 'gsap'
import { images } from '../../assets/assets'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { Draggable } from 'gsap/Draggable'

gsap.registerPlugin(Draggable)

const ImageHead = () => {
     const imageRef = useRef<HTMLImageElement>(null)
     const containerRef = useRef<HTMLDivElement>(null)
     let lastX = 0
     let velocityX = 0

     useGSAP(() => {
          if (imageRef.current && containerRef.current) {
               Draggable.create(imageRef.current, {
                    type: 'x,y',
                    edgeResistance: 0.5,
                    bounds: containerRef.current,
                    onDrag: function () {
                         const currentX = this.x
                         velocityX = currentX - lastX
                         lastX = currentX

                         const xVelocity = velocityX / 100
                         const rotation = Math.max(-45, Math.min(45, xVelocity))

                         gsap.to(imageRef.current, {
                              rotate: rotation,
                              duration: 0.2,
                              ease: 'power2.out'
                         })
                    },
                    onDragStart: () => {
                         gsap.to(imageRef.current, {
                              scale: 0.6,
                              duration: 0.2,
                              ease: 'power2.out'
                         })
                    },
                    onDragEnd: () => {
                         gsap.to(imageRef.current, {
                              scale: 1,
                              rotate: 0,
                              duration: 0.5,
                              ease: 'elastic.out(1, 0.5)'
                         })
                    }
               })
          }
     }, [])

     return (
          <div ref={containerRef} className='relative w-full h-full'>
               <img id='image' ref={imageRef}
                    src={images.septianz} alt="SeptianzCode.id"
                    className="w-[20rem] h-full cursor-grab select-none transform-gpu
                              object-cover object-top hover:grayscale-0 grayscale brightness-75
                              hover:brightness-100 group-hover:hover active:cursor-grabbing" />
               <BgRectangle index='rectangle-1' className='h-[55vh] -left-24 rounded-tl-3xl' />
               <BgRectangle index='rectangle-2' className='h-[80vh] right-40 rounded-tl-3xl' />
               <BgRectangle index='rectangle-3' className='w-[16rem] h-[70vh] right-0 rounded-tr-3xl' />
          </div>
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