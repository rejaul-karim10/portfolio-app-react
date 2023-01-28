import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";


function App() {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <About/>
     <Skills/>
     <Work/>
     <Contact/>
    </div>
  );
}

export default App;
