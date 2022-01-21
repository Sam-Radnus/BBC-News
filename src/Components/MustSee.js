import React, { Component } from 'react';
import TopNews from './TopNews';
import NewsItems from './NewsItems';
export default class MustSee extends Component {
    articles=[]
    constructor()
    {
        super()
        this.state={
            articles:[]
        }
    }
    async componentDidMount()
    {
        const url="https://newsapi.org/v2/top-headlines?q=see&from=2022-01-20&to=2022-01-20&sortBy=popularity&apiKey=a70c1839ba1c41c5b29461feee78b4af"
        let data=await fetch(url);
        let parsedData=await data.json();
        console.log("Hi");
        console.log(parsedData);
        this.setState({
            articles:parsedData.articles
        })
    }
  render() {
    return <div>
        
        <div style={{borderBottom:'solid',borderWidth:'1px',borderColor:'grey',marginBottom:'10px'}}className="container">
        <h1>Must See</h1>
                    <div className="row"> {this.state.articles.slice(0,1).map((element)=>
                          {
                            return <div className="col">
                            <TopNews title={element.title} description={element.description} 
                            imageURL={element.urlToImage?element.urlToImage:"https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"} 
                            author={element.author?element.author:"BBC News "} date={element.publishedAt} newsURL={element.url}/>
                        </div>
                          })}  </div>
                    <div className="row row-cols-4">
                        
                         {this.state.articles.slice(1,5).map((element)=>
                         {
                             return <div className="col">
                                 <NewsItems title={element.title} description={element.description} 
                                 imageURL={element.urlToImage?element.urlToImage:"https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"} 
                                 author={element.author?element.author:"BBC News "} date={element.publishedAt} newsURL={element.url}/>
                             </div>
                         })
                        }
                   </div>
            </div>
    </div>;
  }
}