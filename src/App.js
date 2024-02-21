import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
//import BasicsOfMotion from "./components/BasicsOfMotion";


function App() {
  return (
    <div className="App">
      <div className = "portfolio-container">
          <div className ="portfolio-item"><Navbar/></div>
          <div className ="portfolio-item"><Intro/></div>
          <div className ="portfolio-item"><Works/></div>
          <div className ="portfolio-item"><Contact/></div>
          <div className ="portfolio-item"><Footer/></div>
        </div>
    </div>
  );
}

export default App;
