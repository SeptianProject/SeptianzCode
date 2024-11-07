import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CurvedPathsDemo = () => {
     const waveRef = useRef<SVGPathElement>(null);
     const containerRef = useRef<HTMLDivElement>(null);

     useGSAP(() => {
          if (!waveRef.current || !containerRef.current) return

          const length = waveRef.current.getTotalLength()

          gsap.set(waveRef.current, {
               strokeDasharray: length,
               strokeDashoffset: length
          })

          gsap.to(waveRef.current, {
               strokeDashoffset: 0,
               duration: 2,
               ease: 'none',
               scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top center',
                    end: 'bottom center',
                    scrub: 1,
                    pin: true,
               }
          })
     }, []);

     return (
          <div className="min-h-screen max-w-screen-xl">
               <div ref={containerRef} className='min-h-[50vh] flex justify-center'>
                    <svg width="700" height="200" viewBox='0 0 700 200'
                         className='rotate-90'>
                         <path
                              ref={waveRef}
                              d="M 0,50 
                              C 50,0 100,100 150,50
                              C 200,0 200,200 300,50
                              C 400,0 400,200 500,50
                              C 500,0 500,250 700,50
                              "
                              stroke="white"
                              strokeWidth="2"
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              fill="none"
                         />
                    </svg>
               </div>
          </div>
     );
};

export default CurvedPathsDemo;