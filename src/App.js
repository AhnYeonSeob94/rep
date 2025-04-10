import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import ClipLoader from "react-spinners/ClipLoader";


// 1. 앱이 실행되자마자 현재 위치기반의 날씨가 보인다.
// 2. 날씨정보에는 도시, 섭씨, 화씨 날씨상태
// 3. 5개의 버튼이 있다. (1개는 현재위치, 4개는 다른도시)
// 4. 도시버튼을 클릭할 때 마다 도시별 날씨가 나온다
// 5. 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다.
// 6. 데이터를 들고오는 동안 로딩스피너가 돈다 

function App() {
  const [loading,setLoading] = useState(false);
  const [latitude, setLat] = useState(0); 
  const [longitude, setLon] = useState(0);
  const [weather, setWeather] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const apikey = "8880379cdba05b6bff7c604549ba8f53";
  
  const cities = ["Seoul", "New York", "London", "Tokyo"];

  const getWeatherVideo = (weather) => {
    if (!weather || !weather.weather || weather.weather.length === 0) return null;
    const main = weather.weather[0].main.toLowerCase();
  
    switch (main) {
      case "clear":
        return "https://videos.pexels.com/video-files/1771850/1771850-hd_1920_1080_30fps.mp4";
      case "clouds":
        return "https://videos.pexels.com/video-files/855785/855785-hd_1920_1080_24fps.mp4";
      case "mist":
      case "rain":
      case "drizzle":
        return "https://videos.pexels.com/video-files/7663345/7663345-uhd_2732_1440_24fps.mp4";
      case "snow":
        return "https://videos.pexels.com/video-files/4419950/4419950-hd_1920_1080_24fps.mp4";
      case "thunderstorm":
        return "https://videos.pexels.com/video-files/5908584/5908584-hd_1920_1080_25fps.mp4";
      default:
        return null;
    }
  };



  //현재 위치 가져오기 위도경도 설정
  const getCurrentLocation=()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      console.log("현재위치",lat,lon);
      setLat(lat);
      setLon(lon);
      setSelectedCity(null);

    });
  }

  //위도 경도로 날씨데이터 가져오기
  const getWeatherByCoords = async (lat, lon) => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`
      );
      const data = await res.json();
      setWeather(data);
      setLoading(false);
    } catch (err) {
      console.error("좌표로 날씨 가져오기 실패!", err);
    }
  };

  const getWeatherByCity = async (city) =>{
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
      );
      const data = await res.json();
      setWeather(data);
      setLoading(false);
    } catch (err) {
      console.error("도시명으로 날씨 가져오기 실패!", err);
    }
  };

  const changeCity = (city) =>{
    setSelectedCity(city);
    if(city === null || city === ""){
      //선택 도시 없으면 현재 위치
      getCurrentLocation();
    }else{
      // 선택 도시 날씨가져오기
      getWeatherByCity(city);
    }

  };// change city 끝

  //api 통해 날씨 가져오기
  useEffect(()=>{
    if(selectedCity === null && latitude && longitude){
      getWeatherByCoords(latitude, longitude);
    }
    
  },[latitude,longitude, selectedCity]);

  //처음 마운트시 현재위치 요청
  useEffect(()=>{
    getCurrentLocation();
  },[]);

  return (
    <div>
      {weather && (
        <video
          key={getWeatherVideo(weather)} // 날씨 바뀔 때 재로드
          className="background-video"
          autoPlay
          loop
          muted
        >
          <source src={getWeatherVideo(weather)} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      {loading?(
        <div className='container'>
          <ClipLoader color="#f88c6b" loading={loading} size={150} aria-label="Loading Spinner" data-testid="loader"/>
        </div>
      ) : (<div className='container'>
        <div className='boxArea'>
          <WeatherBox weather={weather}/>
        </div>
        <div className='btnArea'>
          <WeatherButton
          cities={cities}
          selectedCity={selectedCity}
          changeCity={changeCity}
          />
        </div>
      </div>)}
      
    </div>
  );
}

export default App;
