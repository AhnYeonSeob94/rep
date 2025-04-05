import React from 'react'
import { WiRain, WiDaySunny, WiCloud, WiSnow, WiThunderstorm } from 'react-icons/wi'; 

const WeatherBox = ({weather}) => {
    console.log("weather?",weather);
    const fahrenheit = weather?.main.temp ? ( weather?.main.temp * 1.8 + 32).toFixed(2) : null;
    const condition = weather?.weather?.[0]?.main;
    const description = weather?.weather?.[0]?.description;

    const conditionKorMap = {
      Clear: "맑음",
      Clouds: "흐림",
      Rain: "비",
      Drizzle: "이슬비",
      Thunderstorm: "천둥번개",
      Snow: "눈",
      Mist: "안개",
      Smoke: "연기",
      Haze: "실안개",
      Dust: "먼지",
      Fog: "짙은 안개",
      Sand: "모래",
      Ash: "화산재",
      Squall: "돌풍",
      Tornado: "토네이도",
    };
    
    const descriptionKorMap = {
      "clear sky": "맑은 하늘",
      "few clouds": "구름 조금",
      "scattered clouds": "드문드문 구름",
      "broken clouds": "구름 많음",
      "overcast clouds": "흐린 하늘",
      "light rain": "가벼운 비",
      "moderate rain": "보통 비",
      "heavy intensity rain": "강한 비",
      "very heavy rain": "매우 강한 비",
      "extreme rain": "극심한 비",
      "freezing rain": "얼어붙는 비",
      "light snow": "가벼운 눈",
      "snow": "눈",
      "heavy snow": "폭설",
      "sleet": "진눈깨비",
      "shower sleet": "소나기 진눈깨비",
      "light rain and snow": "약한 비와 눈",
      "rain and snow": "비와 눈",
      "light shower snow": "약한 소나기 눈",
      "shower snow": "소나기 눈",
      "heavy shower snow": "강한 소나기 눈",
      "mist": "안개",
      "smoke": "연기",
      "haze": "실안개",
      "fog": "짙은 안개",
      "sand": "모래",
      "dust": "먼지",
      "ash": "화산재",
      "squall": "돌풍",
      "tornado": "토네이도",
    };

    const getWeatherIcon = (condition) => {
      switch (condition) {
        case 'Clear':
          return <WiDaySunny size={48} color="#f39c12" />;
        case 'Clouds':
          return <WiCloud size={48} color="#95a5a6" />;
        case 'Rain':
        case 'Drizzle':
          return <WiRain size={48} color="#3498db" />;
        case 'Snow':
          return <WiSnow size={48} color="#bdc3c7" />;
        case 'Thunderstorm':
          return <WiThunderstorm size={48} color="#8e44ad" />;
        default:
          return <WiCloud size={48} color="#95a5a6" />;
      }
    };

    const weatherIcon = getWeatherIcon(condition);
    const conditionKor = conditionKorMap[condition] || condition;
    const descriptionKor = descriptionKorMap[description?.toLowerCase()] || description;
    const humidity = weather?.main?.humidity ?? '-';
    const windSpeed = weather?.wind?.speed ?? '-';

  return (
    <div className='weather-box'>
        <div className="weather-icon">
          {weatherIcon}
        </div>
        <div className='city-name'>도시: &lt;{weather?.name}&gt;</div>
        <div className='temperature'>기온: {weather?.main.temp}°C / {weather?fahrenheit:""}°F</div>
        <div className='condition'>상태: {conditionKor}({descriptionKor})</div>
        <div className="weather-stats">
          <div className="stat-item">
            <p>습도</p>
            <div className="stat-value">{humidity}%</div>
          </div>
          <div className="stat-item">
            <p>풍속</p>
            <div className="stat-value">{windSpeed} m/s</div>
          </div>
        </div>

    </div>
  )
}

export default WeatherBox