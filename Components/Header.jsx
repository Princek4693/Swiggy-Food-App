import React, { useContext } from "react";
import {LOGO_URL} from "../utils/constant"
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/CustomHook/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";



function Header(){

    const [btnName , setBtnName] = useState("Login")
   
    // onlineStatus if internet is on or off 
    const onlineStatus = useOnlineStatus();

    const {loggedUser} = useContext(UserContext);


    //Selector => HOOK => It gives access to the store => it identify which portion of store we read 
    const cartItems = useSelector((store) => store.cart.items)
    // console.log(cartItems)


    function btnChangeHandler(){
      btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")

      // if(btnName === "Login"){
      //   setBtnName("Logout")
      // }
      // else{
      //   setBtnName("Login")
      // }
    }
    
    // console.log("header rendered")

    return (
    <div className="flex justify-between  bg-green-100 shadow-lx p-4">
    <div id="logo-container">
      <img className="w-28" src={LOGO_URL} ></img>
    </div>
  <div className="nav-items flex items-center">
    <ul className="flex m-5 gap-7">
      <li>OnlineStatus : {onlineStatus ? "🟢" : "🔴"}</li>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/cart" className="font-bold text-xl">Cart - ({cartItems.length} items)</Link></li>
      <li><Link to="/grocery">Grocery</Link></li>
      <button onClick={btnChangeHandler} className="font-bold p-2 m-2">{btnName}</button>
    <li><Link to="/grocery" className="font-bold">{loggedUser}</Link></li>

    </ul>
  </div>
  </div>
  )
}

export default Header