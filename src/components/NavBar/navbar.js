import React from "react";
import "./navbar.css";
import {Link} from 'react-scroll';
import contactImg from "../../assets/ContactMe.PNG";
import logoImg from "../../assets/JO.png";

const Navbar = () => {

    return (
        <nav className="navbar">
            <img className = "logoImg" src={logoImg} alt="logo imag"/>
            <div className = "desktopMenu">
                <Link activeClass = "active" to="intro" spy={true} smooth={true} offset={-50} duration={500} className="destopMenuListItem">Home</Link>
                <Link activeClass = "active" to="" spy={true} smooth={true} offset={-50} duration={500} className="destopMenuListItem">About</Link>
                <Link activeClass = "active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="destopMenuListItem">Portfolio</Link>
                <Link activeClass = "active" to="" spy={true} smooth={true} offset={-50} duration={500} className="destopMenuListItem">Other</Link>
            </div>
            <button className = "desktopMenuButton" onClick={
                ()=> {document.getElementById("contactPage").scrollIntoView({behavior: "smooth"});}}>
                <img className="desktopMenuImg"src={contactImg} alt="contact me"/>
            </button >
       </nav>
    );
}
export default Navbar;