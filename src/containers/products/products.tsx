import * as React from 'react';
import * as classes from './products.scss';
import { NavLink } from 'react-router-dom';
import { history } from 'src/store/store';
import Axios from 'axios';
import Product from 'src/containers/products/product/product';

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
                {/* <div className="d-flex justify-content-between align-items-center">
                    <div className={classes.header}>Products page</div>
                    <NavLink className={classes.link} to="/addproduct">Add Product</NavLink>
                </div>
                <form action="/files" method="POST" encType="multipart/form-data">
                    <input type="file" name="file" id="file" />
                    <input type="submit" value="Submit" />
                </form> */}
                <div className="row no-gutters">
                    <div className="col-8">
                        <div className="d-flex flex-wrap">
                            {this.state.products.map((x: any, i) => {
                                return (
                                    <Product product={x} onClick={() => this.openProductView(x._id)} key={x._id} />
                                )
                            }
                            )}
                        </div>
                    </div>
                    <div className="col-4">
                        this is for add
                    </div>
                </div>
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