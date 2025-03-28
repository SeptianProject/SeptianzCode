import { useEffect, useRef, useState } from "react"
import Footer from "./components/layouts/Footer"
import About from "./components/pages/About"
import Home from "./components/pages/Home"
import Project from "./components/pages/Project"
import Skill from "./components/pages/Skill"
import SplashScreen from "./components/layouts/SplashScreen"
// Import standard version instead of premium plugin version
// import Layout from "./components/pages/DrawSvg"

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [startHomeAnimation, setStartHomeAnimation] = useState(false)
  const mainContentRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!isLoading) {
      setStartHomeAnimation(true)
    }
  }, [isLoading])

  return (
    <>
      {isLoading && <SplashScreen setIsLoading={setIsLoading} />}
      <section ref={mainContentRef}
        className="relative max-w-full min-h-screen scroll-smooth bg-dark 
        selection:bg-light selection:text-dark z-0">
        <Home startAnimation={startHomeAnimation} />
        <About />
        <Skill />
        <Project />
        {/* Remove Layout component that uses InertiaPlugin */}
        {/* <Layout /> */}
        <Footer />
      </section>
    </>
  )
}

export default App