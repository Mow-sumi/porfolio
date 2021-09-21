import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import Navbar from './Navbar/Navbar';
import './Pages/Home.css';

const Home = () => {

    const [state] = useState({
        title: "Hi,,,,,,,,,",
        titleTwo:"I' am Mowsumi",
        titleThree: " I' am a web Developer",
        image: "/images/pic1.png.jpg",
    })

   
    return (

      
        <div className="container mt-5 py-3">
<Navbar/>

        <div className="home">
            <div className="home-intro">

                <h2>
                    <div className='title'>{state.title}</div>
                    <div className='titleTwo'>{state.titleTwo}</div>
                    <div className='titleThree'>{state.titleThree}</div>
                </h2>

                <div className="text">
                    <Typewriter
                    options={{
                        
                        autoStart:true,
                        loop: true,
                        dealy:40,
                        strings:["My hobby is codding."],
                    }}
                    />
                </div>

                <div className="contact-me">
                 <button className="button"><a href="https://drive.google.com/file/d/1ZH3lnjCD4QeDU2EOSbRYtWfvX75pVCWo/view?usp=sharing" target="_blank" rel="noreferrer">Download CV</a></button>
             </div>
            </div>

              {/* <div className="home-image">
               <img  className="image"src={state.image} alt="" />
            </div> */}
           </div>
           </div>

    );
};

export default Home;