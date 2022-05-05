

import {Routes,Route,Navigate} from "react-router-dom"

import { isAuthenticated } from './Authenticated';

export const AdminRoute = ({ children}) => {

  
        
    if (isAuthenticated() && isAuthenticated().role === "admin" ) {
      return children
    }
      
    return <Navigate to="/" />
  }