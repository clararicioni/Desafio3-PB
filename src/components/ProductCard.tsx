import React from "react";

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
  return (
    <div className="max-w-sm rounded overflow-hidden bg-grayBackground">
      <img className="h-80 w-72 object-cover" src={imageUrl} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2 text-darkGrayText">{name}</div>
        <section className="text-grayText3 font-medium">{description}</section>
        <div className="flex items-baseline gap-2 ">
          <section className="text-darkGrayText mt-2 text-20px font-semibold">
            Rp {price}
          </section>
          {oldPrice != null && (
            <section className="text-grayText4 text-1xl line-through ml-2 font-normal">
              Rp {oldPrice}
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
