import React from 'react'
import styled from 'styled-components'

import UnderlineText from './UnderlineText'
import prefectures from './src/data/prefectures'

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

const Required = styled.p`
background: #ff0000;
color: #ffffff;
font-size: 11px;
text-align: center;
width: 40px;
height: 20px;
border-radius: 3px;
padding: 2px;
`

const Optional = styled.p`
background: #a9a9a9;
color: #ffffff;
font-size: 11px;
text-align: center;
width: 40px;
height: 20px;
border-radius: 3px;
padding: 2px;
`

const FormBox = styled.input`
font-size: 15px;
width: 100%;
padding: 15px;
border-radius: 3px;
border: solid 1px #a9a9a9;
`

const SelectBox = styled.select`
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

function CompanySignUp() {
  return (
    <Contents>
      <UnderlineText text={'企業会員登録'} />

      <Row>
        <TitleBox>
          <Title>企業名</Title>
          <Required>必須</Required>
        </TitleBox>
        <FormBox
          type="text"
        />
      </Row>

      <Row>
        <TitleBox>
          <Title>メールアドレス</Title>
          <Required>必須</Required>
        </TitleBox>
        <FormBox
          type="text"
        />
      </Row>

      <Row>
        <TitleBox>
          <Title>パスワード</Title>
          <Required>必須</Required>
        </TitleBox>
        <FormBox
          type="text"
        />
      </Row>

      <Row>
        <TitleBox>
          <Title>パスワード（確認）</Title>
          <Required>必須</Required>
        </TitleBox>
        <FormBox
          type="text"
        />
      </Row>

      <Row>
        <TitleBox>
          <Title>郵便番号</Title>
          <Required>必須</Required>
        </TitleBox>
        <FormBox
          type="text"
        />
      </Row>

      <Row>
        <TitleBox>
          <Title>都道府県</Title>
          <Required>必須</Required>
        </TitleBox>
        <SelectBox
        >
          {prefectures.map((val, key) => {
            return (<option value={key}>{val}</option>)
          })}
        </SelectBox>
      </Row>

      <Row>
        <TitleBox>
          <Title>市町村</Title>
          <Required>必須</Required>
        </TitleBox>
        <FormBox
          type="text"
        />
      </Row>

      <Row>
        <TitleBox>
          <Title>住所</Title>
          <Required>必須</Required>
        </TitleBox>
        <FormBox
          type="text"
        />
      </Row>

      <Row>
        <TitleBox>
          <Title>建物名</Title>
          <Optional>任意</Optional>
        </TitleBox>
        <FormBox
          type="text"
        />
      </Row>

      <Row>
        <TitleBox>
          <Title>電話番号</Title>
          <Required>必須</Required>
        </TitleBox>
        <FormBox
          type="text"
        />
      </Row>

      <Row>
        <TitleBox>
          <Title>ホームページURL</Title>
          <Optional>任意</Optional>
        </TitleBox>
        <FormBox
          type="text"
        />
      </Row>

      <SubmitButton>登録</SubmitButton>
    </Contents>
  )
}

export default CompanySignUp