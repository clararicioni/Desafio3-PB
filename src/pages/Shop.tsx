import React from 'react'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import Quality from '../components/Quality'
import InitialSection from '../components/InitialSection'

const Shop = () => {
  return (
    <div>
      <Navbar />
      <InitialSection pageName='Shop'/>
      <Quality />
      <Footer />
    </div>
  )
}

export default Shop
