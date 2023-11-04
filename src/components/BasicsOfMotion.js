import React from "react";
import {motion} from "framer-motion";

const BasicsOfMotion = ()=> {
    return (
        
        <div
            style={{
                display: "grid",
                placeContent: "center",
                height: "100vh",
                gap: "0.8rem",
            }}
        >
            
            <button className = "expample-button">show/hide</button>
            <motion.div
            initial={{
                rotate: "0deg"
            }}
            animate={{
                rotate: "180deg"

            }}
            exit={{
                rotate: "0deg"
            }}
            transition={{
                duration: 1,
                ease: "circInOut"
            }}
            style= {{
                width: 150,
                height: 150,
                background: "black",
            }}
            ></motion.div>
        </div>
    );

};

export default BasicsOfMotion;