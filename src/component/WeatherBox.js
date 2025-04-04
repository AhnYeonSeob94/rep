import React from 'react'

const WeatherBox = ({weather}) => {
    console.log("weather?",weather);
    const fahrenheit = weather?.main.temp ? ( weather?.main.temp * 1.8 + 32).toFixed(2) : null;
  return (
    <div className='weather-box'>
        <div>&lt;{weather?.name}&gt;</div>
        <h2>{weather?.main.temp}°C / {weather?fahrenheit:""}°F</h2>
        <h3>{weather?.weather[0].main}({weather?.weather[0].description})</h3>
    </div>
  )
}

export default WeatherBox