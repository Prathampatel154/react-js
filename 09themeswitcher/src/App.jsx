import { useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import { useEffect } from 'react'
import Themebutton from './components/themebutton'
import Card from './components/card'


function App() {
  const[themeMode,setthememode]=useState("light")
  const lighttheme=()=>{
    setthememode("light")
  }
  const darktheme=()=>{
    setthememode("dark")
  }
  // actual change in the theme 
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])

  
  return (
    <ThemeProvider value={{themeMode,lighttheme,darktheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
         <div className="w-full">
           <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                 {/* // theme button  */}
                 <Themebutton/>
           </div>

           <div className="w-full max-w-sm mx-auto">
                       {/* card */}
                  <Card/>
           </div>
         </div>
    </div>
    </ThemeProvider>
  )
}

export default App
