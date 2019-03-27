import React, { Component } from 'react';
import './App.css';
import logo from './img/logoCocaCola.jpg';
import MonthTarget from './components/MonthTarget'
import Products from './components/Products'
import Result from './components/Result'
import products from './products.json'


class App extends Component {
  state = {
    totalVolume: 0,
    totalTransaction: 0,
    totalReceipts: 0,
    inputs: {}
  };

  handleOnChange = (event) => {
    this.setState({ inputs: { [event.target.name]: event.target.value } })
  }

  handleProductButton = () => {
    Object.keys(this.state.inputs).map((current) => {
      const [product] = products.products.filter((product) => product.key === current)



      this.setState({
        totalVolume: this.state.totalVolume + (
          this.state.inputs[current] * product.volumen),
        // ), nie działa poprawnie ten kod ponizej źle sumują się produkty
        totalTransaction: this.state.totalTransaction + (
          this.state.inputs[current] * product.transaction),
        totalReceipts: this.state.totalReceipts + (
          this.state.inputs[current] * product.receipts
        )
      })
    })
  };

  render() {
    return (
      <div className="App">
        <img src={logo} alt="logo Coca Cola"></img>
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
