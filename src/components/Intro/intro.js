import React from "react";
import {motion} from "framer-motion";
import "./intro.css";
import linkedinLogo from "../../assets/LinkedIn.PNG";
import githubLogo from "../../assets/GitHub.PNG";
import gitlabLogo from "../../assets/GitLab.png";
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
            <div className="socialMedias">
                <a href="https://www.linkedin.com/in/juliaoneill15" target="_blank" rel="noopener noreferrer" >                        
<motion.img 
            whileHover={{
                scale: 1.1,
            }}            
            initial={{ 
                scale: 0 
            }}
            animate={{ 
                rotate: 360, 
                scale: 1 
            }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 1.5,
            }}

             src={linkedinLogo} alt="linkedIn" className="socialsImg"></motion.img></a>
                    <a href="https://github.com/jmoneill15" target="_blank" rel="noopener noreferrer" >
        <motion.img 
            whileHover={{
                scale: 1.1,
            }}            
            initial={{ 
                scale: 0 
            }}
            animate={{ 
                rotate: 360, 
                scale: 1 
            }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 1.5,
            }} src={githubLogo} alt="github" className="socialsImg"></motion.img></a>
                    <a href="https://gitlab.eecis.udel.edu/jmoneill" target="_blank" rel="noopener noreferrer" >
        <motion.img
            whileHover={{
                scale: 1.1
            }}             
            initial={{ 
                scale: 0 
            }}
            animate={{ 
                rotate: 360, 
                scale: 1 
            }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                duration: 1.5,
            }} src={gitlabLogo} alt="gitlab" className="socialsImg"></motion.img></a>
            </div>
            <img src="" alt="Profile" className="bg"/>
        </section>

    );

}
export default Intro;