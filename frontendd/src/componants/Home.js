import React, { useEffect,useState, } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

import Food from './food/food'
import {useDispatch, useSelector,} from 'react-redux'
import { getFoods} from '../actions/foodsAction'

function Home() {
    const [category,setcategries] = useState('')
    const categories = [
      "Takos","Pizza","Desserts" , "Plats","All"
    ]
 
  

    const dispatch = useDispatch();
    const {loading, foods , error} = useSelector(state=>state.foods)
    
    useEffect (()=>{

      
        // axios.get('http://localhost:5000/api/categories').then((res)=>{
        //  const data = res.data.data
        //     setcategries(data)
        //         })


      dispatch(getFoods(category))
      console.log("🚀 ~ file: home.js ~ line 28 ~ useEffect ~ category", category)
  
    } , [dispatch,category])
  return (
    

    <div>
      
    
        <div className="container-fluid mt-5">
        <div class="jumbotron desing jumbotron-fluid" >
        
        </div>
        <div className="row">
        <div className="col-sm-4 col-md-6 col-lg-3 my-3">
        <div className="card  hover" >
        <div className="card-header text-center">
        <h3 >categories</h3>
        
  </div>



  <ul className="list-group list-group-flush">

     {       categories && categories.map((category)=>(
          

           <li className='list-group-item text-info '
           style = {{ 
                cursor:'pointer',
                listStyleType:'none'
                
           }}
           key={category}
         
          
         onClick={ ()=> setcategries(category)
       
       
        }
       
             >{category}</li>
                
               ))}
            
           </ul>

</div>
</div>

        {foods && foods.map(food=>(
            <div className="col-md-6 col-lg-3 my-3">
  
         
 <Food key={food._id} food = {food}  />
      
           </div>
           ))}
            </div>
        </div>

   


    </div>
  )
}

export default Home
