import { useState } from 'react'
import './App.css'
import DoubleCards from './Components/Core/DoubleCards'

function Home() {
  const [count, setCount] = useState()

  
  return (
    <>
      <DoubleCards />
    </>
  )
}

export default Home
