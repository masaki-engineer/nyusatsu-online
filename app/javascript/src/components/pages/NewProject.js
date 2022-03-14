import React from 'react'
import styled from 'styled-components'

import UnderlineText from '../../components/utils/UnderlineText'
import ErrorMessage from '../../components/utils/ErrorMessage'
import categories from '../../lib/data/categories'

const Contents = styled.div`
background: #ffffff;
width: 1200px;
padding: 30px 0;
margin: 0 auto;
`

const Row = styled.div`
margin: 30px 20px;
width: 1100px;
min-height: 50px;
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
width: 750px;
padding: 15px;
border-radius: 3px;
border: solid 1px #a9a9a9;
`

const FormBoxTextarea = styled.textarea`
font-size: 15px;
max-width: 750px;
min-width: 750px;
height: 300px;
padding: 15px;
border-radius: 3px;
border: solid 1px #a9a9a9;
`

const SelectBox = styled.select`
font-size: 15px;
width: 750px;
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

function NewProject() {
  return (
    <Contents>
      <UnderlineText text={'案件登録'} />

      <Row>
        <TitleBox>
          <Title>案件名</Title>
          <Required>必須</Required>
        </TitleBox>
        <FormBox
          type="text"
        />
      </Row>
      
      <Row>
        <TitleBox>
          <Title>カテゴリー</Title>
          <Required>必須</Required>
        </TitleBox>
        <SelectBox>
          {categories.map((val, key) => {
            return (<option value={key}>{val}</option>)
          })}
        </SelectBox>
      </Row>
      
      <Row>
        <TitleBox>
          <Title>案件概要</Title>
          <Required>必須</Required>
        </TitleBox>
        <FormBoxTextarea/>
      </Row>
      
      <Row>
        <TitleBox>
          <Title>入札参加資格</Title>
          <Required>必須</Required>
        </TitleBox>
        <FormBoxTextarea/>
      </Row>
      
      <Row>
        <TitleBox>
          <Title>入札日</Title>
          <Required>必須</Required>
        </TitleBox>
        <FormBox
          type="date"
        />
      </Row>
      
      <Row>
        <TitleBox>
          <Title>担当課</Title>
          <Required>必須</Required>
        </TitleBox>
        <FormBox
          type="text"
        />
      </Row>
      
      <Row>
        <TitleBox>
          <Title>担当者名</Title>
          <Required>必須</Required>
        </TitleBox>
        <FormBox
          type="text"
        />
      </Row>
      
      <Row>
        <TitleBox>
          <Title>担当者電話番号</Title>
          <Required>必須</Required>
        </TitleBox>
        <FormBox
          type="text"
        />
      </Row>
      
      <Row>
        <TitleBox>
          <Title>担当者メールアドレス</Title>
          <Required>必須</Required>
        </TitleBox>
        <FormBox
          type="text"
        />
      </Row>
      
      <Row>
        <TitleBox>
          <Title>参考URL</Title>
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

export default NewProject