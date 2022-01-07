import React, { Component } from 'react'

export class Newsitem extends Component {
    render() {
        return (
            <div>
                <div className="container pt-4">
                <h2 className='text-center'>Daily Highlighted News</h2>
                    <div className="row pt-3">
                        <div className="col-md-4">
                            <div className="card" style={{width: "18rem"}}>
                                <img src="..." className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="/#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card" style={{width: "18rem"}}>
                                <img src="..." className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="/#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card" style={{width: "18rem"}}>
                                <img src="..." className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="/#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
