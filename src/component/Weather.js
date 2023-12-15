import React, { useEffect, useState } from 'react'
// import City from './City';
import City1 from './City1';

// import { useLocation } from 'react-router';
// import Searchbar from './Searchbar';
const Weather = (props) => {
  
  const [citycontent, setCntent]=useState(props.city);
  const [articles,setArticles]=useState([]);
  const [text,setText]=useState("Mumbai");

const handleText=(e)=>{
  setText(e.target.value);
}
const handleClick=()=>{

  setCntent(text);
}
  // let location=useLocation();
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6401188c17msh200e09999553dfap1270b9jsn751dd9b67dcc',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    }
    const capitalizeletter=(string)=>{
      return string.charAt(0).toUpperCase()+string.slice(1);
     }
     const updatedata=async()=>{
   
      const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${citycontent}`;
      const data=await fetch(url,options);
      const parsedata=await data.json();
      setArticles(parsedata);
      console.log(props.city);
    }
 
    useEffect(()=>{
     
     setCntent(text);
      document.title = ` Weather of ${capitalizeletter(citycontent)}`;
     updatedata();
     //eslint-disable-next-line
    },[citycontent]);
  
    
  return (
    <>
       <div className="d-flex">
       <input className="form-control mr-sm-2 bg-light" type="search" placeholder="Search city" aria-label="Search" value={text} onChange={handleText} />
     <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={handleClick}  >Search</button>
     </div>


     <h1 style={{textAlign:"center", marginTop:"50px",color:"white",fontFamily:"monospace"}} >{capitalizeletter(citycontent)}
       </h1>
       
    < div className='container my-3'>
      <h1 style={{color:"white", fontFamily:"monospace",fontSize:"50px"}}>{articles.temp}°C</h1>
      <h6 style={{color:"white", fontFamily:"monospace"}}>Feels Like:{articles.feels_like}</h6>
      {/* <h1>Weather of {city}</h1> */}
     <City1 cloudpct={articles.cloud_pct} temperature={articles.max_temp} Mintemp={articles.min_temp} feels={articles.feels_like} humidity={articles.humidity} sunrise={articles.sunrise} sunset={articles.sunset} temp={articles.temp} windd={articles.wind_degrees} winds={articles.wind_speed} />
    </div>
    </>
  )
}

export default Weather
/*
cloud_pct
: 
0
feels_like
: 
18
humidity
: 
66
max_temp
: 
21
min_temp
: 
16
sunrise
: 
1692883030
sunset
: 
1692932801
temp
: 
19
wind_degrees
: 
10
wind_speed
: 
6.69
*/