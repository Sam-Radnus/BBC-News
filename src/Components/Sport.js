import React, { Component } from 'react';
import TopNews from './TopNews';
import NewsItems from './NewsItems';
export default class Sport extends Component {
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
          this.props.progress(10);
        const url="https://newsapi.org/v2/top-headlines?country=gb&category=sport&sortBy=popularity&apiKey=a70c1839ba1c41c5b29461feee78b4af"
        let data=await fetch(url);
          this.props.progress(30);
        let parsedData=await data.json();
        console.log("Hi");
        console.log(parsedData);
         this.props.progress(50);
        this.setState({
            articles:parsedData.articles
        })
         this.props.progress(100);
    }
  render() {
    return <div>
          <div style={{borderBottom:'solid',borderWidth:'1px',borderColor:'grey',marginBottom:'10px'}}className="container">
                <h1>Sports</h1>
                    <div className="row"> {this.state.articles.slice(0,1).map((element)=>
                          {
                            return <div className="col">
                            <TopNews title={element.title} description={element.description} 
                            imageURL={element.urlToImage?element.urlToImage:"https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"} 
                            author={element.author?element.author:"BBC News "} date={element.publishedAt} newsURL={element.url}/>
                        </div>
                          })}  </div>
                    <div className="row row-cols-4">
                        
                         {this.state.articles.slice(1,9).map((element)=>
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
