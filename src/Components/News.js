import React, { Component } from 'react';
import PropTypes from 'prop-types'
import NewsItems from './NewsItems';
import InfiniteScroll from 'react-infinite-scroll-component';
export default class extends Component {
    articles = []
    static defaultProps={
        country:'gb',
        pageSize:8
    }
    static propTypes = {
        pageSize: PropTypes.number,
        country:PropTypes.string,
        category: PropTypes.string
    }
    constructor(props) {
        super(props)
        this.props.setProgress(10);
        this.state = {
            articles: [],
            page:1,
            totalResults:0,
            apiKey: 'a70c1839ba1c41c5b29461feee78b4af'
        }
           this.props.setProgress(100);
    }
    async componentDidMount() {
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=gb&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        this.props.setProgress(30);
        console.log(data);
        let parsedData = await data.json();
        console.log(parsedData);
        this.props.setProgress(50);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults
        })
        this.props.setProgress(100);
    }
    fetchMoreData=async()=>

    {
         
        this.setState({page:this.state.page+1})
         let url = `https://newsapi.org/v2/top-headlines?country=gb&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
          this.props.setProgress(30);
        console.log(data);
        let parsedData = await data.json();
        console.log(parsedData);
          this.props.setProgress(50);
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults
        })
          this.props.setProgress(100);
    }

    render() {

        return <div className="container">
           <InfiniteScroll
           dataLength={this.state.articles.length}
           next={this.fetchMoreData}
           hasMore={this.state.articles.length!==this.state.totalResults}
           />
            <div className="row row-cols-5">
                {this.state.articles.map((element) => {
                    return <div className="col" key={element.title}>
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
