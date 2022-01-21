import React, { Component } from 'react';

export default class Read extends Component {
    underLine=(e)=>
    {
      
       e.target.style.textDecoration='underline';
      
    }
    NotUnderLine=(e)=>
    {
       e.target.style.textDecoration='none';
    
    }
    render() {
        let {index,title,newsURL}=this.props;
        return <div>
          {/* <a onMouseOver={this.underLine} onMouseOut={this.NotUnderLine} style={{color:'black',textDecoration:'none'}} href={newsURL}><h5 hover="true" className="card-title">{title}</h5></a> */}
        <a onClick={()=>{console.log(newsURL)}}onMouseOver={this.underLine} onMouseOut={this.NotUnderLine} style={{color:'black',textDecoration:'none'}} href={newsURL}><h5 hover="true" className="card-title">{index+1}.{title}</h5></a>
        </div>;
  }
}
