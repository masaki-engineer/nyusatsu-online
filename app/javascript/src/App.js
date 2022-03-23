import React, { useState, useEffect, createContext } from 'react'
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import styled from 'styled-components'

import Header from './components/layouts/Header'
import Footer from './components/layouts/Footer'
import TopPage from './components/pages/TopPage'
import MunicipalitySignUp from './components/pages/MunicipalitySignUp'
import MunicipalitySignIn from './components/pages/MunicipalitySignIn'
import CompanySignUp from './components/pages/CompanySignUp'
import CompanySignIn from './components/pages/CompanySignIn'
import NewProject from './components/pages/NewProject'
import { getCurrentMunicipality } from "./lib/api/municipality"
import { getCurrentCompany } from "./lib/api/company"
import MunicipalityMyPage from './components/pages/MunicipalityMyPage'
import CompanyMyPage from './components/pages/CompanyMyPage'
import SearchProjects from './components/pages/SearchProjects'
import MunicipalityShow from './components/pages/MunicipalityShow'
import CompanyShow from './components/pages/CompanyShow'
import ShowProject from './components/pages/ShowProject'
import NewBid from './components/pages/NewBid'
import NewSuccess from './components/pages/NewSuccess'

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

  // 自治体が認証済みかどうかでルーティングを決定
  // 未認証だった場合は「/municipality/sign_in」ページに促す
  const MunicipalityPrivate = ({ children }) => {
    if (!loading) {
      if (isMunicipalitySignedIn) {
        return children
      } else {
        return <Navigate to="/municipality/sign_in" />
      }
    } else {
      return <></>
    }
  }

  // 自治体が認証済みかどうかでルーティングを決定
  // 未認証だった場合は「/company/sign_in」ページに促す
  const CompanyPrivate = ({ children }) => {
    if (!loading) {
      if (isCompanySignedIn) {
        return children
      } else {
        return <Navigate to="/company/sign_in" />
      }
    } else {
      return <></>
    }
  }

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
          <Route exact path="/company/sign_in" element={<CompanySignIn />} />
          <Route exact path="/projects/search" element={<SearchProjects />} />
          <Route exact path="/municipality/:id" element={<MunicipalityShow />} />
          <Route exact path="/company/:id" element={<CompanyShow />} />
          <Route exact path="/projects/:id" element={<ShowProject />} />

          <Route exact path="/municipality/my_page" element={
            <MunicipalityPrivate>
              <MunicipalityMyPage />
            </MunicipalityPrivate>
          } />
          <Route exact path="/projects/new" element={
            <MunicipalityPrivate>
              <NewProject />
            </MunicipalityPrivate>
          } />
          <Route exact path="/projects/:project_id/successes/new" element={
            <MunicipalityPrivate>
              <NewSuccess />
            </MunicipalityPrivate>
          } />

          <Route exact path="/company/my_page" element={
            <CompanyPrivate>
              <CompanyMyPage />
            </CompanyPrivate>
          } />
          <Route exact path="/projects/:project_id/bids/new" element={
            <CompanyPrivate>
              <NewBid />
            </CompanyPrivate>
          } />
        </Routes>
        <Footer/>
      </AuthContext.Provider>
    </>
  )
}

export default App