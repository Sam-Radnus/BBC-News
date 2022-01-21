import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class TopNews extends Component {
    underLine=(e)=>
    {
       let x=document.querySelector('h5');
       x.style.textDecoration='underline';
      
    }
    NotUnderLine=(e)=>
    {
        let x=document.querySelector('h5');
       x.style.textDecoration='none';
    
    }
    myStyle={
        height:'100',
        width:'100'
    }
    render() {
        let {title,description,imageURL,newsURL,author,data,source}=this.props
        return (
        <div>
            <div className="card mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                    <a onMouseOver={this.underLine} onMouseOut={this.NotUnderLine} style={{color:'black',textDecoration:'none'}} href={newsURL}>  <img  href={newsURL} onMouseOver={this.underLine} onMouseOut={this.NotUnderLine} src={imageURL} className="img-fluid rounded-start" alt="..." /></a>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        <a onMouseOver={this.underLine} onMouseOut={this.NotUnderLine} style={{color:'black',textDecoration:'none'}} href={newsURL}> <h5 className="card-title">{title}</h5></a>
                            <p className="card-text">{description}</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            
        )
    }
}
