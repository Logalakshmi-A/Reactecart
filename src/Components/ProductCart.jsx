import React,{useContext} from 'react'
import {FaStar} from 'react-icons/fa'
import { CartContext } from '../Context/CartContext'
import { useNavigate } from 'react-router-dom';

function ProductCart({product}) {
  const { addToCart, removeFromCart, isIncart } = useContext(CartContext);
  const navigate = useNavigate();
  const added = isIncart(product.id);
  const handleClick = (e) => {
    e.stopPropagation();
    added ? removeFromCart(product.id) : addToCart(product);
  };

  const handleNavigate = () => {
    navigate(`/product/${product.id}`);
  };
  return (
    <div  onClick={handleNavigate} className="shadow-lg rounded-lg p-4 cursor-pointer mt-4 bg-gradient-to-r from-green-200 to-blue-200">   
      <img src={product.image}  className='h-60 object-cover rounded content-center'/>
      <h1 className='mt-2 font-semibold'>Title: {product.title}</h1>
      <h2 className='text-gray-600'>Price: {product.price}</h2>
      <h2>Description: {product.description}</h2>
      <h2>{product.category}</h2>
      
      <div className='flex text-yellow-400 my-2'>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      
      </div>
      <button
        onClick={handleClick}
        className={`px-4 py-1 rounded-full text-white ${
          added ? "bg-gray-500" : "bg-green-700"
        }`}
      >
        {added ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  )
}

export default ProductCart