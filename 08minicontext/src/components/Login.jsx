import React,{useState,useContext} from "react";
import UserContext from "../context/UsercContext";

function Login(){
    const [username,setusername]=useState("")
    const [password,setpassword]=useState("")
// humnae login se data context m banaya and conetxt provider ko send kiya so we take setUser in contextprovider file 
    const {setuser}= useContext(UserContext)
    const handlesubmit=(e)=>{
        e.preventDefault()
        // takki data jau hai vo post ya koi aur url method se lost na hojaye isaliya e.preventdefault use kiya hai 
        setuser({username,password})
    }
    return(
        <div>
            <h2>Login</h2>
            <input type="text" 
            value={username}
            onChange={(e)=> setusername(e.target.value)}
            placeholder="username"/>
            {"   "}
            <input type="text" 
            value={password}
            onChange={(e)=> setpassword(e.target.value)}
            placeholder="password" />
            {" "}
            <button onClick={handlesubmit}>Submit</button>
        </div>
    )
}
export default Login