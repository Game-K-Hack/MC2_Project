import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './Components/Core/Footer.jsx'
import ButtonAppBar from './Components/Core/Header.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Footer>
        <ButtonAppBar>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </ButtonAppBar>
      </Footer>
    </BrowserRouter>
  </React.StrictMode>,
)
