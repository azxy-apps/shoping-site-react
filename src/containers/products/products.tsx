import * as React from 'react';
import * as classes from './products.scss';
import { NavLink } from 'react-router-dom';
import { history } from 'src/store/store';
import Axios from 'axios';

class Products extends React.Component<any, any>{
    public constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    public componentDidMount() {
        this.getProductDetails();
    }

    public render() {
        return (
            <>
                <div className="d-flex justify-content-between align-items-center">
                    <div className={classes.header}>Products page</div>
                    <NavLink className={classes.link} to="/addproduct">Add Product</NavLink>
                </div>
                {this.state.products.map((x: any, i) => {
                    return (
                        <div onClick={() => this.openProductView(x._id)} className={classes.box} key={x._id}>
                            name: <span className={classes.link}>{x.name}</span></div>
                    )
                }
                )}
            </>
        )
    }

    private openProductView = (id) => {
        history.push('product/' + id);
    }

    private getProductDetails = async () => {
        const response = await Axios.get('/products');;
        if (response.data && response.data.isSuccessful) {
            this.setState({ products: response.data.result });
        }
    };
}

export default Products;