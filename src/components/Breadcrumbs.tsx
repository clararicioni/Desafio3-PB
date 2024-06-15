import React from 'react';
import { Link, useParams } from 'react-router-dom';

type BreadcrumbsProps = {
  productName: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = () => {
  const { productName } = useParams<{ productName: string }>();

  return (
    <div className="bg-salmonCheckout w-full h-100px flex items-center font-poppins gap-3 mt-28">
      <Link to="/">
        <section className="font-normal text-grayText text-1xl ml-24">Home</section>
      </Link>
      <section className="font-bold text-black text-1xl mx-2">{'>'}</section>
      <Link to="/shop">
        <section className="font-normal text-grayText text-1xl">Shop</section>
      </Link>
      <section className="font-bold text-black text-1xl mx-2">{'>'}</section>
      <section className="font-normal text-grayText text-1xl mx-2">{'|'}</section>
      <section className="font-normal text-black text-1xl">{productName}</section>
    </div>
  );
};

export default Breadcrumbs;
