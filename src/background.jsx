
import './background.css'
import './foreground.css';
import React, { useState } from 'react';
import Searchbox from './searchBox';
import { colors } from '@mui/material';
export default function Background(){
    const [weatherInfo, setWeatherIinfo] = useState({
        city: "Mumbai",
        state: "Maharastra",
        temp: 28.03,
        humidity: 110,
        pressure: 100,
        weather: "Drizzy",
        latitude: 50,
        longitude: 50,
        winddeg: 0,
        windspeed: 0,
        temp_min:0,
        temp_max:0,
        feels_like:0,
        name:"name",
        grnd_level:0,
        base:"",
        timezone:0,
        cloud:0,
    });
    let updateInfo = (result) => {
        setWeatherIinfo(result);
        updateBackground(result);
    }
    let updateBackground = (result) => {
        console.log(result);
        let videoUrl;
        if (result.temp < 10) {
             videoUrl = 'https://res.cloudinary.com/dqoxgromg/video/upload/v1721155825/857032-hd_1920_1080_30fps_pcg007.mp4'; 
        } else if (result.temp < 30) {
            if (result.humidity > 70) {
                 videoUrl = 'https://res.cloudinary.com/dqoxgromg/video/upload/v1721155970/3130376-uhd_3840_2160_24fps_dc35sj.mp4'; 
            } else {
                 videoUrl = 'https://res.cloudinary.com/dqoxgromg/video/upload/v1721155812/856171-hd_1920_1080_30fps_vh946m.mp4'; 
                 

            }
        } else  {
             videoUrl = 'https://res.cloudinary.com/dqoxgromg/video/upload/v1721155831/3568022-hd_1920_1080_24fps_nhehfq.mp4';  //heat
        }
        let outerContainer = document.querySelector(".outer-container");
        
        // Create a video element
        let videoElement = document.createElement('video');
        videoElement.src = videoUrl;
        videoElement.autoplay = true;
        videoElement.loop = true;
        videoElement.muted = true; 
        videoElement.style.position = 'absolute';
        videoElement.style.width = '100%';
        videoElement.style.height = '100%';
        videoElement.style.objectFit = 'cover';
        videoElement.style.zIndex = '-1';
    
        
        outerContainer.appendChild(videoElement);
        
        // Optional: You can add additional logic to control video based on temperature and humidity
        
    };
    
    
    
    
    
    return(
        
        
        <div className="outer-container" >
            <div className="inner-container">
            <div className="sideBar">
                <div className="search-box">
                    <Searchbox updateInfo={updateInfo} />
                </div>
                
                <div className="temp-container">
                    <div className="temp"><h1>{weatherInfo.temp}&deg; C</h1> <i className="fa-solid fa-sun"></i></div>
                </div>
                <div className="about-city">
                    <h3>{weatherInfo.city}, {weatherInfo.state}</h3>
                    <p className="p">{weatherInfo.city} is a city in  {weatherInfo.state}. Latitudes of the city is {weatherInfo.latitude} and longitude is {weatherInfo.longitude} </p>
                
                </div>
            </div>

            <div className="other-side">
                <div className="main-container">
                    
                    <div className="weather-icon">
                        
                    <i className="fa-regular fa-snowflake"></i>
                    </div>
                    <h2>The weather feels like</h2>
                    <h1>{(weatherInfo.weather)}</h1>
                </div>

                <div className="info">
                <p>
                    {weatherInfo.city} is a city in {weatherInfo.state}. The minimum temperature in the city is currently {weatherInfo.temp_min}°C, while the maximum temperature reaches up to {weatherInfo.temp_max}°C. Despite these values, the temperature feels like {weatherInfo.feels_like}°C due to various atmospheric conditions. The ground level pressure is recorded at {weatherInfo.feels_like} hPa. Additionally, the weather data is based on the {weatherInfo.name} base station, located in the timezone {weatherInfo.timezone}. The cloud coverage in {weatherInfo.city} is at {weatherInfo.cloud}%.
                
                </p>
                </div>

                <div className="info">
                    <div className="info-item">
                        <span>Temperature  </span>
                        <div>{weatherInfo.temp}&deg; C</div>
                    </div>
                    <div className="info-item">
                        <span>Feels Like</span>
                        <div>{weatherInfo.feels_like}&deg; C</div>
                    </div>
                    <div className="info-item">
                        <span>Wind </span>
                        <div>{weatherInfo.windspeed} m/s at {weatherInfo.winddeg}&deg;</div>
                    </div>
                    <div className="info-item">
                        <span>Humidity </span>
                        <div>{weatherInfo.humidity}%</div>
                    </div>
                    <div className="info-item">
                        <span>Pressure </span>
                        <div>{weatherInfo.pressure} hPa</div>
                    </div>
                </div>
            </div>
            
        </div>
        </div>
    );

}