import React from "react";
import "./intro.css";
import headshot from "../../assets/Headshot.png";
//add href="" target="_blank" rel="noopener noreferrer" to <a> for img
const Intro = () => {
    return(
        <section id="intro"                 
        style={{
            placeContent: "center",
            height: "130vh",
        }}>
            <div className="introContent">
                <span className = "hello">Hello,</span>
                <span className= "introText">I'm <span className="introName">Julia </span><br/> <span className ="position">Undergraduate Student</span><br/></span>
                <span className = "introPara">
                    I am in my third year at the University of Delaware, where I am
                    working towards a Computer Science BS with a focus in Software Engineering and a minor in Mathematics.
                </span>
                
            </div>
            <img src={headshot} alt="Profile" className="bg"/>
        </section>

    );

}
export default Intro;