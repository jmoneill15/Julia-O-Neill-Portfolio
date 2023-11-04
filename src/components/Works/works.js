import React from "react";
import {motion} from "framer-motion";
import "./works.css";
import periodLogo from "../../assets/periodLogo.PNG";
import moviePediaLogo from "../../assets/movepedia.png";
import ciscwebsiteLogo from "../../assets/275WebsiteLogo.png";
/*
<div className = "worksImgs">
    <a href=""  target="_blank" rel="noopener noreferrer"><img src="" alt="" className="worksImg"/></a>
       <div className = "workText">
            <span className = "title"> <br/></span>
            <span className = "description"></span>
        </div>
    </div>

*/
const Works = () => {
    return(
        <section id="works">
            <heading className="worksTitle">My Portfolio</heading>
            <div className="workGrid">
            <div className = "worksImgs">
                <a href="https://jmoneill15.github.io/HenHack-Period-Poverty/" target="_blank" rel="noopener noreferrer"><img src={periodLogo} alt="period logo" className="worksImg"/></a>
                <div className = "workText">
                <span className = "title">Period Poverty <br/></span>
                <span className = "description">Informational site for users to learn about Period Poverty</span>
                </div>
            </div >
            <div className = "worksImgs">
                <a href="https://amansjot.github.io/Team5-MoviePedia/" target="_blank" rel="noopener noreferrer"><img src= {moviePediaLogo} alt="MoviePedia" className="worksImg"/></a>
                <div className = "workText">
                    <span className = "title">MoviePedia <br/></span>
                    <span className = "description">Multipurpose user interactive Movie list site.</span>
                </div>
            </div> 
            <div className = "worksImgs">
            <a href="https://jmoneill15.github.io/tasks/"  target="_blank" rel="noopener noreferrer"><img src={ciscwebsiteLogo} alt="CISC275 Website" className="worksImg"/></a>
                <div className = "workText">
                <span className = "title">CISC275 Website <br/></span>
                    <span className = "description">React website implementing Typescript and React hooks to create various components.</span>
                </div>
            </div>
            </div>
            
        </section>
    );

}
export default Works;