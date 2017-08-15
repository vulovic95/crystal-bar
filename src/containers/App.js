import React from "react"; 
import ReactDOM from "react-dom";
import {Home} from "../components/Home";
import {About} from "../components/About";
import {Contact} from "../components/Contact"; 
import {Cocktails} from "../components/Cocktails"; 
import {Events} from "../components/Events"; 
import {NotFound} from "../components/NotFound"; 
import {Footer} from "../components/Footer";
import {BrowserRouter, Route, NavLink, Switch} from "react-router-dom"; 
import { browserHistory } from 'react-router';
import PropTypes from "prop-types"; 

const Divider = (props) => {
	return(
		<div>
			<p className="small-text center caps">{props.subtitle}</p>
		  <h4 className="main-title center caps">{props.title}</h4>
		  <img src="img/divider-filled.png" alt="Divider" className="divider"/>
	  </div>
	);
} 

const TopBackground = (props) => {
  return ( 
    <div>
      <div className={"background bg-"+props.page}><div className="black-bg"></div></div>
        <div className="holder">        
          <div className="center-flex-holder">
            <h1 className="title center">{props.title}</h1>
            <h3 className="subtitle center caps">{props.subtitle}</h3>
            <img src="img/divider.png" alt="Divider" className="divider"/>  
          </div>
      </div>  
    </div>
  );
}

const TopItem = (props) => { 
  return(   
    <span className="flex-item center">
      <img src={"img/"+props.alt+".png"} className="item-pic" alt={props.alt+" icon"}/>
      <p className="item-name center">{props.name}</p>
      <p className="item-about">{props.about}</p> 
      <p className="small-text">{props.firstLine}</p>
      <p className="small-text">{props.secondLine}
        {props.secondLine != "" ? <span><br/><img src="img/divider-line.png" alt="Divider"/></span> : ""} 
      </p> 
  </span>
  );
}
TopItem.defaultProps={
  alt:"eventbell",
  name:"",
  about:"",
  firstLine:"",
  secondLine:""
}


const HOC = (InnerComponent) => class extends React.Component {
	constructor(props) {
    super(props);
    this.mountStyle = this.mountStyle.bind(this);
    this.state = {
      style : {
        opacity: 0.5,
        transition: "all 2s ease",
      }
    }
  }
  componentWillReceiveProps(newProps) { 
    setTimeout(this.mountStyle, 500);
  }  
	mountStyle() {
    this.setState({
      style: { 
        opacity: 1,
        transition: "all 1s ease",
      }
    });
  } 
  componentDidMount(){ 
    setTimeout(this.mountStyle, 100); 
  } 
  render(){
  	return <InnerComponent Divider={Divider} TopBackground={TopBackground} TopItem={TopItem} {...this.props} {...this.state} />
  }
}

const HomeHOC=HOC(Home);
const EventsHOC=HOC(Events);
const CocktailsHOC=HOC(Cocktails);
const ContactHOC=HOC(Contact);
const AboutHOC=HOC(About);
const NotFoundHOC=HOC(NotFound);

export class App extends React.Component{
	render() {
  	return (
  		<BrowserRouter history={browserHistory} >
	  		<div>
	  			<div id="menu">
						<img id="menu-icon" src="img/grid.png" alt="Grid Image"/>	
	  				<nav className="menu-list">
	  					<span>Menu</span>
							<ul>
		  					<li><NavLink exact activeClassName="activeLink" to="/">Home</NavLink></li> 
		  					<li><NavLink activeClassName="activeLink" to="/events">Events</NavLink></li>  
		  					<li><NavLink activeClassName="activeLink" to="/cocktails">Cocktails</NavLink></li>  
		  					<li><NavLink activeClassName="activeLink" to="/contact">Contact</NavLink></li>  
		  					<li><NavLink activeClassName="activeLink"  to="/about">About</NavLink></li> 
		  				</ul>
	  				</nav> 
		  		</div>  
		  		<Switch> 
			  		<Route exact path="/" component={HomeHOC}/>
			  		<Route path="/home" component={HomeHOC}/>
			  		<Route path="/about" component={AboutHOC}/>
			  		<Route path="/contact" component={ContactHOC}/> 
			  		<Route path="/cocktails" component={CocktailsHOC}/> 
			  		<Route path="/events" component={EventsHOC}/> 
			  		<Route component={NotFoundHOC}/>		
		  		</Switch>	 
          <Footer/>
	  		</div> 
  		</BrowserRouter>
  	);
	}
}
 
 