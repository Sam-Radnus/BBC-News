import React, { Component,useState, useEffect  } from 'react';
import PropTypes from 'prop-types';
import NewsItems from './NewsItems';
import TopNews from './TopNews';
import '../App.css';

export const Headlines =(props)=> {
   
    const [articles, setArticles] = useState([]);

    const API_KEY = process.env.REACT_APP_API_KEY;
    useEffect(async()=>{
    
        const url=`https://newsapi.org/v2/top-headlines?country=gb&apiKey=${API_KEY}`;
        let data=await fetch(url);
        let parsedData=await data.json();
        setArticles(parsedData.articles);
    },[]); 
        return <div style={{borderBottom:'solid',borderWidth:'1px',borderColor:'grey',marginBottom:'10px'}}className="container">
                <h1 id="line my-2"><span>Top Headlines</span></h1>
                    <div className="row"> {articles.slice(0,1).map((element)=>
                          {
                            return <div className="col"  key={element.title} >
                            <TopNews title={element.title} description={element.description} 
                            imageURL={element.urlToImage?element.urlToImage:"https://ichef.bbci.co.uk/images/ic/896x504/p07jbsw9.jpg"} 
                            author={element.author?element.author:"BBC News "} date={element.publishedAt} newsURL={element.url}/>
                        </div>
                          })}  </div>
                    <div className="row" >
                        
                         {articles.slice(1,9).map((element)=>
                         {
                             return <div className="col-sm-3"  key={element.title}>
                                 <NewsItems title={element.title} description={element.description} 
                                 imageURL={element.urlToImage?element.urlToImage:"https://ichef.bbci.co.uk/images/ic/896x504/p07jbsw9.jpg"} 
                                 author={element.author?element.author:"BBC News "} date={element.publishedAt} newsURL={element.url}/>
                             </div>
                         })
                        }
                   </div>
        </div>;
}
