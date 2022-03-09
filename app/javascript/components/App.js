import React, { useState, useEffect, createContext } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
// import './App.css'

import Header from './Header'
import Footer from './Footer'
import TopPage from './TopPage'
import MunicipalitySignUp from './MunicipalitySignUp'
import { getCurrentMunicipality } from "./src/lib/api/municipality"

export const AuthContext = createContext()

function App() {
  const [loading, setLoading] = useState(true)
  const [isMunicipalitySignedIn, setIsMunicipalitySignedIn] = useState(false)
  const [currentMunicipality, setCurrentMunicipality] = useState()

  // 認証済みの自治体ユーザーがいるかどうかチェック
  // 確認できた場合はそのユーザーの情報を取得
  const handleGetCurrentMunicipality = async () => {
    try {
      const res = await getCurrentMunicipality()

      if (res?.data.isLogin === true) {
        setIsMunicipalitySignedIn(true)
        setCurrentMunicipality(res?.data.data)

        console.log(res?.data.data)
      } else {
        console.log("No current municipality")
      }
    } catch (err) {
      console.log(err)
    }

    setLoading(false)
  }

  useEffect(() => {
    handleGetCurrentMunicipality()
  }, [setCurrentMunicipality])

  return (
    <>
      <AuthContext.Provider value={{ loading, setLoading, isMunicipalitySignedIn, setIsMunicipalitySignedIn, currentMunicipality, setCurrentMunicipality}}>
        <Header/>
        <Routes>
          <Route exact path="/" element={<TopPage />} />
          <Route exact path="/municipality/sign_up" element={<MunicipalitySignUp />} />
        </Routes>
        <Footer/>
      </AuthContext.Provider>
    </>
  )
}

export default App