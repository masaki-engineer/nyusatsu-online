import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
// import './App.css'

import Header from './Header'
import Footer from './Footer'
import TopPage from './TopPage'

function App() {
  return (
    <>
      <Header/>
      <TopPage/>
      <Footer/>
    </>
  )
}

export default App