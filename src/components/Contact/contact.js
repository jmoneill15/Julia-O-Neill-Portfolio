import React, { useRef } from "react";
import {motion} from "framer-motion";
import "./contact.css";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_nybmth4', 'template_mzoik9e', form.current, 'fewENKdn2AqOsxmHq')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert("Email Sent!")
          }, (error) => {
              console.log(error.text);
          });
      };
    return(
        <section id="contactPage">
            <div className="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDescription">Please fill out the form to explore any work opportnities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <motion.input initial={{opacity: 0.5}}  whileHover={{ opacity: 1 }} whileTap={{opacity: 1, scale: 1.25 }} transition= {{duration: 1.2}} type="text" className="name" placeholder="Your Name" name="from_name"></motion.input>
                    <motion.input initial={{opacity: 0.5}}  whileHover={{ opacity: 1 }} whileTap={{opacity: 1, scale: 1.25 }} transition= {{duration: 1.2}} type ="text" className="email" placeholder="Your Email" name="from_email"></motion.input>
                    <motion.textarea initial={{opacity: 0.5}}  whileHover={{ opacity: 1 }} whileTap={{opacity: 1, scale: 1.25 }} transition= {{duration: 1.2}} className="msg" name="message" rows="5" placeholder="Your Message"></motion.textarea>
                    <motion.button whileHover={{scale: 1.2}} type="submit" value="Send" className="submitBtn">Submit</motion.button>
                    <div className="links">
                        <img src="" alt="" className="link"/>
                        <img src="" alt="" className="link"/>
                        <img src="" alt="" className="link"/>
                        <img src="" alt="" className="link"/>
                    </div>
                </form>
            </div>
        </section>
    );
} 
export default Contact;