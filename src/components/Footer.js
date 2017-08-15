import React from "react";   
export const Footer = (props) => { 
  return ( 
        <div className="auto-flex-holder">  
          <footer className="flex-container"> 
             <span className="flex-item">
              <p className="main-title center caps">Opening</p>
              <p className="item-about center">From Monday to Saturday</p>
              <p className="item-about center">From 9 am till 1 am</p> 
             </span> 
             <span className="flex-item">
              <p className="main-title center caps">Location</p>
              <p className="item-about center">Antifašističke borbe 21</p>
              <p className="item-about center">Belgrade, Serbia</p> 
             </span> 
          </footer>
          <footer className="center">
           <ul>
             <li>
               <a href="http://facebook.com" target="_blank"><img src="img/fb.png" alt="Facebook icon"/> </a>
               <a href="http://twitter.com" target="_blank"><img src="img/twitter.png" alt="Twitter icon"/></a>
               <a href="http://instagram.com" target="_blank"><img src="img/ig.png" alt="Instagram icon"/></a>
               <a href="http://pinterest.com" target="_blank"><img src="img/pinterest.png" alt="Pinterest icon"/></a> 
             </li>
           </ul> 
          </footer>
        </div> 
    ) 
}