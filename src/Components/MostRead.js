import React, { Component,useState, useEffect  } from 'react';
import Read from './Read';
import '../App.css';
export const MostRead = () => {

   let i = 0;
    //let articles=[];
    const [articles, setArticles] = useState([]);
    //   let  componentDidMount=async()=>
    useEffect(async () => {
        //const url = "https://newsapi.org/v2/top-headlines?country=gb&apiKey=a70c1839ba1c41c5b29461feee78b4af"
        const url="https://newsapi.org/v2/everything?from=2022-02-11&to=2022-02-12&sortBy=popularity&apiKey=a70c1839ba1c41c5b29461feee78b4af";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        setArticles(parsedData.articles)
    });
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
