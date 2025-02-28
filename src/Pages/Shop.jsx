import React, { useEffect, useState } from 'react'
import axios from 'axios';
import SearchBox from '../Components/SearchBox';
import ProductCart from '../Components/ProductCart';


function Shop() {
  const [products, setproducts] = useState([]);
  const [searchItems, setSearchItems] = useState ('');

  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then((res) => setproducts(res.data))
  }, [])

  const filteredProducts =products.filter((products)=>
    products.title.toLowerCase().includes(searchItems.toLowerCase())
  )
  return (
    <div className='container mx-auto p-4'>
      <SearchBox setSearchItems={setSearchItems} />
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-4'>
        {filteredProducts.length>0? (filteredProducts.map((product)=>(
          <ProductCart key={product.id} product={product}/>
        ))) : (<p>No Products Found</p>)}
      </div>
    </div>
  )
}

export default Shop