import React from 'react'
import styled from 'styled-components'

import Button from '../utils/Button'
import UnderlineText from '../utils/UnderlineText'
import categories from '../../lib/data/categories'
import prefectures from '../../lib/data/prefectures'

const AllContents = styled.div`
background: #ffffff;
width: 1200px;
margin: 0 auto;
padding: 10px 0;
display: flex;
`

const ControlBox = styled.div`
background: #ffffff;
height: 230px;
width: 880px;
border-radius: 10px;
border: solid 1px #e7e7e7;
box-shadow: 2px 2px 10px 0px #dcdcdc;
margin: 20px auto;
padding: 30px;
display: flex;
`

const Buttons = styled.div`
width: 300px;
height: 100%;
border-right: solid 1px gray;
`

const StatusBox = styled.div`
height: 100%;
padding: 20px 0 20px 50px;
`

const Row = styled.a`
display: flex;
width: 100%;
height: 30px;
margin: 0 auto 15px auto;
`

const Status = styled.div`
color: #0156a5;
font-size: 25px;
font-weight: bold;
width: 130px;
`

const Count = styled.div`
font-size: 15px;
height: 100%;
`

const Number = styled.span`
font-size: 25px;
`

const SideBar = styled.div`
width: 300px;
border-right: solid 1px gray;
`

const Content = styled.div`
width: calc(100% - 200px);
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

function MunicipalityMyPage() {
  return (
    <AllContents>
      <SideBar>
        <UnderlineText text={'案件を検索する'} />
        <SearchForm>

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
        <UnderlineText text={'◯◯市　マイページ'} />
        <ControlBox>

          <Buttons>
            <Button text={"案件登録"} background={"#0156a5"} hover={"#0674da"}/>
            <Button text={"自治体トップページ"} background={"#0156a5"} hover={"#0674da"}/>
          </Buttons>

          <StatusBox>
            <Row href="#">
              <Status>受付中</Status>
              <Count>
                <Number>100</Number> 件
              </Count>
            </Row>

            <Row href="#">
              <Status>入札終了</Status>
              <Count>
                <Number>100</Number> 件
              </Count>
            </Row>

            <Row href="#">
              <Status>落札決定</Status>
              <Count>
                <Number>100</Number> 件
              </Count>
            </Row>
          </StatusBox>

        </ControlBox>
      </Content>
    </AllContents>
  )
}

export default MunicipalityMyPage