import React, { useState } from 'react'
import styled from 'styled-components'

import UnderlineText from './UnderlineText'

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
  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  const handleChange = (input) => e => {
    setForm({...form, [input] : e.target.value})
    console.log(form)
  }

  return (
    <Contents>
      <UnderlineText text={'企業ログイン'} />

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
          type="text"
          value={form.password}
          onChange={handleChange('password')}
        />
      </Row>

      <SubmitButton>ログイン</SubmitButton>
    </Contents>
  )
}

export default CompanySignIn