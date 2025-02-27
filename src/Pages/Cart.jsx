import React, { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (total, item)=> total + item.price * item.quantity, 0
  )

  return (
    <div className="container mx-auto py-5">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="font-bold">Cart is empty</p>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2">
            <table className="w-full text-left">
              <thead className="border-b">
                <tr>
                  <th className="py-2">Products</th>
                  <th className="py-2">Price</th>
                  <th className="py-2">Quantity</th>
                  <th className="py-2">SubTotal</th>
                  
                  <th className="py-2">Remove</th>
                </tr>
              </thead>

              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 rounded"
                      />
                      <span>{item.title}</span>
                    </td>

                    <td>$: {item.price}</td>

                    <td>
                      <div className="flex items-center gap-2">
                        <button
                          className="px-2 border"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          className="px-2 border"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                    </td>

                    <td><span className="line-through">${(item.price * item.quantity).toFixed(2)}</span>
                      <br/>
                      <span>${(item.price * item.quantity) - ((item.price * item.quantity)*(0.1)) .toFixed(2)}</span>
                      <br/>
                     <span>Saved: ${((item.price * item.quantity)*(0.1)).toFixed(2)}
                     </span>
                    </td>
                    

                    <td>
                      <button
                        className="text-red-500"
                        onClick={() => removeFromCart(item.id)}>
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center">
            <table className="border w-52 h-60 font-bold">
              <thead>
                <tr className="col-span-2 text-center">
                  <th>Cart Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Total Items:</td>
                  <td className="text-center">{cartItems.length}</td>
                </tr>              
                <tr>
                  <td>Total Price:</td>
                  <td>${totalPrice.toFixed(2)}</td>
                </tr>
                <tr>
                  <td className="text-center">Address:Chennai</td>
                  <td></td>
                </tr>

              </tbody>
            </table>

            
              
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
