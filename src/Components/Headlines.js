import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewsItems from './NewsItems';
import TopNews from './TopNews';
import '../App.css';

export default class Headlines extends Component {
    static defaultProps={
        country:'gb'
    }
    articles=[]
    constructor()
    {
        super();
        this.state={
            articles:[]
        }
    }
    async componentDidMount()
    {
        const url="https://newsapi.org/v2/top-headlines?country=gb&apiKey=a70c1839ba1c41c5b29461feee78b4af"
        let data=await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData);
        this.setState({articles:parsedData.articles})
    }

    render(props) {
        return <div>
            
            <div style={{borderBottom:'solid',borderWidth:'1px',borderColor:'grey',marginBottom:'10px'}} className="container">
                <h1 id="line"><span>Top Headlines</span></h1>
                    <div className="row"> {this.state.articles.slice(0,1).map((element)=>
                          {
                            return <div className="col"  key={element.title} >
                            <TopNews title={element.title} description={element.description} 
                            imageURL={element.urlToImage?element.urlToImage:"https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"} 
                            author={element.author?element.author:"BBC News "} date={element.publishedAt} newsURL={element.url}/>
                        </div>
                          })}  </div>
                    <div className="row row-cols-4">
                        
                         {this.state.articles.slice(1,9).map((element)=>
                         {
                             return <div className="col"  key={element.title}>
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
