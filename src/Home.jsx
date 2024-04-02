import { useEffect, useState } from 'react'
import './App.css'
import DoubleCards from './Components/Core/DoubleCards'
// import usePickedList from './Hooks/usePickedList';
import axios from 'axios';

function Home() {
  // const [count, setCount] = useState();
  // const picked = usePickedList(list);

  useEffect(() => {
    const getList = async () => {
      const request = await axios.get("https://tiermaker.com/api/?type=templates-v2&id=top-bire-80-industriel-and-artisanal-1081944");
      console.log(request);
    }

    getList()
  }, [])
  
  return (
    <>
      <DoubleCards/>
    </>
  )
}

export default Home
