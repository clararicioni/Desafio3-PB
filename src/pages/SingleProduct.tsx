import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import { fetchProducts } from "../services/api";
import ProductCard from "../components/ProductCard";
import { RootState } from "../redux/root-reducer";
import Star from "../components/Star";
import { addProductToCart } from "../redux/cart/actions";

const SingleProduct: React.FC = () => {
  const dispatch = useDispatch();

  const selectedProduct = useSelector(
    (state: RootState) => state.cartReducer.selectedProduct
  );

  const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (selectedProduct) {
      dispatch(addProductToCart({ ...selectedProduct, quantity }));
    }
  };

  const items: number[] = [...(new Array(5).keys() as any)];
  const [activeIndex, setActiveIndex] = useState<number>();

  const onClickStar = (index: number) => {
    setActiveIndex((oldState) => (oldState === index ? undefined : index));
  };

  const [quantity, setQuantity] = useState<number>(selectedProduct ? 1 : 0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const increaseQty = () => {
    if (selectedProduct) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQty = () => {
    if (selectedProduct && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

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

  if (!selectedProduct) {
    return (
      <section className="text-2xl mt-5 text-red-500 font-bold flex justify-center">
        Produto não encontrado
      </section>
    );
  }

  return (
    <div className="font-poppins select-none">
      <Navbar />
      <Breadcrumbs productName={selectedProduct.name} />
      <div className="flex flex-col justify-center md:flex-row mt-10 space-y-6 md:space-y-0">
        <div className="hidden md:block lg:flex flex-col gap-6 mr-2">
          <img src="/sidecard1.png" alt="sidecard 1" className="max-w-20" />
          <img src="/sidecard2.png" alt="sidecard 2" className="max-w-20" />
          <img src="/sidecard3.png" alt="sidecard 3" className="max-w-20" />
          <img src="/sidecard4.png" alt="sidecard 4" className="max-w-20" />
        </div>
        <div className="flex lg:flex-row md:flex-col sm:flex sm:flex-col">
          <img
            src={selectedProduct.imageUrl}
            alt="single product"
            className="w-full rounded-md max-h-96 mb-6 md:mb-0 md:mr-10"
          />
          <div className="flex flex-col">
            <section className="font-normal text-black text-4xl text-center md:text-left mb-2">
              {selectedProduct.name}
            </section>
            <section className="font-medium text-grayText text-2xl text-center md:text-left">
              Rs. {selectedProduct.price}
            </section>
            <div className="flex items-center mt-5 max-w-96">
              {items.map((rate) => (
                <Star
                  onClick={() => onClickStar(rate)}
                  key={`star_${rate}`}
                  isActive={rate <= activeIndex!}
                />
              ))}
              <section className="text-grayText text-1xl font-normal ml-5">
                | 5 Customer Review
              </section>
            </div>
            <section className="text-black text-base font-normal max-w-full mt-5 mb-5 text-center md:text-left">
              {selectedProduct.description}
            </section>
            <label htmlFor="size" className="text-grayText">
              Size
            </label>
            <div className="flex flex-row gap-2 mt-2">
              {["L", "XL", "XS"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`${
                    selectedSize === size
                      ? "bg-yellowPrimary text-white"
                      : "bg-salmonCheckout text-black"
                  } rounded-md text-base p-3 max-w-7 max-h-7 flex items-center justify-center hover:bg-yellowPrimary hover:text-white`}
                >
                  {size}
                </button>
              ))}
            </div>
            <label htmlFor="color" className="text-grayText mt-5">
              Color
            </label>
            <div className="flex flex-row gap-5 mt-2">
              <button className="bg-purple-700 rounded-full p-3 hover:opacity-75"></button>
              <button className="bg-black rounded-full p-3 hover:opacity-75"></button>
              <button className="bg-yellowPrimary rounded-full p-3 hover:opacity-75"></button>
            </div>
            <div className="flex flex-row gap-4 mt-5">
              <div className="flex items-center p-3 border-2 rounded-lg max-h-14">
                <button onClick={decreaseQty}>-</button>
                <input
                  id="quantity"
                  value={quantity}
                  type="number"
                  min="1"
                  className="text-center w-12 outline-none"
                />
                <button onClick={increaseQty}>+</button>
              </div>
              <button
                type="submit"
                className="mb-10 max-h-14 max-w-64 flex items-center justify-center border-2 rounded-lg 
                bg-white border-black text-black p-3 hover:bg-black hover:text-white"
                onClick={handleAddToCart}
              >
                Add To Cart
              </button>
            </div>
            <section className="border-b border-gray-300 mb-10"></section>
            <div className="text-grayText text-base space-y-5 mb-20">
              <section>SKU : SS01</section>
              <section>Category : Furniture</section>
              <section>Tags : Sofa, Chair, Home, Shop, Furniture</section>
              <section className="flex items-center gap-3">
                Share:
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/fbsingleproduct.png" alt="facebook" />
                </a>
                <a
                  href="https://www.linkedin.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src="/linkedinsingleproduct.png" alt="linkedin" />
                </a>
                <a href="https://www.x.com/" target="_blank" rel="noreferrer">
                  <img src="/twittersingleproduct.png" alt="twitter" />
                </a>
              </section>
            </div>
          </div>
        </div>
      </div>

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
          return (
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
