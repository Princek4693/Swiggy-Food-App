import React, { useContext } from "react";
import {CDN_URL} from "../utils/constant";
import UserContext from "../utils/UserContext";


function RestaurantCard(props){ 

    //this is Destructuring  
    const {resData} = props;
  
    const {loggedUser} = useContext(UserContext)
  
  
    //Destructuring we can pass data like this also 
    const {name , cuisines , avgRating , costForTwo , cloudinaryImageId , areaName } = resData?.info
    const {deliveryTime} = resData?.info?.sla
  
  
    // console.log(props)   => It is Just an Javascript Object 
    return (
      <div className="res-card  p-3 rounded-lg h-full max-h-[360px]  w-[240px]  bg-gray-100 hover:bg-gray-200 leading-3">
        <img 
        className="res-logo h-[150px] size-full rounded-lg"
        alt="res-logo"
        src={
            CDN_URL  + cloudinaryImageId
        } />
        <h3 className="font-bold mt-2 text-lg">{name}</h3>
        <h4 className="text-sm">{cuisines.join(", ")}</h4>
        <h4 className="text-sm">{areaName}</h4>
        <div className="flex gap-7">
        <h4 className="text-sm">⭐{avgRating}</h4>
        <h4 className="text-sm">{costForTwo}</h4>
        </div>
        <h4 className="text-sm">{deliveryTime} Minutes</h4>
        <h4 className="text-sm font-bold">User: {loggedUser}</h4>
      </div>
    )
  }


//Higher order Component
export function withPromotedlabel(RestaurantCard){
  return (props) => {
    return (
      <div>
        <RestaurantCard {...props}></RestaurantCard>
      </div>
    )
  }
}

export default RestaurantCard