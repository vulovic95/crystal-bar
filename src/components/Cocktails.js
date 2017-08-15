import React from "react";    

var cocktailsArray = [
  { name: "Tequila Sunrise", about: "TEQUILA AND ORANGE JUICE" },
  { name: "Hangman's Blood", about: "STRAWBERRY AND RUM" },
  { name: "Shandy", about: "NORTH DRINK" },
  { name: "Brass Monkey", about: "SAMBUCA AND ICE" },
  { name: "Zombie", about: "GIN AND WATER" },
  { name: "Buck's Fizz", about: "ICE AND MENT" },
  { name: "Bay Breeze", about: "Fruit PIECES" },
  { name: "Kamikaze", about: "WHISKEY and APPLE JUICE" },
  { name: "Churchill", about: "VODKA AND PINEAPPLE" }
];

const Cocktail = (props) => {
  return(
    <div className="normal-item"> 
      <img src={"img/"+props.alt+".png"} className="event-image" alt={props.alt}/>
      <p className="small-text caps">{props.about}</p>
      <p className="cocktail-name center caps">{props.name}</p> 
      <img src="img/divider-end.png" alt="Divider"/>
    </div>
  );
}
Cocktail.defaultProps={
  alt:"1",
  name:""
}

export const Cocktails = (props) => { 
  return (
    <div style={props.style}> 
      <props.TopBackground page="cocktails" title="cocktails" subtitle="FRESH AWESOMENESS"/>  
      <main className="holder">
        <div className="auto-flex-holder">  
          <props.Divider subtitle="Our secret combination" title="Recipes"/>
          <div className="flex-container">
            <props.TopItem name="Fresh Liquour" alt="barrel" about=" Liqueurs are typically quite sweet. They are made from a distilled spirit that has been flavored with fruit, cream, herbs, spices, flowers or nuts and bottled with added sugar or other sweetener."/>
            <props.TopItem name="Ripe Fruit" alt="strawberry" about="With all our great collection of ripe fruit, you just can't miss to taste our cocktails."/>
            <props.TopItem name="Secret Skills" alt="cooler" about="We have more other skills, but for now they are kept as a secret. Come enjoy with us and try to find out what is our really secret!"/> 
          </div>
          <div className="auto-flex-holder">    
            <props.Divider subtitle="Top level combinations" title="Fresh cocktails"/> 
            <div className="center">  
              {cocktailsArray.map((obj, index) => { return <Cocktail key={index} alt={index+1} name={obj.name} about={obj.about}/>})}
            </div>
         </div>
        </div>
      </main>   
    </div>
    ) 
} 