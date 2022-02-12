import React, { Component } from 'react';
import '../App.css';
export const NewsItems =(props)=> {
    let underLine=(e)=>
    {
      
       e.target.style.textDecoration='underline';
       e.target.style.color='rgb(19,128,161)';
      
    }
    let NotUnderLine=(e)=>
    {
       e.target.style.textDecoration='none';
       e.target.style.color='rgb(34,34,34)';
    
    }
   let myStyle={
        height:'100',
        width:'100'
    }
        let {title,description,imageURL,newsURL,author,date,source}=props;
        return <div style={myStyle}>
            <a onMouseOver={underLine} onMouseOut={NotUnderLine} style={{color:'black',textDecoration:'none'}} href={newsURL}> <img  height="130" width="50" src={imageURL} className="card-img-top" alt="..." /></a>
                <div >
                    <a onMouseOver={underLine} onMouseOut={NotUnderLine} style={{color:'black',textDecoration:'none'}} href={newsURL}><h5 hover="true" className="card-title">{title}</h5></a>
                    {/* <p className="card-text">{description}</p> */}
                    <p><strong>Written By:-</strong>{author}on {new Date(date).toGMTString()}</p>
                </div>
            
        </div>;

}
