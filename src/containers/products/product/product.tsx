import * as React from 'react';
import * as classes from './product.scss';

class Product extends React.Component<any, any>{

    constructor(props) {
        super(props);
    }

    public render() {
        return (
            <div className={"col-12 col-md-6 " + classes.productContainer}>
                <div className={classes.product}>
                    {this.props.product.name}
                </div>
            </div>
        )
    }
}

export default Product;