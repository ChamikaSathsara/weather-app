import React from 'react';
import './WeatherApp.css';
import search_icon from "../images/search.png";
import rain_icon from '../images/rain.png';
import humidity_icon from '../images/humidity.png';
import clear_icon from '../images/clear.png';
import cloud_icon from '../images/cloud.png';
import drizzel_icon from '../images/drizzle.png';
import snow_icon from '../images/snow.png'
import wind_icon from '../images/wind.png';



export const WeatherApp = () => {
  return (
   <div className="container">
    <div className="top-bar">
      <input type="text" className="search-bar" placeholder='search'/>
      <div className="search-icon">
        <img  src={search_icon} alt="" />
      </div>
    </div>
    <div className="weather-image">
        <img src={rain_icon} alt="" />
      </div>
      <div className="weather-temp">
        24৹C
      </div>
      <div className="weather-location">Sri Lanka</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percentage">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-percentage">18 Km/h</div>
            <div className="text">Wind</div>
          </div>
        </div>
      </div>
   </div>
  )
}
