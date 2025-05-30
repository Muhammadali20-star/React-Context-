import { useStateValue } from "@/context";
import React from "react";
import { FaHeart } from "react-icons/fa";

const Heart = () => {
  const [state, dispatch] = useStateValue();
  console.log(state.wishlist);

  return (
<div id="about" className="container mx-auto px-4 py-6">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {state.wishlist?.map((product) => (
      <div key={product.id} className="bg-white p-4 rounded-xl shadow hover:shadow-lg">
        <div className="relative mb-4">
          <img src={product.image} alt={product.title} onClick={() => navigate(`/product/${product.id}`)} className="w-full h-48 object-contain"/>
          <button onClick={() => dispatch({ type: "LIKED", payload: product })}className="absolute top-2 right-2 text-xl text-gray-600 hover:text-blue-600"><FaHeart className="text-[#8967F0]" /></button>
        </div>
        <div className="space-y-1 text-sm text-gray-700">
          <h3 className="font-semibold truncate" title={product.title}> {product.title} </h3>
          <p><span className="font-medium">Price:</span> ${product.price}</p>
          <p><span className="font-medium">Category:</span> {product.category}</p>
          <p><span className="font-medium">Rate:</span> {product.rating?.rate}</p>
          <p><span className="font-medium">Count:</span> {product.rating?.count}</p>
        </div>
      </div>
    ))}
  </div>
</div>
  );
};

export default React.memo(Heart)
