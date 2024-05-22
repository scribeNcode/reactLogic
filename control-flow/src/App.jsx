import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {numPrinter, findLargest} from '../Components/assignment'

function App() {
  console.log(numPrinter())
  console.log(findLargest(54, 65, 43))
  return (
    <>
      <div>App</div>
      
    </>
  )
}

export default App
