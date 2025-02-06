import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  //let counter = 15
  //hooks
  let [counter, setCounter] = useState(15)


  
  const addValue = () => {
    // console.log("clicked", Math.random()) //working
    // console.log("clicked", counter) //working
    // counter = counter + 1 //not working

    
    // setCounter(counter + 1)
    // Interview : repeat karenge to kya print hoga 
    // setCounter(counter + 1)
    // setCounter(counter + 1)
    // setCounter(counter + 1) // kitne baar v repeat kro , ek baar hi update hoga , kyun ki batch ke form mai jata hai, aur jitne duplicates hai unko ek hi batch samajhta hai
    //but if we want to update like this
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1) //ab ye bunch of packet nhi hai , hum previous state le rhe hai
  }



  const removeValue = () => {
    setCounter(counter - 1)
  }




  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value</button>

      <br />

      <button
      onClick={removeValue}
      >Remove value</button>
    </>
  )
}

export default App
