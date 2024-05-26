import React from "react";
import ItemList from "./ItemList";
import { useDispatch, useSelector } from "react-redux";
import { clearItem } from "../utils/cartSlice";





function Cart(){

    
    const cartItems = useSelector((store) => store.cart.items)

    //dispatch an action which action is performed
    const dispatch = useDispatch()
    function clearCartItem(){
        dispatch(clearItem()) 
    }

    return(
        <div className="text-center p-2 m-2">
            <h1 className="text-center m-2 p-2 font-bold text-2xl">Cart</h1>
            <div className="w-6/12 m-auto">
            <button  className="p-2  bg-black text-white rounded-lg" onClick={clearCartItem}>Clear cart</button>
            {cartItems.length === 0 && <h1 className="text-3xl font-bold p-6 italic">Cart is Empty. Please Select Food From Restaurant Menu !</h1>}
            {/* <button className="p-2  bg-black text-white rounded-lg" onClick={clearCartItem}>Clear Cart</button> */}
            {/* <button className="p-2  bg-black text-white rounded-lg" onClick={() => removeCartItem}>Remove Item</button> */}
            <ItemList items={cartItems}></ItemList>
            </div>
        </div>
    )
}

export default Cart;