import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from "react-router-dom"
import styled from 'styled-components'

import Button from '../utils/Button'
import categories from '../../lib/data/categories'
import prefectures from '../../lib/data/prefectures'
import { formToQuery, queryToForm } from '../../lib/function/search'

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
  const query = useLocation().search
  const path = useLocation().pathname
  const [form, setForm] = useState({
    name: "",
    category_id: "0",
    prefecture_id: "0",
    bid_date_from: "",
    bid_date_to: "",
    create_date_from: "",
    create_date_to: ""
  })

  useEffect(() => {
    setForm( queryToForm(query) )
  }, [query])

  const handleChange = (input) => e => {
    setForm({...form, [input] : e.target.value})
    console.log(form)
  }

  const navigate = useNavigate()
  const handleSubmit = () => {
    navigate(path + formToQuery(form))
  }

  return (
    <Contents>

      <Title>案件名</Title>
      <FormBox
        type="text"
        value={form.name}
        onChange={handleChange('name')}
      />

      <Title>入札カテゴリー</Title>
      <SelectBox
        value={form.category_id}
        onChange={handleChange('category_id')}
      >
        {categories.map((val, key) => {
          return (<option value={key}>{val}</option>)
        })}
      </SelectBox>

      {(path.match(/search/)) ? (
        <>
          <Title>都道府県</Title>
          <SelectBox
            value={form.prefecture_id}
            onChange={handleChange('prefecture_id')}
          >
            {prefectures.map((val, key) => {
              return (<option value={key}>{val}</option>)
            })}
          </SelectBox>
        </>
      ) : (
        <></>
      )}

      <Title>入札時期</Title>
      <DateForm>
        <Date
        type="date"
        value={form.bid_date_from}
        onChange={handleChange('bid_date_from')}
        />
        〜
        <Date
        type="date"
        value={form.bid_date_to}
        onChange={handleChange('bid_date_to')}
        />
      </DateForm>

      <Title>登録時期</Title>
      <DateForm>
        <Date
        type="date"
        value={form.create_date_from}
        onChange={handleChange('create_date_from')}
        />
        〜
        <Date
        type="date"
        value={form.create_date_to}
        onChange={handleChange('create_date_to')}
        />
      </DateForm>

      <div onClick={handleSubmit}>
        <Button text={"検索"} background={"#0156a5"} hover={"#0674da"}/>
      </div>

    </Contents>
  )
}

export default SearchForm