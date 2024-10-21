import Footer from "./components/layouts/Footer"
import Nav from "./components/layouts/Nav"
import About from "./components/pages/About"
import Home from "./components/pages/Home"
import Project from "./components/pages/Project"
import Skill from "./components/pages/Skill"

const App = () => {
  return (
    <section className="relative max-w-full px-60 container scroll-smooth bg-dark">
      <Nav />
      <Home />
      <About />
      <Skill />
      <Project />
      <Footer />
    </section>
  )
}

export default App