import React, { createContext } from "react";

const UserContext = createContext({
    //It is just a global obj where the data is kept
    loggedUser : "Default User",
})

export default UserContext;