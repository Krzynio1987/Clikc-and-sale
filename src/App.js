import React, { Component } from 'react';

import MonthTarget from './components/MonthTarget';
import Products from './components/Products';
import Result from './components/Result';

import products from './products.json';
import background from './tlo.jpg';
import './App.css';

class App extends Component {
  state = {
    totalVolume: 0,
    totalTransaction: 0,
    totalReceipts: 0,
    inputs: {}
  };

  handleOnChange = (event) => {
    this.setState({
      inputs: {
        ...this.state.inputs,
        [event.target.name]: event.target.value }
    });
  }

  addProducts = e => {
    e.preventDefault();

    Object.keys(this.state.inputs).map(current => {
      const [product] = products.products.filter((product) => product.key === current);

      this.setState((state, props) => {
        return {
          totalVolume: state.totalVolume + (
            state.inputs[current] * product.volumen),
          totalTransaction: state.totalTransaction + (
            state.inputs[current] * product.transaction),
          totalReceipts: state.totalReceipts + (
            state.inputs[current] * product.receipts
          )
        }
      })
    })
  };

  clearInputs() {
    this.setState({ inputs: {} });
  }

  render() {
    return (
      <div className="App" background-image={background}>
        <MonthTarget />

        <Products
            onClear={() => this.clearInputs()}
            products={products}
            handleOnChange={event => this.handleOnChange(event)}
            addProducts={this.addProducts}
        />

        <Result
            productsState={this.state}
            products={products.products}
            handleOnChange={event => this.handleOnChange(event)}
            totalVolume={this.state.totalVolume}
            totalTransaction={this.state.totalTransaction}
            totalReceipts={this.state.totalReceipts}
        />
      </div>
    );
  }
}

export default App;
