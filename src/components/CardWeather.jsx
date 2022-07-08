import React, { useState } from 'react'


const CardWeather = ({ weather }) => {

    const [auxiliar, setAuxiliar] = useState(false)

    const magicChange = auxiliar ? `${Math.round(weather?.main.temp)} °C` : `${Math.round((((weather?.main.temp)) * 1.8) + 32)} °F`

    return (
        <div className='card'>
            <h2>{weather?.name}</h2>
            <span><img src={weather && `http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" /></span>
            <span><h3>{magicChange}</h3></span>
            <span><button onClick={() => { setAuxiliar(!auxiliar) }}>°F / °C</button></span>
            <span><h3>{weather?.weather[0].description}</h3></span>
            <div>
                <span><h4>Wind Speed: {weather?.wind.speed}m/s</h4></span>
                <span><h4>Humidity: {weather?.main.humidity}%</h4></span>
                <span><h4>Clouds: {weather?.clouds.all}%</h4></span>
            </div>
        </div>
    )
}


export default CardWeather