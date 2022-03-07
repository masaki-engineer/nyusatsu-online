import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
// import './App.css'

import Header from './Header'
import Footer from './Footer'
import TopPage from './TopPage'
import MunicipalitySignUp from './MunicipalitySignUp'

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route exact path="/" element={<TopPage />} />
        <Route exact path="/municipality/sign_up" element={<MunicipalitySignUp />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App