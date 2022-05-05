import React,{useEffect, useState} from 'react'
import {Link} from"react-router-dom";
import {useDispatch, useSelector,} from 'react-redux'
import { getFoods , createFood,deleteFoods} from '../actions/foodsAction'
function AdminFood() {
  const [file, setFiles] = useState("");
  
   const [ food , setFoods ] = useState({

     name :"",
     description:"",
     price:0,
     category: "",
     image_cover:null ,

    
   })
   const handleDelete = (id) => {
    
    
    dispatch(deleteFoods(id))
    window.location="/adminfood";

  
 
  
  };
 
  
   const handleSubmit = (e) =>{
    e.preventDefault();
 
 
  const  formData = new FormData();
     formData.append("name",food.name)
    formData.append("description",food.description)
    formData.append("price",food.price)
    formData.append("category",food.category)
    formData.append("image_cover",file)
    



    dispatch(createFood(formData))
    setFoods('')
    
      window.location="/adminfood"
   

   }
   const handelChange = (e)=>{
    

    const newfood = { ...food };
    newfood[e.target.name] = e.target.value;
    setFoods(newfood);
    
    const fileupload=e.target.files[0];
    setFiles(fileupload); 
    

   }


  const signout =  () =>{
    const jwt =  localStorage.removeItem('token');
   
    window.location="/";
    return jwt;
  
  
  }
  
  const dispatch = useDispatch();
  const { foods } = useSelector(state=>state.foods)
  
  useEffect (()=>{

    
      // axios.get('http://localhost:5000/api/categories').then((res)=>{
      //  const data = res.data.data
      //     setcategries(data)
      //         })


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
                    <Link to={'/dashboardadmin'} className="active"><span className="las la-home" />
                      <span>
                        </span></Link>
    
                  </li>
                  <li>
                    
                
                      <Link to={'/admincategory'}>
                      <span className="la la-list-alt " />
                        <span>Categorie</span>
                      
                   
                      </Link>
    
                  </li>
                  <li>
                    <Link to={'/adminfood'} className="la la-cutlery" >
                      <span>Foods</span>
                      </Link>
                  </li>
                  <li>
                  <Link to={'/adminlistuser'} className="las la-user" >
                      <span>users</span>
                      </Link>
    
                  </li>
                  <li>
                   <Link to={'/adminorder'} className="la la-cart-arrow-down" >
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
                    <h4>Admin</h4>
                    
                    <small>   <span className="nav-link" style={{cursor:'pointer'}}  onClick={signout} > Logout </span> </small>
                  </div>
                </div>
              </header>
            
              <main>
              <button className='btn btn-success' data-bs-toggle="modal" data-bs-target="#exampleModal">  <i class="fa-solid fa-plus"></i></button>

              <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header bg-warning">
        <h5 className="modal-title" id="exampleModalLabel">Add Food</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close" >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      <form  onSubmit={handleSubmit}>
      <div className="form-group">
       <label htmlFor="exampleInputname">name </label>
    <input type="texte" className="form-control" id="exampleInputname" aria-describedby="Category" placeholder="Enter name" name="name" onChange={(e)=>{handelChange(e)}}/>
   
  </div>
  <div className="form-group">
       <label htmlFor="exampleInputdescription">description </label>
    <input type="texte" className="form-control" id="exampleInputdescription" aria-describedby="description" placeholder="Enter description" name="description" onChange={(e)=>{handelChange(e)}}/>
   
  </div>
  <div className="form-group">
       <label htmlFor="exampleInputPrice">Price </label>
    <input type="number" className="form-control" id="exampleInputname" aria-describedby="Price" placeholder="Enter Price" name="price" onChange={(e)=>{handelChange(e)}}/>
   
  </div>
  <div className="form-group">
       <label htmlFor="exampleInputname">category </label>
    <input type="texte" className="form-control" id="exampleInputname" aria-describedby="Category" placeholder="Enter Category" name="category" onChange={(e)=>{handelChange(e)}}/>
   
  </div>
  <div className="form-group">
  <div class="custom-file">
  <input
                          type="file" 
                          onChange={(e) => handelChange(e)}
                          name="image_cover"
                          className="form-control form-control-lg"
                        />
  </div>
  </div>
  
  
  <button  value="Submit" type="submit" className="btn btn-success"  >Add Food </button>

  </form>
      </div>
      <div class="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
                <table class="table">
  <thead>
    <tr>
  
      <th scope="col">name</th>
      <th scope="col">description</th>
      <th scope="col">price</th>

      <th scope="col">category</th>
      <th scope="col">image</th>

      <th scope="col">Action</th>


    </tr>
  </thead>
  <tbody>
  {foods && foods.map(food=>(
    <tr>
   
         
         <td>{food.name}</td>
         <td>{food.description}</td>
         <td>{food.price}</td>
         <td>{food.category}</td>

         <td > <img id='stars-hotel'  style={{"height" : "80px", "width" : "140px"}} src={"http://localhost:3000/"+food.image_cover} alt="BigCo Inc. logo"/></td>


         <td>
              <button className='btn  text-danger'  onClick={() => handleDelete(food._id)}>
               <i class="fa fa-trash" ></i>
         {/* onClick={()=>dispatch(deleteFromCart(food))} */}
               </button>
              
              <Link to={'/adminfoodedit/'+ food._id }className='btn  text-warning'>
               <i class="fa fa-edit" ></i>
         {/* onClick={()=>dispatch(deleteFromCart(food))} */}
               </Link>
       
       
         </td>
 
    </tr>
       ))}
 
  </tbody>
</table>
            {/*Tabla*/}
          </main>
        
          
    
          
                
            </div>
          </div>
    
    
        </div>
  )
}

export default AdminFood