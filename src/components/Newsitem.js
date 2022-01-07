import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let {title,imgDesc, imgUrl, newsUrl, content} = this.props;
        if (imgDesc === null && content!= null){
            imgDesc = content.slice(0,130) + '...';
        }else if(imgDesc != null && imgDesc.length >= 170){
            imgDesc = imgDesc.slice(0,190) + '...';
        }
        return (
            <>
                
                    <div className="card m-auto mt-3 " style={{ width: "18rem" }}>
                        <img src={imgUrl} className="card-img-top" alt="N/A" style={{height: '12rem'}} />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{imgDesc}</p>
                            <a href={newsUrl} target="_blank" className="btn btn-primary" rel="noopener noreferrer">Read More</a>
                        </div>
                    </div>
                
            </>
        )
    }
}

export default Newsitem
