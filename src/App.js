import React, { Component } from 'react';
import './App.css';
import logo from './img/logoCocaCola.jpg';
import MonthTarget from './components/MonthTarget';
import Products from './components/Products';
import Result from './components/Result';
import products from './products.json';
import background from './tlo.jpg';


class App extends Component {
  state = {
    totalVolume: 0,
    totalTransaction: 0,
    totalReceipts: 0,
    inputs: {}
  };

  handleOnChange = (event) => {
    const newInputs = { ...this.state.inputs, [event.target.name]: event.target.value }
    console.log(newInputs)
    this.setState({ inputs: newInputs })
  }

  handleProductButton = (e) => {
    e.preventDefault();
    Object.keys(this.state.inputs).map((current) => {
      const [product] = products.products.filter((product) => product.key === current)

      console.log(this.state.inputs[current])

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

  render() {
    return (
      <div className="App" background-image={background}>
        <MonthTarget />
        <Products products={products} handleOnChange={this.handleOnChange}
          handleProductButton={this.handleProductButton} />
        <Result
          productsState={this.state}
          products={products.products}
          handleOnChange={this.handleOnChange}
          totalVolume={this.state.totalVolume}
          totalTransaction={this.state.totalTransaction}
          totalReceipts={this.state.totalReceipts} />
      </div>
    );
  }
}

export default App;
