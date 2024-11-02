import React from 'react';

const TNCard = ({ product }) => {
  return (
    <div className='hover:scale-110 transition-all duration-200 sm:w-1/5 sm:h-fit  w-32 h-44 flex-shrink-0 mr-4 relative '>
      <img className='rounded-md w-11/12 h-full object-fill float-end' src={product.poster_url} alt="Movie Poster" />

      <h1 className='absolute bottom-5 left-0  sm:text-8xl sm:font-bold text-6xl font-semibold text-black' style={{ textShadow: '1px 1px 0px white, -1px -1px 0px white, 1px -1px 0px white, -1px 1px 0px white' }}>
  {product.id}
</h1>


    </div>
  );
};

export default TNCard;
