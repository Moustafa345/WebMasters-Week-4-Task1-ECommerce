import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
import { useCart } from '@/contexts/CartContext';
import { toast } from 'react-hot-toast';

const CartPage: React.FC = () => {
  const { cartItems, updateQuantity, removeFromCart, clearCart } = useCart();
  const [couponCode, setCouponCode] = useState('');

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * Number(item.quantity), 0);

  const handleUpdateCart = () => {
    toast.success('Cart updated successfully!');
  };


  const handleRemoveItem = (productId: number) => {
    removeFromCart(productId);
    toast.success('Item removed from cart');
  };

  if (cartItems.length === 0) {
    return (
      <div className="container px-4 py-8">
        <div className="text-center py-16">
          <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-8">Add some items to your cart to continue shopping</p>
          <Link
            to="/"
            className="bg-[#DB4444] text-white px-8 py-3 rounded hover:bg-red-600 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container px-4 py-8">
      <div className="flex items-center text-sm mb-8">
        <Link to="/" className="hover:text-red-500">Home</Link>
        <span className="mx-2">/</span>
        <span className="font-medium">Cart</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full mb-8 min-w-[600px]">
          <thead>
            <tr>
              <th colSpan={5} className="p-0">
                <div className="shadow-[0px_1px_13px_rgba(0,0,0,0.05)] rounded my-4 p-6 flex items-center justify-between">
                  <div className="flex items-center w-1/3">
                    <span className="text-left font-normal">Product</span>
                  </div>
                  <span className="text-left font-normal w-1/6">Price</span>
                  <span className="text-left font-normal w-1/6">Quantity</span>
                  <span className="text-right font-normal w-1/6">Subtotal</span>
                  <span className="w-10"></span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td colSpan={5} className="p-0">
                  <div className="shadow-[0px_1px_13px_rgba(0,0,0,0.05)] rounded-sm my-4 p-5 flex items-center justify-between">
                    <div className="flex items-center w-1/3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-contain mr-4"
                      />
                      <span className="line-clamp-2">{item.name}</span>
                    </div>
                    <span className="w-1/6">${item.price.toFixed(2)}</span>

                    <div className="flex items-center w-1/6">
                      <div className="h-11 w-[72px] bg-white flex items-center justify-around px-1 border-2 border-gray-400 rounded-sm">
                        <span className="mx-2">{String(item.quantity).padStart(2, '0')}</span>
                        <div className="flex flex-col">
                          <MdKeyboardArrowUp
                            className="cursor-pointer hover:text-red-500"
                            onClick={() => updateQuantity(item.id, Number(item.quantity) + 1)}
                          />
                          <MdKeyboardArrowDown
                            className="cursor-pointer hover:text-red-500"
                            onClick={() => updateQuantity(item.id, Math.max(1, Number(item.quantity) - 1))}
                          />
                        </div>
                      </div>
                    </div>

                    <span className="text-right w-1/6">
                      ${(item.price * Number(item.quantity)).toFixed(2)}
                    </span>

                    <button
                      onClick={() => handleRemoveItem(item.id)}
                      className="w-10 h-10 flex items-center justify-center hover:text-red-500"
                    >
                      <IoTrashOutline size={20} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between mb-8 flex-col md:flex-row gap-4">
        <Link
          to="/"
          className="w-full md:w-[218px] h-14 border rounded flex items-center justify-center hover:bg-gray-50"
        >
          Return To Shop
        </Link>
        <div className="flex gap-4 flex-col md:flex-row">
          <button
            onClick={clearCart}
            className="w-full md:w-48 h-14 border rounded hover:bg-gray-50"
          >
            Clear Cart
          </button>
          <button
            onClick={handleUpdateCart}
            className="w-full md:w-48 h-14 border rounded hover:bg-gray-50"
          >
            Update Cart
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between mt-20 gap-8">
        <div className="w-full lg:w-1/2">
          <div className="flex gap-6 flex-col md:flex-row">
            <input
              type="text"
              placeholder="Coupon Code"
              className="w-full md:w-[300px] h-14 border rounded px-4 focus:outline-none focus:ring-2 focus:ring-red-500"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
            <button className="w-full md:w-52 h-14 bg-red-500 text-white rounded">Apply Coupon</button>
          </div>
        </div>




        <div className="w-full lg:w-1/3">
          <div className="border-2 border-black rounded p-4">
            <h2 className="text-xl font-medium mb-4">Cart Total</h2>
            <div className="flex justify-between mb-2 font-normal text-base py-4 border-b border-b-gray-300">
              <span>Subtotal:</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between mb-2 font-normal text-base py-4 border-b border-b-gray-300">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-normal text-base py-4">
              <span>Total:</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-center">
              <Link to='checkout' className="mt-4 w-full md:w-64 h-14 bg-[#DB4444] text-white rounded flex justify-center items-center">
                Proceed to checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;