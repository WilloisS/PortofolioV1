import Home from "./components/Home";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="min-h-full px-4 overflow-hidden">
      <div className="max-w-6xl m-auto" >
        <div className="min-h-full">
          <Home />
          <Skill />
          <Projects />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
