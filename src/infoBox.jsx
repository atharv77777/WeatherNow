import "./InfoBox.css";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
export default function InfoBox({info}){
    const INIT_URL="https://images.unsplash.com/photo-1726471468936-959edceba791?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    let RAIN_URL="https://images.unsplash.com/photo-1560588563-c170b74246c6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHJhaW55JTIwc2Vhc29ufGVufDB8fDB8fHww";
    let HOT_URL="https://media.gettyimages.com/id/1325645339/photo/golden-sunrise-above-the-city.jpg?s=612x612&w=0&k=20&c=fvQskYmOj2xKkLcuifsR5TocLR-AEFANEDNbf1I_fq4=";
    let COLD_URL="https://images.unsplash.com/photo-1612784753007-c0d7af0e5254?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvbGQlMjBtYW5hbmxpfGVufDB8fDB8fHww";
    
    return(
        <div className="InfoBox">
            <div className='cardContent'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 120, width:350}}
                        image={info.humidity > 80 ? RAIN_URL:info.temp>15 ? HOT_URL:COLD_URL }
                        title="green iguana"
                    />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city} {info.humidity > 80 ? <ThunderstormIcon/>:info.temp>15 ?<SunnyIcon/>:<AcUnitIcon/>}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        <div>Temperature={info.temp}&deg;C</div>
                        <div>Humidity={info.humidity}</div>
                        <div>Min temp={info.tempMin}&deg;C</div>
                        <div>Max temp={info.tempMax}&deg;C</div>
                        <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
                    </Typography>
                </CardContent>
                </Card>
            </div>
        </div>
    );
}