import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        let {title,imgDesc, imgUrl, newsUrl} = this.props;
        
        return (
            <>
                
                    <div className="card m-auto mt-1" style={{ width: "18rem" }}>
                        <img src={imgUrl} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{imgDesc}</p>
                            <a href={newsUrl} target="_blank" className="btn btn-primary" rel="noopener noreferrer">Go to News</a>
                        </div>
                    </div>
                
            </>
        )
    }
}

export default Newsitem
