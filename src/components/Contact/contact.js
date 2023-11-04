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
                    <input type="text" className="name" placeholder="Your Name" name="from_name"></input>
                    <input type ="text" className="email" placeholder="Your Email" name="from_email"></input>
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
                    <button type="submit" value="Send" className="submitBtn">Submit</button>
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