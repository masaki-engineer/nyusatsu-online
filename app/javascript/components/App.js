import React, { useState, useEffect, createContext } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
// import './App.css'

import Header from './Header'
import Footer from './Footer'
import TopPage from './TopPage'
import MunicipalitySignUp from './MunicipalitySignUp'
import MunicipalitySignIn from './MunicipalitySignIn'
import CompanySignUp from './CompanySignUp'
import { getCurrentMunicipality } from "./src/lib/api/municipality"
import { getCurrentCompany } from "./src/lib/api/company"

export const AuthContext = createContext()

function App() {
  const [loading, setLoading] = useState(true)
  const [isMunicipalitySignedIn, setIsMunicipalitySignedIn] = useState(false)
  const [currentMunicipality, setCurrentMunicipality] = useState()
  const [isCompanySignedIn, setIsCompanySignedIn] = useState(false)
  const [currentCompany, setCurrentCompany] = useState()

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

  // 認証済みの企業ユーザーがいるかどうかチェック
  // 確認できた場合はそのユーザーの情報を取得
  const handleGetCurrentCompany = async () => {
    try {
      const res = await getCurrentCompany()

      if (res?.data.isLogin === true) {
        setIsCompanySignedIn(true)
        setCurrentCompany(res?.data.data)

        console.log(res?.data.data)
      } else {
        console.log("No current company")
      }
    } catch (err) {
      console.log(err)
    }

    setLoading(false)
  }

  useEffect(() => {
    handleGetCurrentCompany()
  }, [setCurrentCompany])

  return (
    <>
      <AuthContext.Provider value={{
        loading, setLoading,
        isMunicipalitySignedIn, setIsMunicipalitySignedIn,
        currentMunicipality, setCurrentMunicipality,
        isCompanySignedIn, setIsCompanySignedIn,
        currentCompany, setCurrentCompany
        }}>
        <Header/>
        <Routes>
          <Route exact path="/" element={<TopPage />} />
          <Route exact path="/municipality/sign_up" element={<MunicipalitySignUp />} />
          <Route exact path="/municipality/sign_in" element={<MunicipalitySignIn />} />
          <Route exact path="/company/sign_up" element={<CompanySignUp />} />
        </Routes>
        <Footer/>
      </AuthContext.Provider>
    </>
  )
}

export default App