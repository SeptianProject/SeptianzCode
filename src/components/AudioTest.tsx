import { useEffect, useRef, useState } from "react"

const AudioTest = () => {
     const [isPlaying, setIsPlaying] = useState(false)
     const audioRef = useRef<HTMLAudioElement | null>(null)

     useEffect(() => {
          // Inisialisasi audio
          audioRef.current = new Audio('/glitch.mp3')

          // Optional: Log untuk memastikan audio berhasil dimuat
          audioRef.current.addEventListener('loadeddata', () => {
               console.log('Audio berhasil dimuat!')
          })

          audioRef.current.addEventListener('error', (e) => {
               console.error('Error loading audio:', e)
          })

          // Cleanup
          return () => {
               if (audioRef.current) {
                    audioRef.current.pause()
                    audioRef.current = null
               }
          }
     }, [])

     const playAudio = async () => {
          try {
               if (audioRef.current) {
                    // Reset posisi audio ke awal
                    audioRef.current.currentTime = 0
                    // Set volume (0.0 to 1.0)
                    audioRef.current.volume = 0.5

                    await audioRef.current.play()
                    setIsPlaying(true)

                    // Reset isPlaying ketika audio selesai
                    audioRef.current.onended = () => {
                         setIsPlaying(false)
                    }
               }
          } catch (error) {
               console.error('Error playing audio:', error)
               setIsPlaying(false)
          }
     }

     const pauseAudio = () => {
          if (audioRef.current) {
               audioRef.current.pause()
               setIsPlaying(false)
          }
     }

     return (
          <div className="flex flex-col items-center justify-center min-h-screen gap-4">
               <h1 className="text-2xl font-bold mb-4">Audio Test</h1>

               <div className="flex gap-4">
                    <button
                         onClick={playAudio}
                         className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
                         disabled={isPlaying}
                    >
                         Play Audio
                    </button>

                    <button
                         onClick={pauseAudio}
                         className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 disabled:bg-gray-400"
                         disabled={!isPlaying}
                    >
                         Stop Audio
                    </button>
               </div>

               <div className="mt-4 text-sm text-gray-600">
                    Status: {isPlaying ? 'Playing' : 'Stopped'}
               </div>
          </div>
     )
}

export default AudioTest