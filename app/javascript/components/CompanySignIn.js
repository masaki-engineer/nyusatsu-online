import React, { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom"
import styled from 'styled-components'
import Cookies from "js-cookie"

import { AuthContext } from "./App"
import { signIn } from "./src/lib/api/company"
import UnderlineText from './UnderlineText'
import ErrorMessage from './ErrorMessage'

const Contents = styled.div`
background: #ffffff;
width: 1200px;
padding: 30px 0;
margin: 0 auto;
`

const Row = styled.div`
margin: 30px 20px;
width: 1100px;
height: 50px;
display: flex;
`

const TitleBox = styled.div`
width: 350px;
display: flex;
margin: auto 0;
`

const Title = styled.p`
color: #000000;
font-weight: bold;
font-size: 18px;
margin-right: 10px;
`

const FormBox = styled.input`
font-size: 15px;
width: 100%;
padding: 15px;
border-radius: 3px;
border: solid 1px #a9a9a9;
`

const SubmitButton = styled.button`
background: #0156a5;
border: none;
color: #ffffff;
font-size: 16px;
width: 90px;
height: 40px;
border-radius: 5px;
padding: 8px;
margin: 0 555px;
transition: 0.5s;
:hover {
  background: #0674da;
}
`

function CompanySignIn() {
  const { setIsCompanySignedIn, setCurrentCompany } = useContext(AuthContext)
  const navigate = useNavigate()
  const [form, setForm] = useState({
    email: "",
    password: ""
  })
  const [errorMessageOpen, setErrorMessageOpen] = useState(false)

  const handleChange = (input) => e => {
    setForm({...form, [input] : e.target.value})
    console.log(form)
  }

  const handleSubmit = async () => {
    try {
      const res = await signIn(form)
      console.log(res)

      if (res.status === 200) {
        // アカウント作成と同時にログイン
        Cookies.set("_access_token", res.headers["access-token"])
        Cookies.set("_client", res.headers["client"])
        Cookies.set("_uid", res.headers["uid"])

        setIsCompanySignedIn(true)
        setCurrentCompany(res.data.data)

        navigate("/")

        console.log("Signed in successfully!")
      } else {
        console.log("Signed in failed!")
        setErrorMessageOpen(true)
      }
    } catch (err) {
      console.log(err)
      setErrorMessageOpen(true)
    }
  }

  return (
    <Contents>
      <UnderlineText text={'企業ログイン'} />

      <ErrorMessage // エラーが発生した場合はアラートを表示
        open={errorMessageOpen}
        message="再度正しい情報を入力しログインしてください。"
      />

      <Row>
        <TitleBox>
          <Title>メールアドレス</Title>
        </TitleBox>
        <FormBox
          type="text"
          value={form.email}
          onChange={handleChange('email')}
        />
      </Row>
      
      <Row>
        <TitleBox>
          <Title>パスワード</Title>
        </TitleBox>
        <FormBox
          type="password"
          value={form.password}
          onChange={handleChange('password')}
        />
      </Row>

      <SubmitButton onClick={handleSubmit}>ログイン</SubmitButton>
    </Contents>
  )
}

export default CompanySignIn