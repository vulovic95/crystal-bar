import React from "react";    
export const Home = (props) => { 
  return (
    <div style={props.style}>
      <props.TopBackground page="home" title="crystal" subtitle="ALL DAY COCKTAIL BAR"/>
      <main className="holder">
        <div className="center-flex-holder">  
          <props.Divider subtitle="Cocktail bar" title="A daily escape"/>
          <div className="flex-container">
            <props.TopItem name="Tequila Sunrise" alt="tequila" about="Rich, distinctive and wonderfully complex, its flavor strikes the perfect balance between agave, wood and hints of vanilla. Best experienced neat in a snifter or simply on the rocks."/>
            <props.TopItem name="Mojito Bay" alt="mojito" about="Mojito is a traditional Cuban highball. Traditionally, a mojito is a cocktail that consists of five ingredients: white rum, sugar, lime juice, soda water, and mint."/>
            <props.TopItem name="Tequila Sunrise" alt="cocktail" about="While the origin of this popular brunch cocktail is debatable, the Tequila Sunrise’s staying power leaves no question. The Bloody Mary is a vodka-soaked nutritional breakfast and hangover cure all in one."/> 
          </div>
          <div className="auto-flex-holder">  
           <props.Divider subtitle="About our place" title="Few words"/> 
           <p className="item-about long-text">
            Wanting to avoid the daily crowd? From 9 am until at least midnight Monday to Saturday nights, Crystal Bar offers a 
            unique and intimate nighttime experience.
            Our guys provide one of the top cocktail experiences in Serbia. <br/><br/>
            Complied with a substantial knowledge of all kinds of alcohol, 
            lovingly prepared tapas, an ever-growing Whisky selection and witty banter, we highly recommend you search us out and give it a 
            go. Whether you’re after cinema snacks, a post-movie debrief or after-work drinks, we’ve got you covered with our tasty treats, 
            delicious share plates and meals. Visit us for a choc-top or stay for a diffenrent types of drinks. 
            We are fully licensed with an extensive wine list, selection of cocktails and beer on tap. 
            Cosy and refined, this friendly bar and café is one of the best spots in Serbia to relax with a drink. Warm up by the open 
            fire in the winter and enjoy cool summer nights in the outdoor courtyard. If you’re feeling hungry, enjoy bar bites or even a 
            full warm meal.<br/><br/>
            We guarantee! Crystal Caffee &amp; Bar is the perfect place to enjoy a pre-show drink or a bite to eat!
            Located in the Belgrade, Crystal Caffee and Bar offers great coffee, delicious sweet and savoury cabinet food and a 
            selection of local and international wines and craft beers. 
            Since opening we've built up a great bunch of regulars. Some get their coffee fix on their way to work, others enjoy the free
            wifi for business meetings - and most come back for Happy Hour!
           </p>
         </div>
        </div>
      </main> 
    </div>
    ) 
}
