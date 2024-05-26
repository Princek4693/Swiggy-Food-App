import React, { lazy , Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body"
import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";
import About from "./components/About";
// import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


// import Grocery from "./ComponentsForGrocery/Grocery";


function App(){

    //we can update name 
    const [userName , setUserName] = useState()

    //we will update anywhere 
    

    useEffect(() => {
        const data = {
            name : "Prince",
        }
        setUserName(data.name)
    },[])

    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedUser : userName , setUserName}}>
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
        </UserContext.Provider>
        </Provider>
    )
}

//Lazy loading => initially it is not re-load first when it requested the there code will comes
const Grocery = lazy(() => import("./ComponentsForGrocery/Grocery"))

const Contact = lazy(() => import("./components/Contact"))


const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <App></App>,
        children : [
            {
                path : "/",
                element : <Body></Body>,
            },
            {
                path : "/about",
                element : <About></About>,
            },
            {
                path : "/contact",
                element : <Suspense fallback={<Shimmer></Shimmer>}><Contact></Contact></Suspense>,
            },
            {
                path: "/grocery",
                element : <Suspense fallback= {<Shimmer></Shimmer>}><Grocery></Grocery></Suspense>
            },
            {
                // :resId =>  This is dynamic it can be changed according to restaurantId changed
                path : "/restaurants/:resId",
                element : <RestaurantMenu></RestaurantMenu>
            },
            {
                path : "/cart",
                element : <Cart></Cart>
            }
        ],
        errorElement : <Error></Error>
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}></RouterProvider>);