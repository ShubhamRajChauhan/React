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

    counter = counter + 1
    setCounter(counter)
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
