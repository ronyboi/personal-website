import "./styles/App.css";
import Intro from "./components/Intro";
import Resume from "./components/Resume";
import Social from "./components/Social";
import Footer from "./components/Footer";
import Project from "./components/Project";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <section id="title" className="title">
        <Intro />
      </section>
      <section id="skills" className="skills">
        <Skills />
      </section>
      <section id="projects" className="projects">
        <Project />
      </section>
      {/* <section id="resume" className="resume">
        <Resume />
      </section> */}
      <section id="socials" className="socials">
        <Social />
        <Footer />
      </section>
    </div>
  );
}

export default App;
