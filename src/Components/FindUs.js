import React, { Component } from 'react';

export default class FindUs extends Component {
    myStyle={
        fontSize:'xx-large',
        marginLeft:'10px'
    }
    Flex={
       display:'flex',
       marginTop:'50px'
    }
    white='white';
    facebook='rgb(61,90,152)';
    instagram='rgb(217,49,117)';
    twitter='rgb(29,161,242)';
    youtube='rgb(255,0,0)';
  render() {
    return <div  className="container">
  <div className="row row-cols-4">
    <div style={this.Flex}className="col"><div style={{padding:'5px'}}><i style={{color:this.facebook, fontSize:'60px',  marginLeft:'30px'}}  size="big" class="fab fa-facebook-f"></i>
        <i   style={{color:this.youtube, fontSize:'60px',  marginLeft:'30px'}} size="big" class="fab fa-youtube"></i>
        <i  style={{color:this.twitter, fontSize:'60px',  marginLeft:'30px'}}  size="big" class="fab fa-twitter"></i>
        <i    style={{color:this.instagram, fontSize:'60px',  marginLeft:'30px'}}  size="big" class="fab fa-instagram"></i></div>
    <div style={{marginLeft:'60px'}} className="col"><p>Email us at <a href="mailto:haveyoursay@bbc.co.uk">haveyoursay@bbc.co.uk</a></p>
                         <p>Send an SMS or MMS to +44 7624 800100</p>
                         <p>Follow <a href="https://twitter.com/BBC_HaveYourSay">Have Your Say on Twitter</a></p> 
                         <p><a href="https://www.bbc.com/news/help-41670342">why you can trust BBC news</a></p>
    </div>
  </div>
  </div>
</div>;
  }
}
