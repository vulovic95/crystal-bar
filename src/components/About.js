import React from "react";   
export const About = (props) => { 
  return (
    <div style={props.style}> 
      <props.TopBackground page="about" title="about" subtitle="Author of this website"/>
      <main className="holder">
        <div className="center-flex-holder">
          <props.Divider subtitle="The creator" title="Who's this?"/>
          <div className="flex-container"> 
            <span className="flex-item center">
              <img src="img/beard.png" className="item-pic" alt="author icon"/>
              <p className="item-name center"><a className="link" target="_blank" href="http://ivan.vulovic.xyz">Ivan Vulović</a></p>
              <p className="item-about short">
                Hello! I am Ivan and I am living in Belgrade, Serbia.
                Currently I'm a student of a University of Belgrade - ICT College, majoring in Internet Technologies and 
                I like both frontend and backend developing, but i prefer frontend. I am mainly interested in JavaScript.
              </p>  
              <ul id="social">
                <li>
                  <a href="https://www.facebook.com/vulovic95" target="_blank"><img src="img/fb.png" alt="Facebook icon"/> </a>
                  <a href="https://www.instagram.com/vulovic95/" target="_blank"><img src="img/ig.png" alt="Instagram icon"/></a>
                  <a href="https://www.linkedin.com/in/vulovic95/" target="_blank"><img src="img/in.png" alt="Linkedin icon"/></a> 
                  <a href="http://ivan.vulovic.xyz" target="_blank"><img src="img/www.png" alt="Website icon"/></a> 
                </li>
              </ul> 
           </span>
          </div>
        </div>
      </main> 
    </div>
    ) 
}