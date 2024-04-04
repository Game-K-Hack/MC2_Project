import { useEffect, useState } from 'react'
import './home.css'
import DoubleCards from './Components/Core/DoubleCards'
import { Button, Typography } from '@mui/material'
import Constants from './Utils/constants'
import axios from 'axios'
import usePickedList from './Hooks/usePickedList'
import target from './assets/target40.png'

function Home() {
  const [url, setUrl] = useState("")

  const [list, setList] = useState([])
  const [openScore, setOpenScore] = useState(false);

  const picked = usePickedList(list)

  useEffect(() => {
    const getList = async () => {
      const response = await axios.get("http://127.0.0.1:5432/proxy?url=" + url);
      setList(response.data.content)
    }
    if (url !== "") {
      getList();
    }
  }, [url])

  const handleClick = (theme, id) => {
    document.getElementById(id).style.transform = "translateZ(-25px) rotateX(-720deg)";
    
    setTimeout(() => { // reset animation after 1.1s
      document.getElementById(id).style.transition = "transform 0s";
      document.getElementById(id).style.transform = "translateZ(-25px) rotateX(0deg)";
      setTimeout(() => {document.getElementById(id).style.transition = "transform 1s ease .1s";}, 50);
    }, 1100);

    setTimeout(() => {setUrl(theme)}, 30);
  }

  const handleStop = () => {
    setUrl("");
    setOpenScore(true);
  }

  if (url !== "" && picked.length === 2) {
    return <DoubleCards picked={picked} setList={setList} list={list} onStop={handleStop}/>
  }

  if (openScore) {
    return <>FIN</>
  }


  return (
    <>
      <Typography variant='h2' sx={{
        color: "white",
        fontSize: "4em", 
        marginTop: "50px",
        fontFamily: "LeoRoundedBold"
      }}>choisisser un theme</Typography>

      <div className="container">

        {Constants.LIST_THEME.map((item, index) => {
          return (
            <Button id={index} key={index}
              variant="contained"
              startIcon={<img src={item.icon} width={25} />}
              sx={{
                backgroundColor: "#7289da",
                margin: 4,
                transition: "transform 1s ease .1s",
                '&:hover': {
                  cursor: "url(" + target + ") 20 20, auto"
                }
              }} onClick={() => {
                handleClick(item.url, index)
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
