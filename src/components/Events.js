import React from "react";   
const Event = (props) => {
  return(
    <div className="flex-item flex-event"> 
      <img src={"img/"+props.alt+".png"} className="event-image" alt={props.alt}/>
      <p className="item-about short">{props.about}</p> 
    </div>
  );
}
Event.defaultProps={
  alt:"",
  about:""
}
export const Events = (props) => { 
  return (
    <div style={props.style}> 
    <props.TopBackground page="events" title="events" subtitle="10 YEARS ANNIVERSARY"/> 
      <div className="center-flex-holder">  
        <props.Divider subtitle="ANOTHER YEAR ANOTHER CRYSTAL NIGHT" title="Great news"/>
        <div className="flex-container">  
          <div className="flex-item flex-event center">
            <Event alt="crystal" about="Yes! We are celebrating 10th anniversary! Our team prepared you a lot of surprises.
               Crystal Bar is a perfect place to chill and enjoy with your friends or beloved ones. Don't miss this unique oportunity to
               have fun with us! We expect you on May 1st in our beautiful city in our beautiful place!"/>
          </div>
        </div> 
      </div> 
      <div className="auto-flex-holder"> 
        <props.Divider subtitle="See other upcoming events" title="Upcoming events"/>  
        <div className="flex-container center"> 
          <Event alt="jazz"/> 
          <Event alt="keeprocking"/> 
          <Event alt="electrojazz"/> 
          <Event alt="earth"/> 
        </div>
      </div> 
    </div>
    ) 
}