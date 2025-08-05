import React from 'react';


const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition-shadow duration-300 flex gap-5 cols-3 justify-center items-center mt-10">
      <img
        src={product.thumbnail || product.image} 
        alt={product.title}
        className="w-full h-full object-contain mb-4 slice(0, 100)..."
      />
      <h3 className="font-semibold text-lg mb-2">{product.title}</h3><br />
      <p className="text-gray-600 mb-2">{product.description?.slice(0, 100)}...</p><br />
      <p className="font-bold text-xl text-green-600">${product.price}</p>
    </div>
  );
};

export default ProductCard;
