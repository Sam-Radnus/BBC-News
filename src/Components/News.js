import React, { Component } from 'react';
import PropTypes from 'prop-types'
import NewsItems from './NewsItems';
export default class extends Component {
    articles = []

    static propTypes = {
        pageSize: this.pageSize,
        category: this.category
    }
    constructor() {
        super()
        this.state = {
            articles: [],
            apiKey: 'a70c1839ba1c41c5b29461feee78b4af'
        }
    }
    async componentDidMount() {
        const url = `https://newsapi.org/v2/top-headlines?country=gb&category=${this.props.category}&apiKey=a70c1839ba1c41c5b29461feee78b4af`;
        let data = await fetch(url);
        console.log(data);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({
            articles: parseData.articles,
            totalResults: parseData.totalResults
        })
    }
    render() {

        return <div className="container">
            <div className="row row-cols-5">
                {this.state.articles.map((element) => {
                    return <div className="col" key={element.url}>
                        <h1>{element.category}</h1>
                         <NewsItems title={element.title} description={element.description} 
                                 imageURL={element.urlToImage?element.urlToImage:"https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"} 
                                 author={element.author?element.author:"BBC News "} date={element.publishedAt} newsURL={element.url}/> 
                    </div>
                })}
            </div>
        </div>;
    }
}
