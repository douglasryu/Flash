import React, {Component} from 'react'


class ProductPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productID: 1
            //ProductId will = this.props.match.params.productID
        }


        //TODO: Get info from backend, setState for description, price, name


        return(
            <main>
                <div>Name</div>
                <div>Image</div>
                <div>Price</div>
                <div>description</div>
            </main>
        )

    }

    
}

export default ProductPage;