import React, { Component,useState,useEffect } from 'react';
import TopNews from './TopNews';
import PropTypes from 'prop-types'
import NewsItems from './NewsItems';
import '../App.css';
export const Sport=()=> {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const [articles, setArticles] = useState([]);
    //   let  componentDidMount=async()= 
    useEffect(async() => {
        const url = `https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=${API_KEY}`
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles)
    },[]);
    return  <div style={{borderBottom:'solid',borderWidth:'1px',borderColor:'grey',marginBottom:'10px'}}className="container">
                <h1 id="line"><span>Sports</span></h1>
                    <div className="row"> {articles.slice(0,1).map((element)=>
                          {
                            return <div key={element} className="col">
                            <TopNews title={element.title} description={element.description} 
                            imageURL={element.urlToImage?element.urlToImage:"https://ichef.bbci.co.uk/images/ic/896x504/p07jbsw9.jpg"} 
                            author={element.author?element.author:"BBC News "} date={element.publishedAt} newsURL={element.url}/>
                        </div>
                          })}  </div>
                    <div className="row">  
                         {articles.slice(1,9).map((element)=>
                         {
                             return <div className="col-md-3" >
                                 <NewsItems title={element.title} description={element.description} 
                                 imageURL={element.urlToImage?element.urlToImage:"https://ichef.bbci.co.uk/images/ic/896x504/p07jbsw9.jpg"} 
                                 author={element.author?element.author:"BBC News "} date={element.publishedAt} newsURL={element.url}/>
                             </div>
                         })
                        }
                   </div>
            
    </div>;
}
