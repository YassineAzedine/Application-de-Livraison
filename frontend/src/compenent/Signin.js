import React, {useState} from 'react';
import Axios from 'axios';
import jwtdecode from "jwt-decode";

function Signin() {
    const url="http://localhost:5000/api/users/login-user"
    const [values, setvalues] = useState ({
        username:"",
        password:"",});
		const submit = (e) => {
			e.preventDefault();
			Axios.post(url, {
			//   name: values.name,
			  username: values.username,
			//   email: values.email,
			  password: values.password,
			}).then((res) => {
			  localStorage.setItem('token',res.data.token)
			  const jwt =  localStorage.getItem('token');
			  const JWT1 =jwtdecode(jwt);
			  console.log('jwt parse',JWT1.role);
		
		
		if(JWT1.role==="livreur"){
			
			window.location="/dashboardlivreur"
		
		}else if(JWT1.role==="user"){
		
			window.location="/dashboarduser"
		}else{
			window.location="/dashboardadmin"
		}
			 
			  
			});
			
		  };
		  const handleFormSubmit=(event)=>{
			const newdata ={...values}
			newdata[event.target.id]=event.target.value
			setvalues(newdata)
			console.log(newdata);
		
			// event.prevntDefault();
			// setErrors(validation(values));
		};


  return (
    <>
    	<img class="wave" src="https://cdn.pixabay.com/photo/2021/02/26/11/23/man-6051503_960_720.png"/>
        <div class="container">
		<div class="img">
			{/* <!-- <img src="img/bg.svg"> --> */}
		</div>

		<div class="login-content">
			<form  onSubmit={submit}>
				<img src="./imgfood.jpg"/>
				<h2 class="title">Welcome</h2>
           		<div class="input-div one">
           		   <div class="i">
           		   		<i class="fas fa-user"></i>
           		   </div>
           		   <div class="div">
           		   		<h5>Username</h5>
           		   		<input 
						type="text"
					    class="input"
						id="username"
					    value={values.username} 
					    onChange={(event)=>handleFormSubmit(event)}
						name='emailAddress'
						/>
           		   </div>
           		</div>
           		<div class="input-div pass">
           		   <div class="i"> 
           		    	<i class="fas fa-lock"></i>
           		   </div>
           		   <div class="div">
           		    	<h5>Password</h5>
           		    	<input 
						 type="password" 
						class="input"
						id="password" 
                       value={values.password} 
                       onChange={(event)=>handleFormSubmit(event)}
                       name='password' 
						
						/>
            	   </div>
            	</div>
            	<a href="#">Forgot Password?</a>
            	<input type="submit" class="btn" value="Login"/>
            </form>
        </div>
        </div>
    </>
  )
}

export default Signin