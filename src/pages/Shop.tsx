import React, { useState, useEffect } from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import InitialSection from "../components/InitialSection";
import Filter from "../components/Filter";
import ProductCard from "../components/ProductCard";
import ProductPagination from "../components/ProductPagination";
import { fetchProducts, ApiData, Product } from "../services/api";

const Shop: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [productsPerPage, setProductsPerPage] = useState<number>(16);
  const [totalResults, setTotalResults] = useState<number>(0);
  const [sortBy, setSortBy] = useState<string>("default");
  const [showOnlyDiscounted, setShowOnlyDiscounted] = useState<boolean>(false);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const data: ApiData = await fetchProducts(1, 100000);

        let allProducts = data.products;

        if (sortBy === "az") {
          allProducts.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === "za") {
          allProducts.sort((a, b) => b.name.localeCompare(a.name));
        } else if (sortBy === "lowhigh") {
          allProducts.sort((a, b) => a.price - b.price);
        } else if (sortBy === "highlow") {
          allProducts.sort((a, b) => b.price - a.price);
        }

        if (showOnlyDiscounted) {
          allProducts = allProducts.filter(
            (product) =>
              product.oldPrice !== undefined && product.oldPrice !== null
          );
        }

        const filteredProducts = allProducts.slice(
          (currentPage - 1) * productsPerPage,
          currentPage * productsPerPage
        );

        setProducts(filteredProducts);
        setTotalResults(allProducts.length);
        setTotalPages(Math.ceil(allProducts.length / productsPerPage));
      } catch (error) {
        setError((error as Error).message || "Erro desconhecido");
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, [currentPage, productsPerPage, sortBy, showOnlyDiscounted]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleShowChange = (value: number) => {
    setProductsPerPage(value);
    setCurrentPage(1);
  };

  return (
    <div>
      <Navbar />
      <InitialSection pageName="Shop" />
      <Filter
        productsPerPage={productsPerPage}
        totalResults={totalResults}
        currentPage={currentPage}
        onPageChange={handleShowChange}
        sortBy={sortBy}
        setSortBy={setSortBy}
        showOnlyDiscounted={showOnlyDiscounted}
        setShowOnlyDiscounted={setShowOnlyDiscounted}
      />
      {loading && (
        <section className="text-2xl mt-5 text-yellowPrimary font-bold flex justify-center">
          Loading...
        </section>
      )}
      {error && <div>Error: {error}</div>}
      {!loading && !error && (
        <>
          <div className="flex flex-wrap justify-center mt-8 gap-8 font-poppins">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                description={product.description}
                imageUrl={product.imageUrl}
                oldPrice={product.oldPrice}
                discount={product.discount}
                new={product.new}
              />
            ))}
          </div>
          <ProductPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
      <Footer />
    </div>
  );
};

export default Shop;
