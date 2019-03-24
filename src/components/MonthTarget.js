import React from 'react';
import { Button } from 'react-bootstrap';

export default class MonthTarget extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputDays: 0,
            daysOfSale: 0,
            inputReceipts: 0,
            monthReceipts: 0,
            inputTransactions: 0,
            monthTransactions: 0,
            inputVolumen: 0,
            monthVolumen: 0,
            average: 0,
            average2: 0,
            average3: 0,
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onFirstButtonClick = () => {
        this.setState({ daysOfSale: this.state.inputDays })
    }
    onSecondButtonClick = () => {
        this.setState({ monthReceipts: this.state.inputReceipts })
        this.setState({ monthTransactions: this.state.inputTransactions })
        this.setState({ monthVolumen: this.state.inputVolumen })
        this.setState({ average: this.state.inputReceipts / this.state.inputDays })
        this.setState({ average2: this.state.inputTransactions / this.state.inputDays })
        this.setState({ average3: this.state.inputVolumen / this.state.inputDays })
    }

    render() {
        return (<div>
            <input placeholder="Dni sprzedaży" name="inputDays" onChange={this.handleChange} />
            <Button variant="outline-warning" onClick={this.onFirstButtonClick}>Dodaj</Button>
            <input placeholder="Target obrót" name="inputReceipts" onChange={this.handleChange} />
            <input placeholder="Target transakcje" name="inputTransactions" onChange={this.handleChange} />
            <input placeholder="Target volumen" name="inputVolumen" onChange={this.handleChange} />
            <Button variant="outline-warning" onClick={this.onSecondButtonClick}>Dodaj</Button>
            <div>Dni sprzedaży: {this.state.daysOfSale} </div>
            <div>Twój cel miesięczny: {this.state.monthReceipts} obrotu {this.state.monthTransactions} transakcji {this.state.monthVolumen} Volumenu</div>
            <div>Średnia na dzień: {this.state.average} obrotu {this.state.average2} transakcji {this.state.average3} volumenu  </div>

        </div>)
    }
}
/* <Button variant="success">Success</Button> */
