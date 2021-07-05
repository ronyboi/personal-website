import "./styles/App.css";
import Intro1 from "./components/Intro-1";
import Intro2 from "./components/Intro-2";

function App() {
  return (
    <div className="App">
      <section id="title" className="title">
        <div className="intro">
          <Intro1 />
          <Intro2 />
        </div>
      </section>
      <section id="skills" className="skills">
        <h1>Skills</h1>
      </section>
      <section id="projects" className="projects">
        <h1>Projects</h1>
      </section>
      <section id="resume" className="resume">
        <h1>Resume</h1>
      </section>
      <section id="socials" className="socials">
        <h1>Socials</h1>
      </section>
    </div>
  );
}

export default App;
