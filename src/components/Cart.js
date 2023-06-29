import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import FoodItem from "./FoodItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
      dispatch(clearCart());
  }

  return (
    <div>
      <div className="font-bold text-2xl">Cart Items - {cartItems.length}</div>
      <button className="bg-green-100 p-2 m-5" onClick={() => handleClearCart()}>Clear Cart</button>
      <div className="flex flex-wrap">
        {cartItems.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
