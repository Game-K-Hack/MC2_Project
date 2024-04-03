import { useEffect, useState } from 'react'
import './home.css'
import logo from './assets/theme.png'
// import DoubleCards from './Components/Core/DoubleCards'
import { Button, Typography } from '@mui/material'
import Constants from './Utils/constants'
import axios from 'axios'

function Home() {
  const [count, setCount] = useState()

  const [list, setList] = useState([])

  useEffect(() => {
    const getList = async () => {
      const response = await axios.get("http://127.0.0.1:5432/proxy?url=" + Constants.LIST_THEME[0]["url"]);
      // setList(response.data?.content);
      // console.log(list);
      console.log(Array.isArray(response.data.content));
      setList(response.data.content)
    }
    getList();
  }, [])

  useEffect(() => {
    console.log("LIST : ", list);
  }, [list])


  return (
    <>
      {/* <DoubleCards /> */}
      <Typography variant='h2' sx={{
        color: "white",
        fontSize: "4em"
      }}>Choisisser un thème</Typography>

      {list.length > 0 && list.map((item, index) => (
        <div key={index}>
          {item.id}
          {item.url}
        </div>
      ))}

      <div className="container">
        <Button variant="contained"
          startIcon={<img src={logo} width={25} />}
          sx={{
            backgroundColor: "#7289da",
            margin: 5
          }}>
          Theme
        </Button>
        <Button variant="contained"
          startIcon={<img src={logo} width={25} />}
          sx={{
            backgroundColor: "#7289da",
            margin: 5
          }}>
          Theme
        </Button>
        <Button variant="contained"
          startIcon={<img src={logo} width={25} />}
          sx={{
            backgroundColor: "#7289da",
            margin: 5
          }}>
          Theme
        </Button>
      </div>
    </>
  )
}

export default Home
