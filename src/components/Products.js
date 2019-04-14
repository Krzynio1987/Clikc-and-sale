import React from 'react';
import { link } from 'fs';
import { Button } from 'react-bootstrap';

export default class Products extends React.Component {
    resetForm = (e) => {
        e.preventDefault();
        document.getElementById("productForm").reset();
    }
    render() {
        return (<div>
            <form id="productForm">
                <ul>
                    {this.props.products.products.map((product, i) => {
                        return (
                            <li
                                className="product"
                                key={product.key}>
                                {product.name}
                                <input
                                    className="product-input"
                                    placeholder="ilość phc"
                                    name={product.key}
                                    onChange={this.props.handleOnChange} />
                            </li>

                        )
                    })}
                    <button className="hvr-sweep-to-right button-add" onClick={this.props.handleProductButton}>Dodaj</button>
                    <button className="hvr-sweep-to-right button-clear" onClick={this.resetForm}>Clear</button>

                </ul>
            </form>

        </div>)

    }
}