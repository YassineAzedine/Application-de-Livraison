import jwtdecode from "jwt-decode";




 export const isAuthenticated =  () =>{

  
      

    const jwt =  localStorage.getItem('token');
  
    if(jwt){
      const JWT1 =jwtdecode(jwt);
      console.log('jwt parse',JWT1.username);
      
      return   JWT1;
     

    }
     return false;
  }