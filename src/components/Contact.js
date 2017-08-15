import React from "react";      
export class Contact extends React.Component {  
  constructor(props){
    super(props); 
    this.state = {
        tbName: "",
        tbEmail: "",
        taMessage: "", 
        status: false
    }
  } 
  disable(){
    $("#btnSubmit").prop("disabled", true); 
    $("#btnSubmit").css("background", "#DDD");
  }
  enable(){ 
    $("#btnSubmit").prop("disabled", false); 
    $("#btnSubmit").css("background", "rgb(87, 225, 142)"); 
  }
  componentDidMount(){ 
     this.disable();
  }
  check(e){
    var value = $.trim(e.target.value); 
    switch(e.target.name){
      default: value != "" ? this.setState({ [e.target.name] : value }) : this.setState({ [e.target.name] : "" }); break;
    } 
    if(this.state.tbName != "" && this.state.tbEmail != "" && this.state.taMessage != ""){
      let regExEmail=/^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/;
      let regExFullName=/^[A-Z][a-z]{1,20}\s[A-Z][a-z]{1,20}$/;
      let regExNameTest=regExFullName.test(this.state.tbName);
      let regExEmailTest=regExEmail.test(this.state.tbEmail);
      if(regExNameTest && regExEmailTest){
         this.setState({status:true});
         this.enable(); 
      }
      else{ 
        this.setState({status:false});
        this.disable();
      }
    }
    else{
      this.setState({status:false});
      this.disable(); 
    }
  }
  handleForm(e){
    e.preventDefault(); 
    $("#contactForm")[0].reset();
    this.disable();
    this.setState({
      tbName: "",
      tbEmail: "",
      taMessage: "",
      status: false
    }); 
    setTimeout(function () {
      $("#formResult").fadeIn(1000).html("Thanks for collaborating. We will reply shortly.").delay(3000).fadeOut(1000);
    }, 1000); 
  }
  render(){
   return (
    <div style={this.props.style}> 
      <this.props.TopBackground page="contact" title="contact" subtitle="CRYSTAL CLEAR BAR"/>   
        <div className="auto-flex-holder"> 
          <this.props.Divider subtitle="Anytime Anyday" title="Reach us"/>  
          <div className="flex-container"> 
          <this.props.TopItem alt="location" name="Location" firstLine="Antifašističke borbe 21" secondLine="Novi Beograd, Serbia"/> 
          <this.props.TopItem alt="time" name="Opening" firstLine="From Monday to Saturday" secondLine="From 9 am till 1 am"/> 
          <this.props.TopItem alt="eventbell" name="Setup event" firstLine="Pick a day and organise your event" secondLine="Reach us for more info"/> 
          </div>
        </div>  
          <div className="auto-flex-holder"> 
          <p className="center long-text">For every question, complaint or even a single hello, don't hesitate to reach to us.</p>
          <form action="#" id="contactForm" method="POST">
            <input type="text" name="tbName" id="tbName" placeholder="Full Name" onChange={this.check.bind(this)} onBlur={this.check.bind(this)}/>
            <input type="text" name="tbEmail" id="tbEmail" placeholder="E-mail"  onChange={this.check.bind(this)} onBlur={this.check.bind(this)}/>
            <textarea name="taMessage" id="taMessage" cols="30" rows="10" placeholder="Message" onChange={this.check.bind(this)} onBlur={this.check.bind(this)}/>
            <input type="submit" id="btnSubmit" className="buttonError" value="SEND" onClick={this.handleForm.bind(this)}/>
            <p id="formResult"></p>
            <details className="center" id="formResult" className="rules">
              <summary>Click here to read our rules about filling out our contact form.</summary><br/>
              1. Name should have both first letters capitalized. Example: John Doug <br/>
              2. Email should be in the right format. Example: john.doug@mail.com<br/>
              3. Message must contain at least 1 character
            </details>
          </form>
          </div>  
    </div>
    ) 
   }
} 