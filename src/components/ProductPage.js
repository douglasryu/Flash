import React, {Component} from 'react'
import ReviewDiv from './ReviewDiv'


class ProductPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            productID: 1
            //ProductId will = this.props.match.params.productID
        }
    }


     //TODO: Get info from backend, setState for description, price, name



    render(){
        return(
            <main>
                <div className=''>Name</div>
                <div>Image</div>
                <div>Price</div>
                <div>description</div>

                <ReviewDiv productID={this.state.productID} />
            </main>
        )

    }
    
}

export default ProductPage;