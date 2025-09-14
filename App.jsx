import NavBar from "./components/NavBar"
import HomePage from "./pages/HomePage"

//smooth scroll
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import { useRef, useEffect } from "react";

function App() {

  const contentRef = useRef(null)

  useEffect(() => {

      gsap.registerPlugin(ScrollTrigger,ScrollSmoother)
      const smoother = ScrollSmoother.create({
        content: "#smooth-content",
        smooth: 1.8,
        effects: true,
      })

      return() => {
        smoother && smoother.kill();
        ScrollTrigger.getAll().forEach((t) => t.kill());
      }

  }, [])

  return (
    <div className="text-zinc-100 bg-black p-4">
      <NavBar />
      <div id="smooth-content" ref={contentRef}>
        <HomePage />
      </div>
    </div>
  )
}

export default App
