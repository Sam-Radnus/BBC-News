import React, { Component } from 'react';
import { useState,useEffect } from 'react';
import '../App.css'
export default function NewsItems(props) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 775);
    
    useEffect(() => {
        window.addEventListener("resize", () => {
            const ismobile = window.innerWidth < 775;
            if (ismobile !== isMobile) setIsMobile(ismobile);
        }, false);
    }, [isMobile]);

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
       // return <div className="row" style={myStyle}>
     return <div className={`${isMobile ? "row" : ""}`} style={myStyle}>
       
            <div className="col sm-4" >
                <a onMouseOver={underLine} onMouseOut={NotUnderLine} style={{color:'black',textDecoration:'none'}} href={newsURL}> <img  height="160" width="50" src={imageURL} className="card-img-top" alt="..." /></a>
                </div>
                <div className="col sm-8" >
                    <a onMouseOver={underLine} onMouseOut={NotUnderLine} style={{color:'black',textDecoration:'none'}} href={newsURL}><h5 hover="true" className="card-title my-2">{title}</h5></a>
                    {/* <p className="card-text">{description}</p> */}
                    <p><strong>Written By:-</strong>{author}on {new Date(date).toGMTString()}</p>
                </div>
            
        </div>;

}
