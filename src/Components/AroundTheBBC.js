import React, { Component,useState,useEffect } from 'react';
import TopNews from './TopNews';
import {NewsItems} from './NewsItems';
import '../App.css';
export const  AroundTheBBC =()=> {
    const [articles, setArticles] = useState([]);
    const API_KEY = '2902e07919cb4e268ec388cc3f930a7e';
    //   let  componentDidMount=async()=> 
    useEffect(async() => {
    
        console.log(API_KEY);
        const url=`https://newsapi.org/v2/top-headlines?sources=bbc-news&sortBy=popularity&apiKey=${API_KEY}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles)
    },[]);

    return <div>
     <div style={{borderBottom:'solid',borderWidth:'1px',borderColor:'grey',marginBottom:'10px'}}className="container">
        <h1 id="line"><span>Around the BBC</span></h1>
                    <div className="row"> {articles.slice(0,1).map((element)=>
                          {
                            return <div className="col" key={element.title}>
                            <TopNews title={element.title} description={element.description} 
                            imageURL={element.urlToImage?element.urlToImage:"https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"} 
                            author={element.author?element.author:"BBC News "} date={element.publishedAt} newsURL={element.url}/>
                        </div>
                          })}  </div>
                    <div className="row row-cols-4">
                        
                         {articles.slice(1,5).map((element)=>
                         {
                             return <div  key={element.title} className="col">
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
