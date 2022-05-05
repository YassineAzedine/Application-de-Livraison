import React from 'react'
import { useSelector,} from 'react-redux'


function Main() {
  const { users } = useSelector(state=>state.users)
  const { orders  } = useSelector(state=>state.orders)
  const { categories } = useSelector(state=>state.categories)
  const { foods  } = useSelector(state=>state.foods)

  return (
    <div>
        
        <main>
            <div className="cards">
              <div className="card-single">
                <div>
                <h1>{categories.length}</h1>
                  <span>gestion des categories</span>
                </div>
                <div>
                  <span className="la la-list-alt" />
                </div>
              </div>
              <div className="card-single">
                <div>
                <h1>{foods.length}</h1>

                  <span>gestion des repas</span>
                </div>
                <div>
                  <span className="la la-cutlery" />
                </div>
              </div>
              <div className="card-single">
                <div>
                  <h1>{users.length}</h1>
                  <span>gestion des users </span>
                </div>
                <div>
                  <span className="las la-users" />
                </div>
              </div>
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
  )
}

export default Main