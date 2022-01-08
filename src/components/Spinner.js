import React, { Component } from 'react'
import loading from '../loading.gif'

export class Spinner extends Component {
    render() {
        return (
            <div className='text-center m-5'>
                <img src={loading} alt='Loading' />
            </div>
        )
    }
}

export default Spinner
