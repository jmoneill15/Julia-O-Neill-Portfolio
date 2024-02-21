import React from "react";
import {motion} from "framer-motion";
import "./footer.css";
import linkedinLogo from "../../assets/LinkedIn.PNG";
import githubLogo from "../../assets/GitHub.PNG";
import gitlabLogo from "../../assets/GitLab.png";

const Footer = () => {
    return(
        <section id="intro"                 
        style={{
            placeContent: "center",
            height: "130vh",
        }}>
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
    }} 
    src={githubLogo} alt="github" className="socialsImg"></motion.img></a>
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
</section>);
}

export  default Footer;