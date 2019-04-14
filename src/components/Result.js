import React from 'react';


export default class Result extends React.Component {
    render() {
        return (
            <div>

                <div className="result">Twój aktualny wynik: Obrot {this.props.totalReceipts.toFixed(2)} Transakcje: {this.props.totalTransaction} Volumen: {this.props.totalVolume.toFixed(2)}</div>
            </div>
        )
    }

}