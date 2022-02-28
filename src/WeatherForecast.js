import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecsat] = useState(null);
  
  useEffect(() => {
    setLoaded(false);
    // set loaded false
  }, [props.coordinates]);  
    // if the coordinates change - whenever
   
  
  function handleResponse(response) {
    setForecsat(response.data.daily)
    setLoaded(true);
    }

  if (loaded) {
   return (
     <div className="WeatherForecast">
       <div className="row">
         {forecast.map(function(dailyForecast, index) {
           if (index < 5) {           
             return (
               <div className="col" key={index}>
               <WeatherForecastDay data={dailyForecast} />
               </div>
           );
          } 
          })}        
       </div>
     </div>
   );

  } else {
       let apiKey = `6eafe65543b06f43e2ad5987c313ccca`;
       let longitude = props.coordinates.lon;
       let latitude = props.coordinates.lat;
       let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
       
       axios.get(apiUrl).then(handleResponse);

   return null;
  } 
}
