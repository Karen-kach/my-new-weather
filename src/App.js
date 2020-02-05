import React, { useState, useEffect } from 'react';


const weatherURL="https://api.openweathermap.org/data/2.5/forecast?q=Yerevan&lang=us&units=metric&APPID=a9a3a62789de80865407c0452e9d1c27"


const  App_weather = () => {
    const [days, setDays] = useState('')

    useEffect(() => {
        fetch(weatherURL)
        .then(resp => resp.json())
        .then(data => {
            const dailyData = data.list.filter(reading => reading.dt_txt.includes('12:00:00'))
            setDays(dailyData)
            
        })
    })
    return (
        <div className='weather'>
            <div>
                <h1>Forecast 5 Day</h1>
                <h5>Yerevan</h5>
            </div>
            <div className='weather_day'>

            </div>
        </div>
    )
}



export default App_weather