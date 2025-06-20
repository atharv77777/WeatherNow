import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";
import { colors } from "@mui/material";
import "./weatherApp.css";
export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Delhi",
        feelsLike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze",
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }

    const HOT_URL ="https://media.gettyimages.com/id/1325645339/photo/golden-sunrise-above-the-city.jpg?s=612x612&w=0&k=20&c=fvQskYmOj2xKkLcuifsR5TocLR-AEFANEDNbf1I_fq4=";
    const COLD_URL = "https://images.unsplash.com/photo-1612784753007-c0d7af0e5254?w=1920";
    const RAIN_URL = "https://images.unsplash.com/photo-1560588563-c170b74246c6?w=1920";

    let backgroundImageUrl =
    weatherInfo.humidity > 80 ? RAIN_URL :
    weatherInfo.temp > 15 ? HOT_URL : COLD_URL;



    return (
        <div style={{textAlign:"center",
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundColor: "rgba(0,0,0,0.5)",
        backgroundBlendMode: "overlay",
        backgroundRepeat: "no-repeat",
        height: "100%",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "88vh",
        color: "white"}}>
            <h2 className="heading" >WeatherNow</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
} 


//https://chatgpt.com/share/684d5feb-a8e8-800a-b6f5-c4a8e87c54b1