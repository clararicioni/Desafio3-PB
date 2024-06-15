import React, { useState } from "react";
import { Link } from "react-router-dom";

interface CardProps {
  id: number;
  name: string;
  price: string | null;
  description: string;
  imageUrl: string;
  oldPrice?: string | null;
}

const ProductCard: React.FC<CardProps> = ({
  id,
  name,
  price,
  description,
  imageUrl,
  oldPrice,
}) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const handleCardClick = () => {
    const productNameParam = encodeURIComponent(name.charAt(0).toUpperCase() + name.slice(1));
    window.location.href = `/singleproduct/${productNameParam}`;
  };

  return (
    <div
      className="max-w-sm rounded overflow-hidden bg-grayBackground relative group cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
    >
      <img className="h-80 w-full object-cover" src={imageUrl} alt={name} />
      <div className="px-4 py-4">
        <div className="font-bold text-xl mb-2 text-darkGrayText">{name}</div>
        <section className="text-grayText3 font-medium">{description}</section>
        <div className="flex items-baseline gap-2 mt-2">
          <section className="text-gray-800 text-lg font-semibold">
            Rp {price}
          </section>
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
        <Link to="/cart" target="_blank" className="prevent-default">
          <button
            className="bg-white text-yellowPrimary font-semibold hover:opacity-75 z-20"
            style={{ width: "202px", height: "48px" }}
            onClick={(e) => e.stopPropagation()}
          >
            Add to cart
          </button>
        </Link>
        <div className="flex space-x-4 z-20">
          <button className="flex items-center text-white space-x-2 hover:opacity-75 prevent-default">
            <img src="share.png" alt="Share" className="h-5 w-5" />
            <span>Share</span>
          </button>
          <button className="flex items-center text-white space-x-2 hover:opacity-75 prevent-default">
            <img src="compare.png" alt="Compare" className="h-5 w-5" />
            <span>Compare</span>
          </button>
          <button className="flex items-center text-white space-x-2 hover:opacity-75 prevent-default">
            <img src="like.png" alt="Like" className="h-5 w-5" />
            <span>Like</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
