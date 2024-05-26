import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"

const appStore = configureStore({
    //This reducer is big reducer of app which contains small reducer from slice(each slice have own reducer)
    reducer: {
        //one slice
        cart : cartReducer,
    } 
})

export default appStore;