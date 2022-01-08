import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let {title,imgDesc, imgUrl, newsUrl, content, author, artDate} = this.props;
        if (imgDesc === null && content!= null){
           // imgDesc = content.slice(0,130) + '...';
        }else if(imgDesc != null && imgDesc.length >= 170){
           // imgDesc = imgDesc.slice(0,190) + '...';
        }
        return (
            <>
                
                    <div className="card m-auto mt-3 overflow-auto" style={{height: '32rem'}} >
                        <img src={imgUrl != null? imgUrl:'https://newsinterpretation.com/wp-content/uploads/2020/03/news33.jpg'} className="card-img-top" alt="N/A" style={{height: '12rem'}} />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">{title}</h5>
                            <div className="">
                                <p className="card-text ">{imgDesc}</p>
                                <p className="text-muted">By {author?author:'Unknown'} on {new Date(artDate).toLocaleString(undefined, {timeZone: 'Asia/Kolkata'}) + ' IST'}</p>
                            </div>
                            <a href={newsUrl} target="_blank" className="btn btn-primary relative mt-auto" style={{margin: '0.1rem 2rem'}} rel="noopener noreferrer">Read More</a>
                        </div>
                    </div>
                
            </>
        )
    }
}

export default Newsitem
