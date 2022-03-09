import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import  NewsItems  from './NewsItems';
import InfiniteScroll from 'react-infinite-scroll-component';
import '../App.css';

export default function News(props)  {
  const [isMobile,setMobile]=useState(window.innerWidth<765);
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(2);
  const [totalResults, setTotalResults] = useState(0);
  
  let i=1;
  //   let  componentDidMount=async()=>
  const API_KEY = process.env.REACT_APP_API_KEY;
  useEffect(async () => {
    props.setProgress(10);

  
    const url = `https://newsapi.org/v2/top-headlines?country=gb&category=${props.category}&apiKey=${API_KEY}&page=1&pageSize=${props.pageSize}`;
    props.setProgress(30);
    let data = await fetch(url);
  
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    props.setProgress(100);
    
  }, []);
  useEffect(async()=>{
    window.addEventListener("resize",()=>{
      const ismobile=window.innerWidth<765;
      if(isMobile !== ismobile)
      {
        setMobile(ismobile);
      }
    },false);
  },[isMobile]);
  const fetchMoreData = async () => {
    
    setPage( page => page+1)
   
    let url = `https://newsapi.org/v2/top-headlines?country=gb&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    props.setProgress(30);

    let parsedData = await data.json();
    props.setProgress(50);

    setArticles(articles.concat(parsedData.articles))
    props.setProgress(100);
  }
  return <div className="container">
    <InfiniteScroll
      dataLength={articles.length}
      next={fetchMoreData}
      hasMore={articles.length !== totalResults}
    />
    <div className={`${isMobile?"":"row row-cols-4"}`}>
      {articles.map((element) => {
        return <div className="col" key={element.title}>
          <h1>{element.category}</h1>
          <NewsItems title={element.title} description={element.description}
            imageURL={element.urlToImage ? element.urlToImage : "https://ichef.bbci.co.uk/images/ic/896x504/p07jbsw9.jpg"}
            author={element.author ? element.author : "BBC News "} date={element.publishedAt} newsURL={element.url} />
        </div>
      })}
    </div>
  </div>;
}
