import React from "react";
import {motion} from "framer-motion";
import "./navbar.css";
import {Link} from 'react-scroll';
import contactImg from "../../assets/ContactMe.PNG";
import logoImg from "../../assets/JO.png";

const Navbar = () => {

    return (
        <nav className="navbar">
            <motion.img 
                whileHover={{scale: 1.25}}
                initial={{
                    rotate: "0deg"
                }}
                animate={{
                    rotate: "360deg",
                }}
                transition={{
                    duration: 1.3,
                    ease: "easeIn",
                }}
                exit={{
                    rotate: "0deg"
                }}
            className = "logoImg" src={logoImg} alt="logo imag"/>
            <div className = "desktopMenu">
                <Link activeClass = "active" to="intro" spy={true} smooth={true} offset={-50} duration={500} className="destopMenuListItem">Home</Link>
                <Link activeClass = "active" to="" spy={true} smooth={true} offset={-50} duration={500} className="destopMenuListItem">About</Link>
                <Link activeClass = "active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="destopMenuListItem">Portfolio</Link>
                <Link activeClass = "active" to="" spy={true} smooth={true} offset={-50} duration={500} className="destopMenuListItem">Other</Link>
            </div>
            <motion.button whileHover={{scale: 1.25}} className = "desktopMenuButton" onClick={
                ()=> {document.getElementById("contactPage").scrollIntoView({behavior: "smooth"});}}>
                <img  className="desktopMenuImg"src={contactImg} alt="contact me"/>
            </motion.button >
            <div
                style={{ 
                    placeContent: "center",
                    height: "100vh",
                }}
            ></div>
       </nav>
    );
}
export default Navbar;