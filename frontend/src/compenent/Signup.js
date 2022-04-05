
import React,{useState} from 'react'
import Axios from 'axios';



function Signup() {

	const url = "http://localhost:5000/api/users/register-user";
	const [values, setvalues] = useState({
	  name: "",
	  username: "",
	  email: "",
	  password: "",
	});
	const submit = (e) => {
		e.preventDefault();
		Axios.post(url, {
		  name: values.name,
		  username: values.username,
		  email: values.email,
		  password: values.password,
		}).then((res) => {
			
		  console.log(res.data);
	
		  window.location="/signin"
		});
	  };
	  
  const handle = (event) => {
    const newdata = { ...values };
    newdata[event.target.id] = event.target.value;
    setvalues(newdata);
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
			<form action="" onSubmit={submit} >
				<img src="./imgfood.jpg"/>
				<h2 class="title">Welcome</h2>
           		<div class="input-div one">
           		   <div class="i">
           		   		<i class="fas fa-user"></i>
           		   </div>
           		   <div class="div">
           		   		<h5>Name</h5>
           		   		<input type="text"
					  id="name"
					  onChange={(event) => handle(event)}
					  name="fullname"
							 
							 
							 class="input"/>
           		   </div>
           		</div>
				   <div class="input-div one">
           		   <div class="i">
           		   		<i class="fas fa-user"></i>
           		   </div>
           		   <div class="div">
           		   		<h5>Username</h5>
           		   		<input 

						type="text"
						id="username"
						onChange={(event) => handle(event)}
						name="username"
				

						 class="input"/>
           		   </div>
           		</div>
                   <div class="input-div one">
           		   <div class="i">
           		   		<i class="fas fa-user"></i>
           		   </div>
           		   <div class="div">
           		   		<h5>Email</h5>
           		   		<input 
						type="email"
						id="email"
						onChange={(event) => handle(event)}
						name="emailAddress"
						 class="input"/>
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
						   id="password"
						   onChange={(event) => handle(event)}
						   name="password"


						   class="input"/>
            	   </div>
            	</div>
            	<a href="#">Forgot Password?</a>
			{JSON.stringify(values)}

            	<input type="submit" class="btn" value="register"/>
            </form>
        </div>
        </div>
    </>
  )
}

export default Signup