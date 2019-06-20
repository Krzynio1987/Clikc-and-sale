import React from 'react';

export default class Products extends React.Component {
    resetForm = event => {
        event.preventDefault();

        this.props.onClear();

        document.getElementById("productForm").reset();
    }

    render() {
        const {
            addProducts
        } = this.props;

        return (
            <div>
                <form id="productForm">
                <ul>
                    {this.props.products.products.map(product => {
                        return (
                            <li
                                className="product"
                                key={product.key}>
                                {product.name}

                                <input
                                    className="product-input"
                                    placeholder="ilość phc"
                                    name={product.key}
                                    onInput={event => this.props.handleOnChange(event)} />
                            </li>
                        )
                    })}
                    <button className="hvr-sweep-to-right button-add" onClick={addProducts}>Dodaj</button>
                    <button className="hvr-sweep-to-right button-clear" onClick={this.resetForm}>Clear</button>

                </ul>
            </form>
        </div>)
    }
}