import React, { useEffect } from 'react'
import {Link} from"react-router-dom";

import {useDispatch, useSelector} from 'react-redux'
import { getFoods} from '../actions/foodsAction'  

function Dashboardlivreur() {
  const { orders  } = useSelector(state=>state.orders)

  const signout =  () =>{

    const jwt =  localStorage.removeItem('token');
    window.location="/";
    return jwt;
  
  }
  const dispatch = useDispatch();

  useEffect (()=>{
    dispatch(getFoods())

  } , [dispatch])
  return (
    <div>

    {/* //dashboard DashboradAdmin */}
    
      <div>
            <input type="checkbox" id="nav-toggle" />
            
            <div className="sidebar bg-warning">
              <div className="sidebar-brand">
                <h2>
                  <span className="las la-store" /> <span>MARHBA </span> 
                  <span className="la la-cutlery" />
                
                </h2>
              </div>
              {/*Secciones-del-tablero*/}
              <div className="sidebar-menu">
                <ul>
              
             
             
                 
                  <li>
                   <Link to={'/livreurOrder'} className="la la-cart-arrow-down" >
                      <span>Commande</span>
                      </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="main-content">
              <header>
                <h2>
                  <label htmlFor="nav-toggle">
                    <span className="las la-bars" />
                  </label> Marhba
                  <span className="la la-cutlery" />
                </h2>
                {/* <div className="search-wrapper">
                  <span className="las la-search" />
                  <input type="search" placeholder="Buscar aquí" />
                </div> */}
                <div className="user-wrapper">
                  <img src="img/Avatar.png" width="40px" height="40px" alt="" />
                  <div>
                    <h4>Livreur</h4>
                    
                    <small>   <span className="nav-link" style={{cursor:'pointer'}}  onClick={signout} > Logout </span> </small>
                  </div>
                </div>
              </header>
            
                {/* main */}
                
               <main>
            <div className="cards">
          
          
          
              <div className="card-single">
                <div>
                <h1>{orders.length}</h1>

                  <span>gestion des commandes</span>
                </div>
                <div>
                  <span className="la la-cart-arrow-down" />
                </div>
              </div>
            </div>
            {/*Tabla*/}
          </main>
    
          
                
            </div>
          </div>
    
    
        </div>

  )
}

export default Dashboardlivreur