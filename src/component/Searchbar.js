import React, { useEffect, useState } from 'react'
// import Weather from './Weather';
//  import City from './City';
const Searchbar = () => {
  const [text,setText]=useState("");
const handleText=(e)=>{
  setText(e.target.value);
}

  return (
    <div>
      <form className="form-inline my-2 my-lg-0">
       <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={text} onChange={handleText} />
     <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={useEffect} >Search</button>
       
     </form>
  
    </div>
  )
}

export default Searchbar
