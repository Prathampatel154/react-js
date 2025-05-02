import React,{useContext} from "react";
import UserContext from "../context/UsercContext";

function Profile(){
    // yaha hum jua bhi store kiya than n conytetxprovider m vo retrive kr raha hai ya use kr raha hai 
    const {user}=useContext(UserContext)
    
    if(!user) return<div>Please Login</div>

    return <div>Welcome {user.username}</div>
}
export default Profile