import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Projects from "./components/projects";
import About from "./components/about";
import Experience from "./components/experience";
import Contact from "./components/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Experience />
      <Contact />
    </>
  );
}
