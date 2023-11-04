import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import BasicsOfMotion from "./components/BasicsOfMotion";


function App() {
  return (
    <div className="App">
      <div className = "portfolio-container">
          <div className ="portfolio-item"><Navbar/></div>
          <div className ="portfolio-item"><Intro/></div>
          <div className ="portfolio-item"><Works/></div>
          <div className ="portfolio-item"><Contact/></div>
          <BasicsOfMotion></BasicsOfMotion>
        
        </div>
    </div>
  );
}

export default App;
