import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'

export class News extends Component {

    capitalizeFirstLetter =  (string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            pageSize: 18,
            btnStatus: false

        }
        //console.log(this.state.totalResults);
        document.title = this.capitalizeFirstLetter(this.props.cat) + ' - News App';
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.cat}&apiKey=abbe5fb95fe34a0295cdf996b870e615&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
        console.log(parsedData);
    }


    handleNextClick = async () => {

        //console.log(this.props.pageSize)
        if (Math.floor(this.state.totalResults / this.props.pageSize) >= this.state.page) {

            this.setState({ loading: true })
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.cat}&apiKey=abbe5fb95fe34a0295cdf996b870e615&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            //console.log(parsedData);
            this.setState({ articles: parsedData.articles })

            this.setState({
                page: this.state.page + 1,
                loading: false
            }
            )

            console.log('page Next ' + this.state.page)
            //console.log('If working');
        }


        if (Math.floor(this.state.totalResults / this.props.pageSize) < this.state.page) {

        }
    }

    handlePrevClick = async () => {
        this.setState({ loading: true })
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.cat}&apiKey=abbe5fb95fe34a0295cdf996b870e615&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        //console.log(parsedData);
        this.setState({ articles: parsedData.articles })

        this.setState({
            page: this.state.page - 1,
            loading: false
        })
        console.log('page Prev ' + this.state.page)
    }

    render() {
        return (
            <div>

                <div>
                    <div className="container pt-4">
                        <h2 className='text-center'>Daily Highlighted News - {this.capitalizeFirstLetter(this.props.cat)}</h2>
                        {this.state.loading && <Spinner />}
                        <div className="row pt-3 d-flex justify-content-center">
                            {!this.state.loading && this.state.articles.map((element) => {
                                return <div key={element.url} className="col-md-6 col-lg-4 ">
                                    <Newsitem author = {element.author} artDate={element.publishedAt} imgUrl={element.urlToImage} newsUrl={element.url} title={element.title } imgDesc={element.description} content={element.content} />
                                </div>
                            })}


                        </div>
                        <div className="d-flex justify-content-between pb-3 mt-3">
                            <button type="button" className="btn btn-success" disabled={this.state.page <= 1} onClick={this.handlePrevClick}> &larr; Previous</button>
                            <button type="button" className="btn btn-success" disabled={Math.floor(this.state.totalResults / this.props.pageSize) < this.state.page} onClick={this.handleNextClick}>Next &rarr;</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default News
