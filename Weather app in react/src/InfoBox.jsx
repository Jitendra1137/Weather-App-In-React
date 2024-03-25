import React from 'react'
import "./InfoBox.css";
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

import Typography from '@mui/material/Typography';

export default function InfoBox({info}) {

  const INIT_URL = "https://images.unsplash.com/photo-1580049904360-a9c3b79f86ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"

const HOT_URL = "https://images.unsplash.com/photo-1447601932606-2b63e2e64331?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
const COLD_URL = "https://images.unsplash.com/photo-1612730871428-1abcc6bb840d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
const RAIN_URL = "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";


  return (
    <div className='InfoBox'>
      <div className='cardContainer'>
     
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAIN_URL : info.temp> 15 ? HOT_URL : COLD_URL }
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity > 80 ? <ThunderstormIcon/> : info.temp> 15 ? <WbSunnyIcon/> : <AcUnitIcon/> }
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
        <div>Temperature = {info.temp}&deg;c</div>
        <div>Humidity = {info.humidity}&deg;c</div>
        <p>Min Temp = {info.tempMin}&deg;c</p>
        <p>Max Temp = {info.tempMax}&deg;c</p>
        <p>the Weather can be described as <i>{info.weather}</i>  and feels like  {info.feelslike}&deg;c</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
    </div>
  )
}
