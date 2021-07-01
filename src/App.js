import "./styles/App.css";
import Intro from "./components/Intro";
import Selection from "./components/Selection";

function App() {
  return (
    <div className="App">
      <section className="title">
        <Intro />
      </section>
      <section className="skills">
        <h1>Skills</h1>
      </section>
      <section className="projects">
        <h1>Projects</h1>
      </section>
      <section className="contact">
        <h1>Resume</h1>
      </section>
      <section className="contact">
        <h1>Socials</h1>
      </section>
    </div>
  );
}

export default App;
