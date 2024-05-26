import { fireEvent, render , screen } from "@testing-library/react";
import Header from "../components/Header";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


test("should login button load or not", () => {
    render(
        <BrowserRouter>
        <Provider store={appStore}>
    <Header />
    </Provider>
    </BrowserRouter>
    
)

    const loginButton = screen.getByRole("button", {name: "Login"});  // if we need to find that particular named button
    expect(loginButton).toBeInTheDocument();

})

// test("Should the cart items is here or not", () => {
//     render(<Header /> );

//     const cartItems = screen.getByText("Cart - (0 items)");

//     fireEvent.click(cartItems)
//     expect(cartItems).toBeInTheDocument();
// })


test("Should the Login or Logout Button Clicked", () => {
    render(<Header/>);

    const loginButton = screen.getByRole("button", {name: "Login"});

    fireEvent.click(loginButton)

    const logoutButton = screen.getByRole("button", {name: "Logout"})

    expect(logoutButton).toBeInTheDocument();
})