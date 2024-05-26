// import React ,  { Component } from "react";
// import User from "./User";
// import UserClass from "./UserClass";
// import  Profile  from "./Profile";
// import ProfileFunctionalComponent from "./ProfileFunctionalComponent";
// import UserContext from "../utils/UserContext";



// class About extends Component{
//     constructor(props){
//         super(props)

        
        
//     }

//     componentDidMount(){
//         // console.log("Parent component Did Mount")
//     }

//     render(){

       
//         return (
            
//             <div>
//              <h1>About Us</h1>
//              <div>
//                 <UserContext.Consumer>
//                     {({loggedUser}) => {
//                         return <h1>{loggedUser}</h1>
//                     }}
//                 </UserContext.Consumer>
//              </div>
//               {/* <User></User> */}
//               <UserClass name = "Prince"></UserClass>
//               {/* <Profile></Profile> */}
//               <ProfileFunctionalComponent></ProfileFunctionalComponent>
              
//              </div>
//         )
//     }
// }


// // function About(props){
// //     return (
// //         <div>
// //             <h1>About</h1>
// //             {/* <User></User> */}
// //             <UserClass name = "Prince"></UserClass>
// //         </div>
// //     )
// // }

// export default About;


import React from 'react';

const About = () => {
    return (
        <div className="bg-gray-100 text-gray-800 min-h-screen">
            <div className="max-w-4xl mx-auto p-6">
                <h1 className="text-3xl font-bold text-center text-red-600 mb-8">About Us</h1>

                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                    <h2 className="text-2xl font-semibold text-red-600 mb-4">Our Mission</h2>
                    <p className="mb-4">
                        At FoodOrder App, our mission is to bring delicious food from your favorite local restaurants directly to your doorstep. We are committed to providing fast, convenient, and reliable delivery service, ensuring that you can enjoy your meals without leaving the comfort of your home.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                    <h2 className="text-2xl font-semibold text-red-600 mb-4">Our Story</h2>
                    <p className="mb-4">
                        Founded in 2020, MyCompany App started with the simple idea of connecting hungry customers with their favorite restaurants. Since then, we have grown into a leading food delivery service, partnering with hundreds of restaurants in cities across the country. Our team is dedicated to continually improving our service and expanding our reach to serve more customers.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                    <h2 className="text-2xl font-semibold text-red-600 mb-4">What We Offer</h2>
                    <ul className="list-disc pl-6 mb-4">
                        <li className="mb-2">A wide variety of restaurants to choose from, ranging from local favorites to popular chains.</li>
                        <li className="mb-2">Real-time order tracking so you know exactly when your food will arrive.</li>
                        <li className="mb-2">Easy-to-use app interface for placing and managing orders.</li>
                        <li className="mb-2">Dedicated customer support to assist with any questions or issues.</li>
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                    <h2 className="text-2xl font-semibold text-red-600 mb-4">Our Team</h2>
                    <p className="mb-4">
                        Our team is composed of passionate food lovers and tech enthusiasts who work tirelessly to ensure that your food delivery experience is seamless and enjoyable. From our delivery drivers to our customer support agents, everyone at FoodOrder App is dedicated to serving you with excellence.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-red-600 mb-4">Contact Us</h2>
                    <p className="mb-4">
                        If you have any questions, feedback, or simply want to say hello, feel free to reach out to us. You can contact us through our <a href="/contact" className="text-blue-600 hover:underline">Contact Us</a> page. We look forward to hearing from you!
                    </p>
                </div>

                <footer className="text-center py-4 bg-gray-800 text-white mt-8">
                    <p>&copy; 2024 MyCompany App. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default About;
