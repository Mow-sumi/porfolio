import React from 'react';
import Typewriter from 'typewriter-effect';
import Navbar from '../Navbar/Navbar';
import './About.css'

const About = () => {
    return (
        <div className="container mt-5 py-5">
         
         <Navbar/>
         
            <div className="row mt-3 ">
            <h1 className="text-type">
                    <Typewriter
                        options={{

                            autoStart: true,
                            loop: true,
                            dealy: 40,
                            strings: ["Representing Thyself..."],
                        }}
                    />
                </h1>
                <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 pt-5 ">
                <h2>Web Developer</h2>
                <p > Broad design and development knowledge including HTML, CSS, JavaScript,
                Bootstrap, specialist on React, express js, Node js, Mongodb, Photoshop.
                 Good understanding of Object Oriented Programming. Confident in C and
                java coding.
                 Industry aware and technically up to speed with current software
                development tools.</p>   
                    
                 </div>
                  <div className="col-md-6 col-lg-6  col-sm-12 col-xs-12 pt-5 " >

                          <h2 className="offset-md-4">Personal Information</h2>

                    
                         <ul className="offset-md-4" >
                           <li>
                           
                            <strong>Name:  </strong>
                            <span>Mowsumi Akter</span>
                        </li>

                        <li>
                            <strong>Phone:  </strong>
                            <span>01796952646</span><br/>
                           
                        </li>
                        <li>
                            <strong >Email: </strong>
                            <span>mow.csediu@gmail.com</span>
                        </li>
                        
                    </ul> 
                   
                </div>
            </div>  
            

              <div className="row text-center mt-3">

                <h2 className="mt-5">Technical Skills</h2> <br/>

                <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 pt-5">
                <i className="fas fa-code"></i>
                <h4 className="pt-3">Wev Design</h4>
                <p>HTML is the standard markup language for documents designed to be displayed in a web browse.HTML describes the structure of a web page semantically and originally.</p>
                </div>

                <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 pt-5">
                <i className="fab fa-css3-alt"></i>
                <h4 className="pt-3">Wev Development</h4>
                <p>CSS is the language we use to style a Web page.CSS is used to define styles for our web pages, including the design, layout and variations in display for different devices and screen sizes.</p>
                </div>
                
                <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 pt-5" >
                <i class="fab fa-bootstrap"></i>
                <h4 className="pt-3">Wev Development</h4>
                <p>Bootstrap includes HTML and CSS based design templates for typography, forms, buttons, tables, navigation, modals, image carousels and many other, as well as optional JavaScript plugin</p>
                </div>
            </div>

          {/* //////Technical skills er second row/////// */}


              <div className="row text-center mt-3">

                <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 pt-5">
                 <i class="fab fa-js-square"></i>
                <h4 className="pt-3">Web Development</h4>
                <p>JavaScript (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages,</p>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 pt-5">
                <i class="fab fa-reacteurope"></i>
                <h4 className="pt-3">Wev Development</h4>
                <p>React is a JavaScript library created by Facebook.
                    React is a tool for building UI components.Instead of manipulating the browser's DOM directly, React creates a virtual DOM in memory, </p>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 pt-5">
                <i class="fab fa-node"></i>
                <h4 className="pt-3">Wev Development</h4>
                <p>Asynchronous event -driven c++ run time is designed to build scalable network application..Node.js can only run v8 engine of google chrome</p>
                </div>
            </div>


            {/* ////////third row technical skills//// */}


            <div className="row text-center mt-3">

                <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 pt-5">
                <i className="fas fa-quote-left"></i>
                <h4 className="pt-3">Wev Development</h4>
                <p>Asynchronous event -driven c++ run time is designed to build scalable network application..Node.js can only run v8 engine of google chrome</p>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 pt-5">
                <i class="fas fa-photo-video"></i>
                <h4 className="pt-3">Wev Development</h4>
                <p>Photoshop is Adobe's photo editing, image creation and graphic design software. The software provides many image editing features for raster (pixel-based) images as well as vector graphics.</p>
                </div>
                <div className="col-md-4 col-lg-4 col-sm-12 col-xs-12 pt-5">
                <i class="fab fa-css3"></i>
                <h4 className="pt-3">Wev Design</h4>
                <p>CSS is the language we use to style a Web page.CSS is used to define styles for our web pages, including the design, layout and variations in display for different devices and screen sizes.</p>
                </div>
                </div>


            
            </div> 
    );
};

export default About;