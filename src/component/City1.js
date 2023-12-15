import React from 'react'

const City1 = (props) => {
  return (
    <>
    <div className='container row my-3 '  style={{marginLeft:"100px"}}>
      <div className="card mx-2 bg-light"  style={{width: "18rem", marginTop:"50px"}}>
  <div className="card-body">
    <h2 style={{fontFamily:"sans-serif"}}><div className='d-flex'><i className="fa-solid fa-temperature-low fa-beat mx-2" style={{color:"#1873b9"}}></i>Temperature</div></h2> 
    <h2 className="card-title my-2"> {props.temp}°C</h2>
   
    <h6 className="card-subtitle mb-2 text-muted my-3">Feels Like:{props.feels}°C</h6>
    <h6 className="card-subtitle mb-2 text-muted">Max:{props.temperature}°C</h6>
    <h6 className="card-subtitle mb-2 text-muted">Min:{props.Mintemp}°C</h6>
  </div>
</div>
<div className="card mx-2 bg-light" style={{width: "18rem", marginTop:"50px"}}>
  <div className="card-body">
    <h2 style={{fontFamily:"sans-serif",alignItems:"center", marginLeft:"40px"}} ><div className='d-flex align-center'><i className="fa-solid fa-wind mx-2"style={{color:"#667999"}}></i>Wind</div></h2>
    <h2 className="card-title my-2">{props.winds} km/h</h2>
    <h6 className="card-subtitle mb-2 text-muted my-3">wind_degrees:{props.windd}°</h6>
    <h6 className="card-subtitle mb-2 text-muted"><i className="fa-solid fa-sun mx-2" style={{color: "#f89c1b"}}></i>sunrise:{props.sunrise}</h6>
    <h6 className="card-subtitle mb-2 text-muted"><i className="fa-solid fa-cloud-sun mx-1" style={{color: "#f77102"}}></i>sunset:{props.sunset}</h6>
  </div>
</div>
<div className="card mx-2 bg-light" style={{width: "18rem", marginTop:"50px"}}>
  <div className="card-body">
    <h2 style={{fontFamily:"sans-serif"}}> <i className="fa-solid fa-droplet mx-2" style={{color:"#1873b9"}}></i> Humidity </h2>
    <h2 className="card-title my-2">{props.humidity}%</h2>
    <h6 className="card-subtitle mb-2 text-muted my-3">Feels Like:{props.feels}</h6>
    <h6 className="card-subtitle mb-2 text-muted"><i className="fa-solid fa-cloud" style={{color: "#5490f8"}}></i>Cloud Pct:{props.cloudpct}%</h6>
  </div>
</div>
    </div>
   
    </>
  )
}

export default City1
