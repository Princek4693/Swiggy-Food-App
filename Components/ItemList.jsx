import React from "react";
import { CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";


function ItemList({items , dummy1}){
    // console.log(dummy1);


    const dispatch = useDispatch();
    function handlerAddItem(item){
        dispatch(addItem(item))
    }


    return (
        <ul>
       <div>
        {items.map((item)=>{
            return <div key={item?.card?.info?.id} className="p-3 m-3 border border-gray-200 border-b-2 text-left flex justify-between">
                    <div className="w-full">
                <div className="flex flex-col py-2">
                    <span className="font-semibold">{item?.card?.info?.name}</span>
                    <span className="font-medium">₹ {item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}</span>
                </div>
                <p className="text-xs">{item?.card?.info?.description}</p>
                </div>
                <div className=" w-3/6 p-5 cursor-pointer">
                    <div className="absolute">
                        <button className="px-6 py-1 font-bold mx-6 rounded-lg cursor-pointer bg-black text-green-500"
                        onClick={() => handlerAddItem(item)}
                        >Add +</button>
                    </div>
                    <img src={CDN_URL + item?.card?.info?.imageId} className="rounded-lg" alt=""/>
                    </div>
                 </div>
        })}
       </div>
       </ul>
    )
}

export default ItemList;