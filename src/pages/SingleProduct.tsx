import React from 'react'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import Breadcrumbs from '../components/Breadcrumbs'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
  let { productName } = useParams<{ productName?: string }>();
  productName = productName ?? "Produto Não Encontrado";

  return (
    <div>
      <Navbar />
      <Breadcrumbs productName={productName} />
      <Footer />
    </div>
  )
}

export default SingleProduct
