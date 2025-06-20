import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    let [city,setCity]=useState("");
    let [error,setError]=useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="7fac378c550a94f7f7021962a8bc43dc";

    let getWeatherInfo=async()=>{
        try{
            let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let JsonResponse= await response.json();
            let result={
                city: JsonResponse.name,
                temp:JsonResponse.main.temp,
                tempMin:JsonResponse.main.temp_min,
                tempMax:JsonResponse.main.temp_max,
                humidity:JsonResponse.main.humidity,
                feelsLike:JsonResponse.main.feels_like,
                weather:JsonResponse.weather[0].description,
            }
            console.log(result);
            return result;
        }catch(error){
            throw (err);
        }  
    }; 

    let handleChange=(evt)=>{
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        evt.preventDefault();
        try {
            setError(false); 
            console.log(city);
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setCity(""); 
        } catch (err) {
            setError(true);
        }
    };

    return ( 
        <div className='SearchBox'>
            <h3 style={{ color: "khaki", fontFamily:"'Hanalei Fill', cursive" }}>Search for weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name Here" variant="outlined" required value={city} onChange={handleChange} 
                    InputLabelProps={{
                        style: { color: "pink" }
                    }}  
                    sx={{
                        '& fieldset': {
                            borderColor: 'pink',      
                        },
                    }}
                            
                /><br /><br />
                <Button variant="contained" type="submit">Search</Button>
                {error && <p style={{color:"red"}}>No such place exists!</p>}
            </form>
        </div>
    );
}





