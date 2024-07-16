import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
export default function Searchbox({updateInfo}){
    const API_URL_COOR = "http://api.openweathermap.org/geo/1.0/direct";
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "2fe4627ae169c4446a933bd82f465844"

    let wheatherFunction = async(city) => {
        let response = await fetch(`${API_URL_COOR}?q=${city}}&appid=${API_KEY}`);
        let jresponse = await response.json();
        let lat = jresponse[0].lat;
        let lon = jresponse[0].lon;
        // console.log(jresponse);
        
        let response2 = await fetch(`${API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        let jresponse2 = await response2.json();
        // console.log(jresponse2)

        let result = {
            city:jresponse[0].name,
            state:jresponse[0].state,
            temp:jresponse2.main.temp,
            humidity:jresponse2.main.humidity,
            pressure:jresponse2.main.pressure,
            weather:jresponse2.weather[0].description,
            latitude:jresponse[0].lat,
            longitude:jresponse[0].lon,
            winddeg:jresponse2.wind.deg,
            windspeed:jresponse2.wind.speed,
            temp_min:jresponse2.main.temp_min,
            temp_max:jresponse2.main.temp_max,
            feels_like:jresponse2.main.feels_like,
            name:jresponse2.name,
            grnd_level:jresponse2.main.grnd_level,
            base:jresponse2.base,
            timezone:jresponse2.timezone,
            cloud:jresponse2.clouds.all,

        };
        // console.log(result);
        return result;
    }
    let[city , setcity] = useState("");
    let handleChange = (e) => {
        setcity(e.target.value);
    };

    let handleSubmit = async(e) => {

        e.preventDefault();
        let NewInfo = await wheatherFunction(city);
        setcity("");
        updateInfo(NewInfo);
        

    }

    return(
        <div>
        <form onSubmit={handleSubmit}>
            <TextField id="standard-basic" label="Enter City Name" variant="standard" required onChange={handleChange} /><br /><br />
            <Button  size="small" type='submit' >Search</Button>
        </form>
        </div>
    );
}