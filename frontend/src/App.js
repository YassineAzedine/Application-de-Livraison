import logo from './logo.svg';
import {Routes,Route}from "react-router-dom"

import './App.css';
import Signin from './compenent/Signin'
import Signup from './compenent/Signup'
import Menu from"./compenent/menu"
import DashboardUser from './compenent/DashboardUser';
import DashboardLivreur from './compenent/DashboardLivreur';
import DashboradAdmin from './compenent/DashboradAdmin';




function App() {
  return (
    <div className="App">
            {<Menu/>} 
        <Routes>
           <Route path='/signin' element={<Signin/>} />  
           <Route path='/signup' element={<Signup/>} />  
           <Route path='/dashboarduser' element={<DashboardUser/>} />  
           <Route path='/dashboardlivreur' element={<DashboardLivreur/>} />  
           <Route path='/dashboardadmin' element={<DashboradAdmin/>} />  



         </Routes>
      
      
    </div>
  );
}

export default App;
