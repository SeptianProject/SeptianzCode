import { useState } from "react"
import Footer from "./components/layouts/Footer"
import Nav from "./components/layouts/Nav"
import About from "./components/pages/About"
import Home from "./components/pages/Home"
import Project from "./components/pages/Project"
import Skill from "./components/pages/Skill"
import SplashScreen from "./components/layouts/SplashScreen"
// import AudioTest from "./components/AudioTest"

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  return (
    <>
      {isLoading && <SplashScreen setIsLoading={setIsLoading} />}
      <section className="relative max-w-full min-h-screen 
    scroll-smooth bg-dark selection:bg-light selection:text-dark">
        {/* <AudioTest /> */}
        <Nav />
        <Home />
        <About />
        <Skill />
        <Project />
        <Footer />
      </section>
    </>
  )
}

export default App