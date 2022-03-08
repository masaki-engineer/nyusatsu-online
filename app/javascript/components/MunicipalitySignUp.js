import React from 'react'
import styled from 'styled-components'

import UnderlineText from './UnderlineText'
import Form from './Form'

const Contents = styled.div`
background: #ffffff;
width: 1200px;
padding: 30px 0;
margin: 0 auto;
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

function MunicipalitySignUp() {
  const forms = [
    {
      title: '自治体名',
      required: true,
      type: 'text',
      placeholder: '自治体名を入力'
    }, {
      title: 'メールアドレス',
      required: true,
      type: 'text',
      placeholder: 'メールアドレスを入力'
    }, {
      title: 'パスワード',
      required: true,
      type: 'text',
      placeholder: 'パスワードを入力'
    }, {
      title: 'パスワード（確認）',
      required: true,
      type: 'text',
      placeholder: 'パスワードを入力'
    }, {
      title: '郵便番号',
      required: true,
      type: 'text',
      placeholder: '郵便番号を入力'
    }, {
      title: '都道府県',
      required: true,
      type: 'text',
      placeholder: '都道府県を入力'
    }, {
      title: '市町村',
      required: true,
      type: 'text',
      placeholder: '市町村を入力'
    }, {
      title: '住所',
      required: true,
      type: 'text',
      placeholder: '住所を入力'
    }, {
      title: '建物名',
      required: false,
      type: 'text',
      placeholder: '建物名を入力'
    }, {
      title: '電話番号',
      required: true,
      type: 'text',
      placeholder: '電話番号を入力'
    }, {
      title: '自治体種別',
      required: true,
      type: 'text',
      placeholder: '自治体種別を入力'
    }
  ]
  return (
    <Contents>
      <UnderlineText text={'自治体会員登録'} />
      {forms.map((val, key) => {
        return(
          <Form
            title={val.title}
            required={val.required}
            type={val.type}
            placeholder={val.placeholder}
          />
        )
      })}
      <SubmitButton>登録</SubmitButton>
    </Contents>
  )
}

export default MunicipalitySignUp