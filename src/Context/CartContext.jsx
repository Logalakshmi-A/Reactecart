import { createContext, useState } from "react";


export const CartContext = createContext();

export const CartProvider = ({children})=>{
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (products)=> {

    const exist = cartItems.find((item)=>item.id === products.id);

    if(exist){
      setCartItems(
        cartItems.map((item)=>
          item.id === products.id ?
        {...item, quantity: item.quantity + 1} :item
)
      )
    } else{
      setCartItems([...cartItems, {...products, quantity:1}])
    }
    alert(`Added ${products.title} to the cart successfully`)
    }


  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item)=>item.id !== id));
    alert('Remove Item from cart');
  }

  const updateQuantity = (id, quantity) => {
    setCartItems(
      cartItems.map((item)=> item.id ===id ? {...item, quantity: quantity<1? 1:quantity}:item)
    )
  }
  const isIncart =(id)=>cartItems.some((item)=> item.id===id);


return(
  <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, isIncart }}>
      {children}
    </CartContext.Provider>

)
}