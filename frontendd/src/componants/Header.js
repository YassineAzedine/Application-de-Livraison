import React from 'react'
import { useSelector,} from 'react-redux'
import {Link} from 'react-router-dom'
import jwtdecode from "jwt-decode";
function Header() {
  const {cart} = useSelector((state) => state.cart)
  
  const isAuthenticated =  () =>{

    const jwt =  localStorage.getItem('token');
  
    if(jwt){
      
      const JWT1 =jwtdecode(jwt);
      


      
      return   JWT1;
     

    }
     return false;
  }

  const signout =  () =>{
    const jwt =  localStorage.removeItem('token');
   
    window.location="/";
    return jwt;
  
  
  }
  
  return (
    <div>
            <div>
        <div className="topnav">
        <Link to={'/'}>
          <a href=""> MARHBA</a>
         </Link>

          <Link className="active" to={'/home'}>
            <a href="">Home</a>
          </Link>
        
          {isAuthenticated()  && (
          <Link to="/cart">
            <a >
           
            <i class="fa-solid fa-bag-shopping"> Cart</i>
            </a>
         
         
          <span className='badge text-info text-danger'>{cart.length}</span>

          </Link>
            )}

          
              
              {!isAuthenticated() &&


               (
            <div className='d-flex flex-row-reverse '>
                <li class="nav-item m-2 " >
                    <Link class="nav-link btn btn-primary text-white" type="button" to={'/signin'} data-toggle="modal" data-target="#myModal">Sign In</Link>                  
                </li>
                <li class="nav-item m-2">
                    <Link class="nav-link btn btn-danger text-white" type="button"to={'/signup '} data-toggle="modal" data-target="#myModal">Sign Up</Link>
                </li>
                </div>
                 )
                 }

            
          <>
                      
                       {isAuthenticated()  && (
                         <div className='d-flex flex-row-reverse '>
       
       <span className="nav-link" style={{cursor:'pointer'}}  onClick={signout}  > Se Déconnecter </span>

             
                <span className="nav-link" style={{cursor:'pointer'}}   > <strong className='text-dark'>Bienvenue</strong>  { isAuthenticated().username }</span>
               
              
 {/* <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="#">Tableau de bord</Link>
        </li>  */}
     


        
          
       
        




       
          </div>
  )}
            
 


  </>
  <div>
      {(() => {
        if (isAuthenticated().role ==='admin') {
          return (
            <div>
                         <div className='d-flex flex-row-reverse '>

                   <Link class="nav-link  text-info  btn-light" type="button"to={'/dashboardadmin '} data-toggle="modal" data-target="#myModal">Dashboradn Admin</Link>         
          </div>
            </div>
          )
        } else if (isAuthenticated().role ==='livreur') {
          return (
            <div>
                  <div className='d-flex flex-row-reverse '>
                   <Link class="nav-link  text-info  btn-light" type="button"to={'/dashboardadmin '} data-toggle="modal" data-target="#myModal">Dashborad Livreur</Link>         
                   </div>
            </div>
          )
        } else {
          return (
            <div className='d-flex flex-row-reverse '>
            <div></div>
            </div>
            
          )
        }
      })()}
    </div>
          </div>
          

      
    
      </div>
    </div>
  )
}

export default Header

