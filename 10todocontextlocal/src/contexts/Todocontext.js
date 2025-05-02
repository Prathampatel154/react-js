import { createContext,useContext } from "react";

export const Todocontext =createContext({
    todos:[
        {
            id:1,
            todo:" Todo msg ",
            completed :false,
        }
    ],
    // context api m hum jaha contetx create karta hai waha hum jab function deta hai tab waha hum bas function define karta hai uska defination hum app.jsx m likhta hai we only defin ethe function as shown below
    addtodo: (todo)=>{},
    updatetodo: (id,todo)=>{},
    deletetodo: (id)=>{},
    togglecomplete: (id)=>{}
})

export const Usetodo =()=>{
    return useContext(Todocontext)
}

export const Todoprovider =Todocontext.Provider
