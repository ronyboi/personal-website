import "./styles/App.css";
import Intro from "./components/Intro";
import Resume from "./components/Resume";
import Social from "./components/Social";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <section id="title" className="title">
        <Intro />
      </section>
      <section id="skills" className="skills">
        <h1>Skills</h1>
      </section>
      <section id="projects" className="projects">
        <h1>Projects</h1>
      </section>
      <section id="resume" className="resume">
        <Resume />
      </section>
      <section id="socials" className="socials">
        <Social />
        <Footer />
      </section>
    </div>
  );
}

export default App;
