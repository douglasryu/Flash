import React, {Component} from 'react'
import ReviewDiv from './ReviewDiv'


const ProductPage = (props) => {
        return(
            <main>
                <div className=''>Name</div>
                <div>Image</div>
                <div>Price</div>
                <div>description</div>

                <ReviewDiv productID={1} />
            </main>
        )

    }
    


export default ProductPage;