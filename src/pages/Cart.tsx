import React from 'react'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import Quality from '../components/Quality'
import InitialSection from '../components/InitialSection'

const Cart = () => {
  return (
    <div>
      <Navbar />
      <InitialSection pageName='Cart'/>
      <Quality />
      <Footer />
    </div>
  )
}

export default Cart
