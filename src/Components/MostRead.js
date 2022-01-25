import React, { Component } from 'react';
import Read from './Read';
import '../App.css';
export default class MostRead extends Component {
    articles=[]
constructor()
{
    super()
    this.state={
        articles:[]
    }
}
i=0;
async componentDidMount()
{
    this.props.setProgress(10);
    const url="https://newsapi.org/v2/top-headlines?sources=bbc-news&sortBy=popularity&apiKey=a70c1839ba1c41c5b29461feee78b4af"
    let data=await fetch(url);
    this.props.setProgress(30);
    let parsedData=await data.json();
    console.log("Hi");
    console.log(parsedData);
    this.props.setProgress(50);
    this.setState({
        articles:parsedData.articles
    })
    this.props.setProgress(100);
}
  render() {
    return <div>
       <div style={{borderBottom:'solid',borderWidth:'1px',borderColor:'grey',marginBottom:'10px'}}className="container">
           <h1 id="line"><span>Most Read</span></h1>
         <div className="row row-cols-2">
                {this.state.articles.map((element,index)=>
                    {
<<<<<<< HEAD
                        return <div key={element.url} className="col">
=======
                        return <div  key={element.title} className="col">
>>>>>>> f49faee5d39d3c989dfa23b46377cb8149e3627d
                         <Read index={index} title={element.title} newsURL={element.url} />
                        </div>
                    })}        
  </div>
</div>
    </div>;
  }
}
