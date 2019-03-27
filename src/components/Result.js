import React from 'react';


export default class Result extends React.Component {
    render() {
        return (
            <div className="result">Twój aktualny wynik: Obrot:{this.props.totalReceipts} Transakcje:{this.props.totalTransaction} Volumen: {this.props.totalVolume}</div>
        )
    }

}