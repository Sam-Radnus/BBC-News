import React, { Component, useState, useEffect } from 'react';
import TopNews from './TopNews';
import NewsItems from './NewsItems';
import '../App.css';
export const MustSee = () => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const [articles, setArticles] = useState([]);
   
    useEffect(async() => {
       
        const url=`https://newsapi.org/v2/everything?q=ukraine&sortBy=relevancy&apiKey=${API_KEY}`
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles)
    },[]);
    return <div>

        <div style={{ borderBottom: 'solid', borderWidth: '1px', borderColor: 'grey', marginBottom: '10px' }} className="container">
            <h1 id="line"><span>Must See</span></h1>
            <div className="row"> {articles.slice(0, 1).map((element) => {
                return <div className="col" key={element.title}>
                    <TopNews title={element.title} description={element.description}
                        imageURL={element.urlToImage ? element.urlToImage : "https://ichef.bbci.co.uk/images/ic/896x504/p07jbsw9.jpg"}
                        author={element.author ? element.author : "BBC News "} date={element.publishedAt} newsURL={element.url} />
                </div>
            })}  </div>
            <div className="row ">
    
                {articles.slice(1, 5).map((element) => {
                    return <div className="col-md-3" key={element.title} >
                        <NewsItems title={element.title} description={element.description}
                            imageURL={element.urlToImage ? element.urlToImage : "https://ichef.bbci.co.uk/images/ic/896x504/p07jbsw9.jpg"}
                            author={element.author ? element.author : "BBC News "} date={element.publishedAt} newsURL={element.url} />
                    </div>
                })
                }
            </div>
        </div>
    </div>;
}
