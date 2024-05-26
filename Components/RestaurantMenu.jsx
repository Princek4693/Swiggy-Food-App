import React, { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/CustomHook/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


function RestaurantMenu() {
  

  const { resId } = useParams();

  const dummyData = "Dummy"

  const resMenu = useRestaurantMenu(resId); 

  const [showIndex , setShowIndex] = useState(null)
    
  if (resMenu === null) return <Shimmer></Shimmer>;
  const {name , cuisines , costForTwoMessage , avgRatingString} = resMenu?.cards[2]?.card?.card?.info;

  const { itemCards } = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  // console.log(itemCards)
  // console.log(resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

  //all categories of restaurant
  const categories = resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter( cat => cat?.card?.card?.["@type"]
    ===  
"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" && "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
  )


  return (
    <div className="menu text-center">
      <h1 className="text-3xl  font-bold p-4">{name}</h1>
      <p className="text-lg font-semibold">
        {cuisines} - {costForTwoMessage}
      </p>
      {
        categories.map((category , index) => 
          //controlled component remove power from child and give it to parent
          (<RestaurantCategory 
            key={category?.card?.card?.title} 
            data={category?.card?.card}
            showItems = {index === showIndex ? true : false}
            // it will expand the accordian index wise when we click on it
            setShowIndex={() => setShowIndex(index)}
            dummy = {dummyData}
            >

            </RestaurantCategory>))
      }
    </div>
  );
}

export default RestaurantMenu;