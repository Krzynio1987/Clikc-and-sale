import React from 'react';
import { link } from 'fs';
import { Button } from 'react-bootstrap';

export default class Products extends React.Component {
    render() {
        console.log(this.props.products)
        return (<div>
            <ul>
                {this.props.products.products.map((product, i) => {
                    return (
                        <li key={product.key}>
                            {product.name}
                            <input
                                placeholder="ilość phc"
                                name={product.key}
                                onChange={this.props.handleOnChange} />
                        </li>
                    )
                })}
                <Button variant="outline-warning" onClick={this.props.handleProductButton}>Dodaj</Button>
            </ul>

        </div>)

    }

}