import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';




function MyApp() {
  return(
    <div>
      <h1>Custom App | chai</h1>
    </div>
  )
}



// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }



const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)


const anotherUser = "chai aur react"

//this is predefined , how to write
const reactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank' },
  'Click me to visit google',
  anotherUser //if you want to inject , you should inject here
);




createRoot(document.getElementById('root')).render(

  reactElement
  // <App />

);