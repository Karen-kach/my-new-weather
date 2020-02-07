import React from 'react';
import Card from '../card/Card';
import './Weather.css';




const weatherURL="https://api.openweathermap.org/data/2.5/forecast?q=Yerevan&lang=us&units=metric&APPID=a9a3a62789de80865407c0452e9d1c27"

class Weather extends React.Component {
     state = {
         days:[]
     }
     componentDidMount = () => {
         fetch(weatherURL)
         .then(resp => resp.json())
         .then(data => {
             const dailyData = data.list.filter(reading => reading.dt_txt.includes('12:00:00'))
             this.setState({
                days:dailyData
             })
             
         })
     }
     formatCards = () => {
        return this.state.days.map((day, index) => < Card day={day} key={index} />)
    }
    
   
    render() {
      return(
        <div className='weather'>
            <div className='header'>
                <h1>Forecast 5 Day</h1>
            </div>
            <div className='weekday'>
                { this.formatCards()}
            </div>
        </div>
        )
    }    
}


export default Weather