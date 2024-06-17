import React from 'react';

const Quality = () => {
  return (
    <div className='bg-salmon w-full font-poppins p-4 sm:p-6 md:p-10 lg:p-100px max-w-full mb-10'>
      <div className='flex flex-col sm:flex-row items-center justify-center gap-20'>
        
        <div className='flex items-center sm:mb-0 sm:mr-6'> 
          <img src="trophy.png" alt="" className='h-12 sm:h-16 w-auto' />
          <div className='flex flex-col ml-3'>
            <section className='text-darkBlack2 text-base sm:text-lg font-semibold'>High Quality</section>
            <section className='text-grayText3 text-xs sm:text-base font-medium'>crafted from top materials</section>
          </div>
        </div>
        
        <div className='flex items-center sm:mb-0 sm:mr-6'> 
          <img src="protection.png" alt="" className='h-12 sm:h-16 w-auto' />
          <div className='flex flex-col ml-3'>
            <section className='text-darkBlack2 text-base sm:text-lg font-semibold'>Warranty Protection</section>
            <section className='text-grayText3 text-xs sm:text-base font-medium'>Over 2 years</section>
          </div>
        </div>
        
        <div className='flex items-center sm:mb-0 sm:mr-6'> 
          <img src="shipping.png" alt="" className='h-12 sm:h-16 w-auto' />
          <div className='flex flex-col ml-3'>
            <section className='text-darkBlack2 text-base sm:text-lg font-semibold'>Free Shipping</section>
            <section className='text-grayText3 text-xs sm:text-base font-medium'>Order over 150 $</section>
          </div>
        </div>
        
        <div className='flex items-center'>
          <img src="support.png" alt="" className='h-12 sm:h-16 w-auto' />
          <div className='flex flex-col ml-3'>
            <section className='text-darkBlack2 text-base sm:text-lg font-semibold'>24 / 7 Support</section>
            <section className='text-grayText3 text-xs sm:text-base font-medium'>Dedicated support</section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quality;
