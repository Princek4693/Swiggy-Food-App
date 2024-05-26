import React, { useState } from "react";
import ItemList from "./ItemList";

function RestaurantCategory({data , showItems , setShowIndex, dummy}){
    
    function handlerClick(){

        //Lifting state up
        setShowIndex();
    }


    return (
        <div>
            {/* {Accordian Header} */}
            <div className="bg-gray-50 p-6 shadow-xl w-6/12 mx-auto my-4 rounded-md">
                <div className="flex justify-between" onClick={handlerClick}>
                <span className="font-bold cursor-pointer">{data.title} ({data?.itemCards.length})</span>
                <span className="cursor-pointer" onClick={handlerClick}>↓</span>
                </div>
                {showItems && <ItemList  items = {data.itemCards} dummy1={dummy}></ItemList>}
            </div>
            {/* {Accordian Body} */}
        </div>
    )
}

export default RestaurantCategory;