import React from 'react';


class Card extends React.Component {
    render() {
        const ms = this.props.day.dt * 1000;

        const weekdayName = new Date(ms).toLocaleString('us',{weekday:'long'})

        return(
            <div className='card_div'>
                <div className='card'>
                    <h3>{ weekdayName}</h3>
                    <h2>{Math.round(this.props.day.main.temp)} °C</h2>
                    <p>{this.props.day.weather[0].description}</p>
                </div>
            </div>
        )
    }
}

export default Card