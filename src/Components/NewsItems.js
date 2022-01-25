import React, { Component } from 'react';

export default class NewsItems extends Component {
    underLine=(e)=>
    {
      
       e.target.style.textDecoration='underline';
      
    }
    NotUnderLine=(e)=>
    {
       e.target.style.textDecoration='none';
    
    }
    myStyle={
        height:'100',
        width:'100'
    }
    render() {
        let {title,description,imageURL,newsURL,author,date}=this.props;
        return <div className="col" >
        <div style={this.myStyle}>
            <a onMouseOver={this.underLine} onMouseOut={this.NotUnderLine} style={{color:'black',textDecoration:'none'}} href={newsURL}> <img  height="130" width="50" src={imageURL} className="card-img-top" alt="..." /></a>
                <div >
                    <a onMouseOver={this.underLine} onMouseOut={this.NotUnderLine} style={{color:'black',textDecoration:'none'}} href={newsURL}><h5 hover="true" className="card-title">{title}</h5></a>
                    {/* <p className="card-text">{description}</p> */}
                    <p><strong>Written By:-</strong>{author}on {new Date(date).toGMTString()}</p>
                </div>
            </div> 
        </div>;
    }
}
