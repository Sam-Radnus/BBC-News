import React, { Component,useState, useEffect  } from 'react';
import Read from './Read';
import '../App.css';
export const MostRead = () => {

   let i = 0;
   const API_KEY = process.env.REACT_APP_API_KEY;
   
    const [articles, setArticles] = useState([]);
    //   let  componentDidMount=async()=>
    useEffect(async() => {
       
        const url=`https://newsapi.org/v2/everything?q=apple&from=2022-02-13&to=2022-02-13&sortBy=relevancy&apiKey=${API_KEY}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(parsedData.articles)
    },[]);
    return <div>
        <div style={{ borderBottom: 'solid', borderWidth: '1px', borderColor: 'grey', marginBottom: '10px' }} className="container">
            <h1 id="line"><span>Most Read</span></h1>
            <div class="row row-cols-2">
                {articles.map((element, index) => {
                    return <div key={element.title} className="col">
                        <Read index={index} title={element.title} newsURL={element.url} />
                    </div>
                })}
            </div>
        </div>
    </div>;

}
