import './App.css';
import Navbar from './component/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import Weather from './component/Weather';
// import Searchbar from './component/Searchbar';
function App(props) {
  // let today=new Date();
  return (
    <>
      
    <div className="App">
    <Router>
     <Navbar/>
     <Routes>
       <Route exact path="/" element={<Weather city="Mumbai"/>}>
            </Route>
            {/* <Route exact path="/" element={<Weather city="Delhi"/>}>
              </Route> */}
              {/*
              <Route exact path="/Jaipur" element={<Weather  city="Jaipur"/>}>
              </Route> */}
        </Routes>
        </Router>
    </div>
    
    </>
  );
}

export default App;
