import React, { Component } from 'react';
import Read from './Read';
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
  
    const url="https://newsapi.org/v2/top-headlines?sources=bbc-news&sortBy=popularity&apiKey=a70c1839ba1c41c5b29461feee78b4af"
    let data=await fetch(url);
    let parsedData=await data.json();
    console.log("hi");
    this.setState({
        articles:parsedData.articles
    })
   
}
  render() {
    return <div>
       <div style={{borderBottom:'solid',borderWidth:'1px',borderColor:'grey',marginBottom:'10px'}}className="container">
           <h1 id="line"><span>Most Read</span></h1>
         <div class="row row-cols-2">
                {this.state.articles.map((element,index)=>
                    {
                        return <div key={element.title} className="col">
                         <Read index={index} title={element.title} newsURL={element.url} />
                        </div>
                    })}        
  </div>
</div>
    </div>;
  }
}
