

import {Routes,Route,Navigate} from "react-router-dom"

import { isAuthenticated } from './Authenticated';

export const LivreurRoute = ({ children}) => {

  
        
    if (isAuthenticated() && isAuthenticated().role === "livreur" ) {
      return children
    }
      
    return <Navigate to="/" />
  }