import React from 'react';
import './WeatherApp.css';
import search_icon from "../images/search.png";
/*import clear_icon from '../images/clear'
import cloud_icon from '../images/cloud'
import drizzel_icon from '../images/drizzle'
import humidity_icon from '../images/humidity'
import rain_icon from '../images/rain'

import snow_icon from '../images/snow'
import wind_icon from '../images/wind'*/



export const WeatherApp = () => {
  return (
   <div className="container">
    <div className="top-bar">
      <input type="text" className="search-bar" placeholder='search'/>
      <div className="search-icon">
        <img  src={search_icon} alt="" />
      </div>
    </div>
   </div>
  )
}
