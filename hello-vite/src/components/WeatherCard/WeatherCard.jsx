import "./WeatherCard.css";
import { weatherOptions, defaultWeatherOptions } from "../../utils/constants";

function WeatherCard({weatherData}) {

  const filteredOptions = weatherOptions.filter((option) => {
    return ( option.day === weatherData.isDay && 
    option.condition === weatherData.condition);
  });

  let weatherOption;
  if (filteredOptions.length === 0){
    weatherOption = defaultWeatherOptions[weatherData.isDay ? "day" : "night"];
    } else {
  weatherOption = filteredOptions[0];
    }

    return (
   <section className="weather-card">
  <p className="weather-card-degrees">{weatherData.temp.F}°F</p>
  <img 
  src={weatherOption?.url} 
  alt= {`Sky is showing ${
    weatherOption?.day ? "day" : "night"
  }
 ${weatherOption?.condition} weather`} 
  className="weather-card-image"/>
   </section>
    );
  };
  
  export default WeatherCard;