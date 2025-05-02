import React from "react";
import UserContext from "./UsercContext";
// usercontextprovider naam ki method hai function nahi hai 
const UserContextProvider=({children})=>{
    const [user,setuser]=React.useState(null)
    return(
        <UserContext.Provider value={{user,setuser}}>
            {/* value jau likh ahai vo kuch nahi bas ek prop hai like a function  */}
            {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider
