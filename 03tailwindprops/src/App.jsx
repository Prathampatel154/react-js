import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myobj={
    username:"hitesh",
    age:21
  }
  let newarr=[1,2,3,45]
  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
    <Card channel="chaiaurcode" obj={myobj} arr={newarr} btntext="click me"/>
    <Card channel="Pratham Patel" btntext="click me"/>

    {/* <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img class="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/27573923/pexels-photo-27573923/free-photo-of-a-woman-in-a-white-dress-holding-a-bouquet-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width="384" height="512"/>
  <div class="pt-6 text-c space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
// </figure> */}

{/* <div className=" w-72 flex flex-col rounded-xl glass  min-h-72 mt-3 ">
          <div>
            <img
              src="https://media4.giphy.com/media/1gbqIc1fK8QgR3bHL7/giphy.gif?cid=790b7611a2f696d51a46ce892e420e77735707466a4abd3b&rid=giphy.gif&ct=g"
              alt="test"
              width="300"
              height="300"
              className="rounded-t-xl w-full"
            />
          </div>
          <div className="flex flex-col py-3 px-3 pb-7 -mt-4 bg-black rounded-b-xl ">
            <div className="flex justify-between">
              <h1 className="font-RubikBold ">Bored ape nft accidental</h1>
              <h1 className="font-bold font-RubikBold">Price</h1>
            </div>
            <div className="flex  justify-between font-mono">
              <p>#345</p>
              <p>0.01</p>
            </div>
          </div>
        </div> */}



    </>
  )
}

export default App
