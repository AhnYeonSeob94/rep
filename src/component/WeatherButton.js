import React from 'react'
import { Button } from 'react-bootstrap';

const WeatherButton = ({ cities, selectedCity, changeCity }) => {
  return (
    <div className='weather-button'>
        <Button variant="light" className={selectedCity === null ? "active" : ""}
        onClick={()=>changeCity(null)}
        >Current Location</Button>

        {cities.map((city) => (
            <Button
            key={city}
            variant="light"
            className={selectedCity === city ? "active" : ""}
            onClick={() => changeCity(city)}
            >
            {city}
          </Button>
        ))}
             
    </div>
  );
};

export default WeatherButton