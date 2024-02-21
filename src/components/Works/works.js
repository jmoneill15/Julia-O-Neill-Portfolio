import React, {useState} from "react";
import { useEffect } from "react";
import {motion} from "framer-motion";
//import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons';
import { Card} from 'antd';
//import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

//import { Segmented } from 'antd'; 
import "./works.css";
import workData from "/Users/juliaoneill/Julia-O-Neill-Portfolio/src/works.json";
/*
import periodLogo from "../../assets/periodLogo.PNG";
import moviePediaLogo from "../../assets/movepedia.png";
import ciscwebsiteLogo from "../../assets/275WebsiteLogo.png";
*/
//make each card black and then on hover make it change to an image of the item like do that in the css and find a way to implement the image from the works json

/*
<div className = "worksImgs">
    <a href=""  target="_blank" rel="noopener noreferrer"><img src="" alt="" className="worksImg"/></a>
       <div className = "workText">
            <span className = "title"> <br/></span>
            <span className = "description"></span>
        </div>
    </div>

*/
const {Meta} = Card;

const Works = () => {

    //const [view, setView] = useState('Grid');


    const [work, setData] = useState([]);
    useEffect(()=> {
        setData(workData);
    }, []);

    const GridView= () =>{
        return (
            <motion.div id="grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', overflow: "hidden", position: "relative",padding: "1.5rem 1.5rem" }}>
                {work.map(work => (
                    <Card id="workCard" hoverable key={work.id} style={{ width: 325, height:300}}
                        cover={
                         <div>
                            <motion.img
                                src={work.original}
                                alt="Original"
                                style={{
                                    width: 325,
                                    height: 300,
                                    
                                    position: "absolute"
                                }}
                                initial={{ opacity: 1 }}
                                whileHover={{ opacity: 0 }}
                                transition={{
                                    duration: 1,
                                    ease: "easeOut",
                                }}
                            />
                            <motion.img
                                src={work.hover}
                                alt="Hover"
                                style={{
                                    width: 325,
                                    height: 300,
                                   
                                    position: "absolute",
                                    opacity: 0, // Initially hidden
                                }}
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }} // Show hover image on hover
                                transition={{
                                    duration: 1,
                                    ease: "easeIn",
                                }}
                            />
                        </div>
                        }
                        >
                        
                        <Meta id="bottomCard"
                            description="This is the description"
                        />
                    </Card>
                ))}
            </motion.div>
        );
    }

/*
    const ListView= () =>{
        return(
            <div></div>
        );


    }
    */
    return (
        GridView()
    );

    /*
    return(
        <div>
        
        <Segmented
        options={[
          {
            value: 'List',
            icon: <BarsOutlined />,
          },
          {
            value: 'Grid',
            icon: <AppstoreOutlined />,
          },
        ]}
        value = {view}
        onChange={setView}
      />
    
        
      </div>
    );
    
    */
    /*
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
    */

}
export default Works;