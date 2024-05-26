import React from "react";
import { useEffect, useState } from "react";

function useRestaurantMenu(resId){

    const [resMenu , setResMenu] = useState(null)

    //Api fetchData()
    useEffect(() => {
        fetchMenuData();
    })

    async function fetchMenuData(){
        const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5476094&lng=77.4788014&restaurantId=${resId}&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER`)
        const json = await response.json();

        setResMenu(json?.data)
    }


    return resMenu;
}

export default useRestaurantMenu;