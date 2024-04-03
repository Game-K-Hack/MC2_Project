import { useEffect, useState } from 'react'
import './home.css'
import logo from './assets/theme.png'
import DoubleCards from './Components/Core/DoubleCards'
import { Button, Typography } from '@mui/material'
import Constants from './Utils/constants'
import axios from 'axios'
import usePickedList from './Hooks/usePickedList'

function Home() {
  const [count, setCount] = useState()

  const [url, setUrl] = useState("")

  const [list, setList] = useState([])

  const picked = usePickedList(list)

  useEffect(() => {
    const getList = async () => {
      const response = await axios.get("http://127.0.0.1:5432/proxy?url=" + url);
      console.log("OKKKKKKK!")
      setList(response.data.content)
    }
    if (url != "") {
      getList();
    }
  }, [url])

  const handleClick = (theme) => setUrl(theme)

  return (
    <>
      <DoubleCards picked={picked}/>

      <Typography variant='h2' sx={{
        color: "white",
        fontSize: "4em"
      }}>Choisisser un thème</Typography>

      <div className="container">

        {Constants.LIST_THEME.map((item, index) => {
          return (
            <Button key={index} variant="contained"
              startIcon={<img src={item.icon} width={25} />}
              sx={{
                backgroundColor: "#7289da",
                margin: 5
              }} onClick={() => {
                handleClick(item.url)
              }}>
              {item.name} <i><b style={{ marginLeft: 15 }}>{item.length}</b></i>
            </Button>
          )
        })}
      </div>
    </>
  )
}

export default Home
