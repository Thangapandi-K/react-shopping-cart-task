import React, { useState } from 'react'

const ProductPage = ({product, cartItem, setCartItem}) => {

    //using usestate for setting button properties
    const [button,setButton] = useState('Add to Cart')
  
      // conclick event handler to setcart count and changing button properties
      const handleClick = (e) => {
          console.log(e)
          if(e.target.innerText === 'Add to Cart')
          {
              setCartItem(cartItem + 1); // to add cart value
              setButton('Remove from cart'); // to set button proprty after clicking
          }
          else{
              setCartItem(cartItem - 1); // to remove cart value
              setButton('Add to Cart'); // to reset button proprty after clicking
          }
        }
    
  
    return (
      <div className='container col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-3'>
       
              <div className='card'>
                  <div className="card-header">
                      <img src={product.image} alt="product-image" className="card-img-top"/>
                  </div>
                  <div className='card-body'>
                      <h5 className='card-title'>Product: {product.name}</h5>
                      <p className='card-text'>Description: {product.description}</p>
                      <h5 className='card-subtitle mb-2 text-body-secondary'>Price: Rs.{product.price}</h5>
                      <button className={`btn ${button === 'Add to Cart' ? 'btn-success' : 'btn-danger' }`} onClick={handleClick}>{button}</button>
                  </div>
              </div>
  
      </div>
    )
  }

export default ProductPage;