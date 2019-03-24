import React from 'react';


export default class Result extends React.Component {
    render() {
        return (
            <div className="result">Twój aktualny wynik .... obrotu ....transakcji .... volumen: {this.props.totalVolume}</div>
        )
    }

}