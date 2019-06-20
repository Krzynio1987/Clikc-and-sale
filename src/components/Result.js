import React from 'react';

const FIXED_PRECISION = 2;

export default class Result extends React.Component {
    render() {
        const {
            totalVolume,
            totalReceipts,
            totalTransaction
        } = this.props;

        return (
            <div className="result">
                <p>Twój aktualny wynik: </p>
                <p>Obrot {totalReceipts.toFixed(FIXED_PRECISION)}</p>
                <p>Transakcje: {totalTransaction} </p>
                <p>Volumen: {totalVolume.toFixed(FIXED_PRECISION)}</p>
            </div>
        )
    }
}