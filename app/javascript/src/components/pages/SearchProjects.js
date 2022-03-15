import React from 'react'
import styled from 'styled-components'

import Button from '../utils/Button'
import UnderlineText from '../utils/UnderlineText'
import Project from '../../components/utils/Project'
import categories from '../../lib/data/categories'
import prefectures from '../../lib/data/prefectures'

const AllContents = styled.div`
background: #ffffff;
width: 1200px;
margin: 0 auto;
padding: 10px 0;
display: flex;
`

const SideBar = styled.div`
width: 300px;
border-right: solid 1px gray;
`

const Content = styled.div`
width: 900px;
`

const SearchForm = styled.div`
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
width: 120px;
height: 25px;
padding: 3px;
border-radius: 2px;
border: solid 1px #a9a9a9;
margin-bottom: 10px;
`

const Projects = styled.div`
width: 860px;
margin: 20px;
`

function SearchProjects() {
  const projects = []
  return (
    <AllContents>
      <SideBar>
        <UnderlineText text={'案件を検索する'} />
        <SearchForm>

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
            <Date type={"text"} placeholder={"yyyy/mm/dd"}/>
            〜
            <Date type={"text"} placeholder={"yyyy/mm/dd"}/>
          </DateForm>

          <Title>登録時期</Title>
          <DateForm>
            <Date type={"text"} placeholder={"yyyy/mm/dd"}/>
            〜
            <Date type={"text"} placeholder={"yyyy/mm/dd"}/>
          </DateForm>

          <Button text={"検索"} background={"#0156a5"} hover={"#0674da"}/>

        </SearchForm>
      </SideBar>
      <Content>
        <UnderlineText text={`検索結果(${projects.length}件)`} />
        <Projects>
          {projects.map((val, key) => {
            return (
              <Project
                key={key}
                id={val.id}
                name={val.name}
                category={categories[val.categoryId]}
                createDate={val.createDate}
                bidDate={val.bidDate}
                municipalityName={val.municipalityName}
              />
            )
          })}
        </Projects>
      </Content>
    </AllContents>
  )
}

export default SearchProjects