import React  from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  
  return (
   <><nav className="navbar navbar-expand-lg navbar-dark bg-dark">
   <i className="fa-solid fa-cloud-sun-rain" style={{color: "#f0790a", padding:"10px", fontSize:"30px"}}></i>
   <Link className="navbar-brand" to="/">Weather</Link>
   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span className="navbar-toggler-icon"></span>
   </button>
 
   <div className="collapse navbar-collapse" id="navbarSupportedContent">
     <ul className="navbar-nav mr-auto">
       <li className="nav-item active">
         <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
       </li>
      {/*}
       <li className="nav-item">
         <Link className="nav-link" to="/Jaipur">Jaipur</Link>
       </li>  */}
     </ul>
   </div>
 </nav>

   </>
  )
}

export default Navbar
