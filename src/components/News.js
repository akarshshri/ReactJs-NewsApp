import React, {useState, useEffect } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=> {

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const [articles, setarticles] = useState([])
    const [loading, setloading] = useState(true)
    const [page, setpage] = useState(1)
    const [pageSize, setpageSize] = useState(18)
    const [btnStatus, setbtnStatus] = useState(false)
    const [totalResults, settotalResults] = useState(0)
    const [initLoading, setInitLoading] = useState(true)
    

        //console.log(totalResults);
        document.title = capitalizeFirstLetter(props.cat) + ' - News App';
    

    /*     async updateNews(){
            let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.cat}&apiKey=e50eef0d172c4470bed2a3e70d2475ad&pageSize=${props.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            setarticles(parsedData.articles)
            settotalResults(parsedData.totalResults)
            setloading(false)
            //console.log(parsedData);
        } */

        useEffect(async () => {
            //effect
            let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.cat}&apiKey=e50eef0d172c4470bed2a3e70d2475ad&page=${page}&pageSize=${props.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            setarticles(parsedData.articles)
            settotalResults(parsedData.totalResults)
            setloading(false)
            setInitLoading(false)
            console.log(parsedData);
            
        }, [])

    

    // const handleNextClick = async () => {

    //     //console.log(props.pageSize)
    //     if (Math.floor(totalResults / props.pageSize) >= page) {
    //         setloading(true)
    //         let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.cat}&apiKey=e50eef0d172c4470bed2a3e70d2475ad&page=${page + 1}&pageSize=${props.pageSize}`;
    //         let data = await fetch(url);
    //         let parsedData = await data.json();
    //         //console.log(parsedData);
    //         setarticles(parsedData.articles)
    //         setpage(page + 1)
    //         setloading(false)
    //         console.log(parsedData);
    //         console.log('page Next ' + page)
    //         //console.log('If working');
    //     }


    //     if (Math.floor(totalResults / props.pageSize) < page) {

    //     }
    // }

    // const handlePrevClick = async () => {
    //     setloading(true)
    //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.cat}&apiKey=e50eef0d172c4470bed2a3e70d2475ad&page=${page - 1}&pageSize=${props.pageSize}`;
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     //console.log(parsedData);
    //     setarticles(parsedData.articles)
    //     setpage(page - 1)
    //     setloading(false)
    //     console.log('page Prev ' + page)

    // }

    const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.cat}&apiKey=e50eef0d172c4470bed2a3e70d2475ad&page=${page + 1}&pageSize=${props.pageSize}`;
        setpage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json();
        setarticles(articles.concat(parsedData.articles))
        settotalResults(parsedData.totalResults)
        setloading(false)
        console.log(parsedData);
        //console.log('Loop 1 completed: Page Number  ' + page)

    };

        return (
            <>

                <div className="container pt-4">
                    <h2 className='text-center'>Daily Highlighted News - {capitalizeFirstLetter(props.cat)}</h2>
                    {loading && <Spinner />}
                    <InfiniteScroll
                        dataLength={articles.length}
                        next={fetchMoreData}
                        hasMore={articles.length !== totalResults}
                        loader={<Spinner />}>
                        <div className="container">
                            <div className="row pt-3 d-flex justify-content-center">
                                {!loading && articles.map((element) => {
                                    return <div key={element.url} className="col-md-6 col-lg-4 ">
                                        <Newsitem source={element.source.name} author={element.author} artDate={element.publishedAt} imgUrl={element.urlToImage} newsUrl={element.url} title={element.title} imgDesc={element.description} content={element.content} />
                                    </div>
                                })}
            

                            </div  >
                        </div>
                    </InfiniteScroll>
                    {/* <div className="d-flex justify-content-between pb-3 mt-3">
                            <button type="button" className="btn btn-success" disabled={page <= 1} onClick={handlePrevClick}> &larr; Previous</button>
                            <button type="button" className="btn btn-success" disabled={Math.floor(totalResults / props.pageSize) < page} onClick={handleNextClick}>Next &rarr;</button>
                        </div> */}  

                </div>

            </>
        )
    
}

export default News
