
import Home from './componants/Home'
import FoodDetails from './componants/food/fooddettails'
import Header from './componants/Header'
import Cart from './componants/Cart'
import Signup from './componants/Signup'
import Sigin from './componants/Signin'
import Laindingpage from './componants/Landingpage'
import Dashbordadmin from './componants/DashboradAdmin'
import Dashboardlivreur from './componants/DashboardLivreur'
import AdminFood from './componants/AdminFood'
import AdminEditFood from './componants/AdminEditFood'

import AdminCategory from './componants/AdminCategory'
import AdminEditeCategory from './componants/AdminEditCategory'

import AdminOrder from './componants/AdminOrder'
import AdminListeuser from './componants/AdminListeuser'
import LivreurOrder from './componants/LivreurOrder'
import GetOneOrderbyAdmin from './componants/GetOneOrderbyAdmin.js'

import { AdminRoute } from './Auth/AdminRouter';
import {  LivreurRoute } from './Auth/LivreurRoute';



//redux
import {useDispatch} from 'react-redux'
import {getCategories} from '../src/actions/categoryAction'

import {getorders} from '../src/actions/orderAction'
import {Routes,Route}from "react-router-dom"
import { useEffect } from 'react'

const App = () => {


  // const dispatch = useDispatch();
  // useEffect(()=>{
  //   dispatch(getCategories());
  //   console.log("🚀 ~ file: App.js ~ line 40 ~ useEffect ~ getCategories", getCategories)

  // },[dispatch])
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getorders());

  },[dispatch])



  return (
    <div className="App">
   
     <Header/>      
   <Routes>
  
   

       <Route path='/home' element={<Home/>} />  
       <Route path='/food/:id' element={<FoodDetails/>} />  
       <Route path='/cart' element={<Cart/>} />  
       <Route path='/signup' element={<Signup/>} />  
       <Route path='/signin' element={<Sigin/>} />  
       <Route path='/' element={<Laindingpage/>} />  
       <Route path='/dashboardadmin' element={<AdminRoute> <Dashbordadmin/></AdminRoute> } /> 
       <Route path='/dashboardlivreur' element={ <LivreurRoute><Dashboardlivreur /></LivreurRoute>  } /> 
    
       <Route path='/adminfood' element={<AdminFood/>} /> 
       <Route path='/adminfoodedit/:foodid' element={<AdminEditFood/>} /> 

       <Route path='/admincategory' element={<AdminCategory/>} /> 
       <Route path='/admineditcategory/:categoryid' element={<AdminEditeCategory/>} /> 

       <Route path='/adminorder' element={<AdminOrder/>} /> 
       <Route path='/adminlistuser' element={<AdminListeuser/>} /> 
       <Route path='/livreurOrder' element={<LivreurOrder/>} /> 
       <Route path='/listfood/:foodid' element={<GetOneOrderbyAdmin/>} /> 
        


       
       

       






     </Routes>
   
    </div>
  );
}

export default App;
