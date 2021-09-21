import React, { useState,useRef } from 'react';
import Navbar from '../Navbar/Navbar';
// import { db } from '../../firebase';
import './Contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    // }

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_zmgfn9j', 'template_wti6gp6', form.current, 'user_BgAzfRAl2Ln041ds3RNdr')
        .then((result) => {
            console.log(result.text);
            if(result.text ==='OK'){
                alert("Email sent successfully")
            }
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className="container mt-5 pt-5">
            <Navbar/>

            <div className="contact-section">

                <div className="title text-center mt-3 mb-3">
                    <h3>Lets ' Conversation</h3>
                </div>
                {/* <form action="" className="was-validated w-50 m-auto" onClick={handleSubmit}>
                    <div className="input-group ">
                        <input type="text" name="name" placeholder="Enter Your name" className="form-control" required

                            value={name}
                            onChange={(e) => setName(e.target.value)}


                        />
                    </div>
                    <br />


                    <div className="input-group">
                        <input type="email" name="email" placeholder="Enter Your email" className="form-control" required

                            value={email}
                            onChange={(e) => setEmail(e.target.value)}


                        />
                    </div>
                    <br />

                    <div className="input-group">
                        <textarea name="message" id="" cols="30" rows="10" className="form-control" placeholder="Message"


                            value={message}
                            onChange={(e) => setMessage(e.target.value)}


                        ></textarea>
                    </div>
                    <br />

                    <div className="input-group">
                        <input type="Submit" value="submit" className='btn-primary ' />

                    </div>
                </form> */}


<form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>


            </div>


        </div>
    );
};

export default Contact;