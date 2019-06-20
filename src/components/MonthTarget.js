import React from 'react';

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
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onFirstButtonClick = () => {
        this.setState({
            daysOfSale: this.state.inputDays
        })
    }

    onSecondButtonClick = () => {
        this.setState({ monthReceipts: this.state.inputReceipts })
        this.setState({ monthTransactions: this.state.inputTransactions })
        this.setState({ monthVolumen: this.state.inputVolumen })
        this.setState({ average: (this.state.inputReceipts / this.state.inputDays).toFixed(2) })
        this.setState({ average2: (this.state.inputTransactions / this.state.inputDays).toFixed(2) })
        this.setState({ average3: (this.state.inputVolumen / this.state.inputDays).toFixed(2) })
    }

    render() {
        return (<div>
            <input placeholder="Dni sprzedaży" name="inputDays" onChange={this.handleChange} />
            <button className='hvr-sweep-to-right' onClick={this.onFirstButtonClick}>Dodaj</button>
            <input placeholder="Target obrót" name="inputReceipts" onChange={this.handleChange} />
            <input placeholder="Target transakcje" name="inputTransactions" onChange={this.handleChange} />
            <input placeholder="Target volumen" name="inputVolumen" onChange={this.handleChange} />
            <button className='hvr-sweep-to-right' onClick={this.onSecondButtonClick}>Dodaj</button>
            <div className="sales-day">Dni sprzedaży: {this.state.daysOfSale} </div>
            <div className="month-target">Twój cel miesięczny: {this.state.monthReceipts} Obrotu {this.state.monthTransactions} Transakcji {this.state.monthVolumen} Volumenu</div>
            <div className="average-day">Średnia na dzień: {this.state.average} Obrotu {this.state.average2} Transakcji {this.state.average3} Volumenu  </div>

        </div>)
    }
}
/* <Button variant="success">Success</Button> */
