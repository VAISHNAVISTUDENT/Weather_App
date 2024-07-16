
import Searchbox from "./searchBox";
import InfoBox from "./infobox";
import { useState } from "react";

export default function WeatherApp(){
    const [weatherInfo , setWeatherIinfo] = useState({
        city:"Wonderland",
        humidity: 78,
        pressure:1004,
        temp:28.03,
        weather:"haze",
    });
    let updateInfo = (result) => {
        setWeatherIinfo(result);
    }
   return(
    <>
        <Searchbox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
    </>

   );
}