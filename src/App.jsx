import React from 'react'
import products from './components/Products'
import Navbar from './components/Navbar'
import ProductPage from './components/ProductPage'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <div>
        <ProductPage />
      </div>
      <Footer />
    </div>
  )
}

export default App