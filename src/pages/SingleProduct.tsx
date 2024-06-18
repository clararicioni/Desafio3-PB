import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import { Link, useParams } from "react-router-dom";
import { fetchProducts } from "../services/api";
import ProductCard from "../components/ProductCard";

const SingleProduct = () => {
  let { productName } = useParams<{ productName?: string }>();
  productName = productName ?? "Produto Não Encontrado";
  const [currentPage] = useState(1);
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const productsPerPage = 4;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      try {
        const data = await fetchProducts(currentPage, productsPerPage);
        setProducts(data.products);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Error");
        }
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, [currentPage]);

  if (loading) {
    return (
      <section className="text-2xl mt-5 text-yellowPrimary font-bold flex justify-center">
        Loading...
      </section>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="font-poppins select-none">
      <Navbar />
      <Breadcrumbs productName={productName} />
      <div className="flex flex-row gap-44 justify-center text-2xl border-t border-gray-300">
        <section className="text-black font-medium mt-10">Description</section>
        <section className="text-grayText font-normal mt-10">
          Aditional Information
        </section>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col">
          <section className="mt-10 text-grayText text-1xl max-w-5xl">
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
            portable active stereo speaker takes the unmistakable look and sound
            of Marshall, unplugs the chords, and takes the show on the road.
          </section>
          <section className="mt-10 text-grayText text-1xl max-w-5xl">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </section>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-8 mt-10 pb-20 border-b border-gray-300">
        <img
          src="/singleproductsofa1.png"
          alt="sofa"
          className="w-48 md:w-auto max-w-full"
        />
        <img
          src="/singleproductsofa.png"
          alt="sofa"
          className="w-48 md:w-auto max-w-full"
        />
      </div>
      <section className="mt-20 text-4xl text-black font-medium leading-10 flex justify-center">
        Related Products
      </section>
      <div className="flex flex-wrap justify-center mt-8 gap-8">
        {products.map((product) => {
          const formattedImageUrl = product.imageUrl.startsWith("/")
            ? product.imageUrl
            : `/${product.imageUrl}`;

          return (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              description={product.description}
              imageUrl={formattedImageUrl}
              oldPrice={product.oldPrice}
              discount={product.discount}
              new={product.new}
            />
          );
        })}
      </div>
      <div className="flex justify-center pb-20 border-b border-gray-300">
        <Link to="/shop" target="_blank">
          <button
            className="flex justify-center items-center font-bold text-1xl text-yellowPrimary p-5 outline-1 outline hover:opacity-75 mt-10"
            style={{ width: "245px", height: "48px" }}
          >
            Show More
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default SingleProduct;
