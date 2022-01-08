import React from 'react'

const Newsitem = (props)=> {



        let { title, imgDesc, imgUrl, newsUrl, content, author, artDate, source } = props;
        if (imgDesc === null && content != null) {
            // imgDesc = content.slice(0,130) + '...';
        } else if (imgDesc != null && imgDesc.length >= 170) {
            // imgDesc = imgDesc.slice(0,190) + '...';
        }


        title = title.split(" - ").slice(0, -1)

        return (
            <>

                <div className={`card m-auto mt-3 bg-${props.mode === 'light' ? 'light' : 'dark'} text-${props.mode === 'light' ? 'dark' : 'light'}`} style={{ height: '32rem' }} >
                    <img src={imgUrl != null ? imgUrl : 'https://newsinterpretation.com/wp-content/uploads/2020/03/news33.jpg'} className="card-img-top" alt="N/A" style={{ height: '12rem' }} />
                        <div style={{display:'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
                        <span className=" badge rounded-pill bg-danger">
                            {source}
                        </span>
                        </div>
                    <div className="card-body d-flex flex-column overflow-auto" style={{ margin: '0.5em 0.5em', padding: '0px' }}>
                        <h5 className="card-title">{title}</h5>
                        <div className="">
                            <p className="card-text" style={{ marginBottom: '0px' }}>{imgDesc}</p>
                        </div>
                        <div className='align-self-bottom align-items-bottom' style={{ position: 'relative' }}>
                            <p className="text-muted " style={{ posotion: 'absolute', marginBottom: '0px', bottom: '0', left: '0' }}>By {author ? author : 'Unknown'} on {new Date(artDate).toLocaleString(undefined, { timeZone: 'Asia/Kolkata' }) + ' IST'}</p>
                        </div>
                        <div className='mt-auto align-self-center align-items-center' style={{ paddingTop: '0.5em' }}>
                            <a href={newsUrl} target="_blank" className=" btn btn-primary align-self-center" rel="noopener noreferrer">Read More</a>
                        </div>
                    </div>
                </div>

            </>
        )
    
}

export default Newsitem
