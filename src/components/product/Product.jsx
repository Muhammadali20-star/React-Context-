import { useStateValue } from '@/context'
import React from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Product = ({data}) => {
    const navigate = useNavigate()
    const [state, dispatch] = useStateValue()
  return (
    <div id="home" className="container mx-auto px-4 py-6">
     <div className="container mx-auto px-4">
  <h2 className="text-center text-4xl font-semibold my-10 text-gray-800">Products</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {data?.map((product) => (
      <div key={product.id}  className="bg-white p-4 rounded-xl shadow hover:shadow-lg" >
        <div className="relative">
              <img src={product.image} onClick={() => navigate(`/product/${product.id}`)} alt={product.title} className="w-full h-48 object-contain" />
              <button onClick={() => dispatch({ type: "LIKED", payload: product })} className="absolute top-2 right-2 text-xl text-gray-600 hover:text-blue-600" ><FaRegHeart /></button>
        </div>
        <div className="space-y-1 text-sm text-gray-700">
          <h3 className="font-semibold truncate" title={product.title}>{product.title}</h3>
          <p><span className="font-medium">Price:</span> ${product.price}</p>
          <p><span className="font-medium">Category:</span> {product.category}</p>
          <p><span className="font-medium">Rate:</span> {product.rating.rate}</p>
          <p><span className="font-medium">Count:</span> {product.rating.count}</p>
        </div>
      </div>
    ))}
  </div>
</div>
</div>
  )
}

export default React.memo(Product)