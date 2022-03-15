import React from 'react'
import styled from 'styled-components'

import Button from '../utils/Button'
import UnderlineText from '../utils/UnderlineText'
import SearchForm from '../utils/SearchForm'

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

const ControlBox = styled.div`
background: #ffffff;
height: 230px;
width: 840px;
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

function CompanyMyPage() {
  return (
    <AllContents>
      <SideBar>
        <UnderlineText text={'案件を検索する'} />
        <SearchForm/>
      </SideBar>
      <Content>
        <UnderlineText text={'◯◯株式会社　マイページ'} />
        <ControlBox>

          <Buttons>
            <Button text={"キーワード登録"} background={"#0156a5"} hover={"#0674da"}/>
            <Button text={"企業トップページ"} background={"#0156a5"} hover={"#0674da"}/>
          </Buttons>

          <StatusBox>
            <Row href="#">
              <Status>受付中</Status>
              <Count>
                <Number>100</Number> 件
              </Count>
            </Row>

            <Row href="#">
              <Status>入札済み</Status>
              <Count>
                <Number>100</Number> 件
              </Count>
            </Row>

            <Row href="#">
              <Status>結果あり</Status>
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

export default CompanyMyPage