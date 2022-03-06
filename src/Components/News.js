import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { NewsItems } from './NewsItems';
import InfiniteScroll from 'react-infinite-scroll-component';
import '../App.css';

export const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  let i=1;
  //   let  componentDidMount=async()=>
  useEffect(async () => {
    props.setProgress(10);
    // const url = "https://newsapi.org/v2/top-headlines?country=gb&apiKey=a70c1839ba1c41c5b29461feee78b4af"
    //  const url="https://newsapi.org/v2/everything?q=olympics&sortBy=relevancy&apiKey=a70c1839ba1c41c5b29461feee78b4af"
    const url = `https://newsapi.org/v2/top-headlines?country=gb&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
    props.setProgress(30);
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    props.setProgress(100);
  }, []);
  
  const fetchMoreData = async () => {
    
    setPage( page => page+1)
    console.log(page);
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
    <div className="row row-cols-5">
      {articles.map((element) => {
        return <div className="col" key={element.title}>
          <h1>{element.category}</h1>
          <NewsItems title={element.title} description={element.description}
            imageURL={element.urlToImage ? element.urlToImage : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"}
            author={element.author ? element.author : "BBC News "} date={element.publishedAt} newsURL={element.url} />
        </div>
      })}
    </div>
  </div>;
}
