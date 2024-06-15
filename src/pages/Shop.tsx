import React, { useState, useEffect } from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import Quality from '../components/Quality';
import InitialSection from '../components/InitialSection';
import Filter from '../components/Filter';
import ProductCard from '../components/ProductCard';
import ProductPagination from '../components/ProductPagination';
import { fetchProducts } from '../services/api';

const Shop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const productsPerPage = 16;
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const data = await fetchProducts(currentPage, productsPerPage);
        setProducts(data.products);
        setTotalPages(Math.ceil(data.total / productsPerPage));
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('Erro desconhecido');
        }
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (loading) {
    return <section className='text-2xl mt-5 text-yellowPrimary font-bold flex justify-center'>Loading...</section>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Navbar />
      <InitialSection pageName='Shop' />
      <Filter />
      <div className='flex flex-wrap justify-center mt-8 gap-8'>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            imageUrl={product.imageUrl}
            oldPrice={product.oldPrice}
          />
        ))}
      </div>
      <ProductPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <Quality />
      <Footer />
    </div>
  );
};

export default Shop;
