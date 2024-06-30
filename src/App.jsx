import React, { useState } from 'react'
import products from './components/Products'
import Navbar from './components/Navbar'
import ProductPage from './components/ProductPage'
import Footer from './components/Footer'
import "./App.css"

const App = () => {

  // using useState for setting cart item count
  const [cartItem, setCartItem] = useState(0);

  
 
  return (
    <div>
      <Navbar 
        cartItem={cartItem} // sending cart item value to navbar as props
      />
      <div className='container'>
        {
            products.map((product, index) =>(
              <ProductPage 
                key={index}
                product={product} // sending product details to productpage as props
                setCartItem={setCartItem} // sending setcart value to productpage as props to set cart value
                cartItem={cartItem} // sending cart item value to productpage as props to handle change
              />
            ))
        }
      </div>
      <Footer />
    </div>
  )
}

export default App;