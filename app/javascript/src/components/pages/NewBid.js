import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import { getProjectById } from "../../lib/api/project"
import UnderlineText from '../../components/utils/UnderlineText'

const AllContents = styled.div`
background: #ffffff;
width: 1200px;
margin: 0 auto;
padding: 50px 70px;
`

const ProjectDetails = styled.div`
width: 100%;
height: 100px;
margin-bottom: 40px;
display: flex;
`

const BasicInfos = styled.div`
max-width: 50%;
padding-right: 20px;
`

const ProjectName = styled.div`
width: 100%;
font-size: 30px;
font-weight: bold;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
margin-bottom: 5px; 
`

const MunicipalityAndCategory = styled.div`
display: flex;
font-size: 15px;
color: gray;
`

const Municipality = styled.div`
margin-right: 20px;
`

const Category = styled.div`
`

const Dates = styled.div`
display: flex;
font-size: 15px;
color: gray;
`

const DateName = styled.div`
margin-right: 10px;
`

const Date = styled.div`
margin-right: 15px;
`

const Overview = styled.div`
font-size: 13px;
padding-left: 10px;
border-left: solid 1px gray;
overflow-wrap: anywhere;
overflow: hidden;
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 5;
`

const BidFormBox = styled.div`
width: 100%;
padding: 10px 30px;
border-radius: 10px;
border: solid 1px #e7e7e7;
box-shadow: 2px 2px 10px 0px #dcdcdc;
`

const CompanyName = styled.div`
font-size: 18px;
font-weight: bold;
`

const Row = styled.div`
margin-top: 20px;
width: 100%;
display: flex;
`

const TitleBox = styled.div`
width: 200px;
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

const FormBox = styled.input`
font-size: 15px;
width: 800px;
padding: 15px;
border-radius: 3px;
border: solid 1px #a9a9a9;
`

const SubmitButton = styled.button`
background: #0156a5;
border: none;
color: #ffffff;
font-size: 16px;
width: 100px;
height: 40px;
border-radius: 5px;
padding: 8px;
margin: 25px 450px;
transition: 0.5s;
:hover {
  background: #0674da;
}
`

function NewBid() {
  const [project, setProject] = useState({})
  const id = useParams().project_id

  useEffect(async () => {
    const res = await getProjectById(id)
    console.log(res.data)
    setProject(res.data)
  }, [])

  return (
    <AllContents>
      <ProjectDetails>
        <BasicInfos>
          <ProjectName>{`props.name`}</ProjectName>
          <MunicipalityAndCategory>
            <Municipality>{`props.municipalityName`}</Municipality>
            <Category>{`props.category`}</Category>
          </MunicipalityAndCategory>
          <Dates>
            <DateName>登録日</DateName>
            <Date>{`props.createDate`}</Date>
            <DateName>入札日</DateName>
            <Date>{`props.bidDate`}</Date>
          </Dates>
        </BasicInfos>
        <Overview>{`props.overview`}</Overview>
      </ProjectDetails>

      <BidFormBox>
        <UnderlineText text={'入札フォーム'} />

        <Row>
          <TitleBox>
            <Title>企業名</Title>
          </TitleBox>
          <CompanyName>◯◯株式会社</CompanyName>
        </Row>

        <Row>
          <TitleBox>
            <Title>部署名</Title>
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
            <Title>電話番号</Title>
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
            <Title>入札価格</Title>
            <Required>必須</Required>
          </TitleBox>
          <FormBox
            type="text"
          />
        </Row>

        <SubmitButton>入札登録</SubmitButton>
      </BidFormBox>
    </AllContents>
  )
}

export default NewBid