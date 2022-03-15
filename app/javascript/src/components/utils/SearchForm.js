import React from 'react'
import styled from 'styled-components'

import Button from '../utils/Button'
import categories from '../../lib/data/categories'
import prefectures from '../../lib/data/prefectures'

const Contents = styled.div`
width: calc(100% - 20px);
padding: 5px 0;
margin: 10px auto;
`

const Title = styled.div`
font-size: 15px;
margin-bottom: 5px;
`

const FormBox = styled.input`
font-size: 12px;
width: 100%;
height: 25px;
padding: 3px;
border-radius: 2px;
border: solid 1px #a9a9a9;
margin-bottom: 10px;
`

const SelectBox = styled.select`
font-size: 12px;
width: 100%;
height: 25px;
padding: 3px;
border-radius: 2px;
border: solid 1px #a9a9a9;
margin-bottom: 10px;
`

const DateForm = styled.div`
font-size: 12px;
width: 100%;
margin-bottom: 10px;
display: flex;
justify-content: space-between;
`

const Date = styled.input`
font-size: 12px;
width: 135px;
height: 25px;
padding: 3px;
border-radius: 2px;
border: solid 1px #a9a9a9;
margin-bottom: 10px;
`

function SearchForm() {
  return (
    <Contents>

      <Title>案件名</Title>
      <FormBox
        type="text"
      />

      <Title>入札カテゴリー</Title>
      <SelectBox>
        {categories.map((val, key) => {
          return (<option value={key}>{val}</option>)
        })}
      </SelectBox>

      <Title>都道府県</Title>
      <SelectBox>
        {prefectures.map((val, key) => {
          return (<option value={key}>{val}</option>)
        })}
      </SelectBox>

      <Title>入札時期</Title>
      <DateForm>
        <Date type="date"/>
        〜
        <Date type="date"/>
      </DateForm>

      <Title>登録時期</Title>
      <DateForm>
        <Date type="date"/>
        〜
        <Date type="date"/>
      </DateForm>

      <Button text={"検索"} background={"#0156a5"} hover={"#0674da"}/>

    </Contents>
  )
}

export default SearchForm