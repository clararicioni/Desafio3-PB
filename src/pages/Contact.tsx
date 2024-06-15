import React from 'react'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import Quality from '../components/Quality'
import InitialSection from '../components/InitialSection'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <InitialSection pageName='Contact' />
      <Quality />
      <Footer />
    </div>
  )
}

export default Contact
