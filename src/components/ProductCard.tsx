import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProductToCart, setSelectedProduct } from '../redux/cart/actions';
import { useNavigate } from 'react-router-dom';

interface CardProps {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  oldPrice?: number | null;
  discount?: string | null;
  new?: boolean;
}

const ProductCard: React.FC<CardProps> = ({
  id,
  name,
  price,
  description,
  imageUrl,
  oldPrice,
  discount,
  new: isNew,
}) => {
  const dispatch = useDispatch();

  const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    dispatch(
      addProductToCart({
        id,
        name,
        price,
        description,
        imageUrl,
        oldPrice,
        discount,
        new: isNew,
        quantity: 1
      })
    );
  };

  const navigate = useNavigate();
  const handleCardClick = () => {
    dispatch(setSelectedProduct({
      id,
      name,
      price,
      description,
      imageUrl,
      oldPrice,
      discount,
      new: isNew,
      quantity: 1
    }));
    navigate("/singleproduct")
  };

  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
      <div
        className="max-w-sm overflow-hidden bg-grayBackground relative group cursor-pointer scaleTransition"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleCardClick}
      >
        <img className="h-80 w-full object-cover" src={imageUrl} alt={name} />
        <div className="px-4 py-4">
          <div className="font-bold text-2xl mb-2 text-darkGrayText">{name}</div>
          <section className="text-grayText3 font-medium">{description}</section>
          <div className="flex items-baseline gap-2 mt-2">
            <section className="text-darkGrayText text-lg font-semibold">
              Rp {price}
            </section>
            {discount && (
              <div className="absolute top-4 right-4 bg-discountBallColor text-white rounded-full w-12 h-12 flex items-center justify-center text-sm">
                {discount}
              </div>
            )}
            {isNew && (
              <div className="absolute top-4 right-4 bg-newBallColor text-white rounded-full w-12 h-12 flex items-center justify-center text-sm">
                New
              </div>
            )}
            {oldPrice != null && (
              <section className="text-grayText4 text-base line-through ml-2 font-normal">
                Rp {oldPrice}
              </section>
            )}
          </div>
        </div>
        <div
          className={`absolute inset-0 bg-black opacity-0 rounded transition-opacity duration-300 ${
            hovered ? "opacity-50" : ""
          }`}
        ></div>
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center space-y-2 transition-opacity duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            className="bg-white text-yellowPrimary font-semibold hover:opacity-75 z-20"
            style={{ width: "202px", height: "48px" }}
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
          <div className="flex space-x-4 z-20">
            <button className="flex items-center text-white space-x-2 hover:opacity-75 prevent-default">
              <img src="/share.png" alt="Share" className="h-5 w-5" />
                <span>Share</span>
            </button>
            <button className="flex items-center text-white space-x-2 hover:opacity-75 prevent-default">
              <img src="/compare.png" alt="Compare" className="h-5 w-5" />
              <span>Compare</span>
            </button>
            <button className="flex items-center text-white space-x-2 hover:opacity-75 prevent-default">
              <img src="/like.png" alt="Like" className="h-5 w-5" />
              <span>Like</span>
            </button>
          </div>
        </div>
      </div>
  );
};

export default ProductCard;
