import React from 'react'
import loading from '../loading.gif'

const Spinner = () => {
    
        return (
            <div className='text-center m-5'>
                <img src={loading} alt='Loading' />
            </div>
        )
    
}

export default Spinner
