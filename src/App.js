import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";

function App() {
  return (
    <div className="App">
          <Navbar/>
          <Intro/>
          <Works/>
          <Contact/>
    </div>
  );
}

export default App;
