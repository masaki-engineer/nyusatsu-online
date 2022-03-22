import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import { getProjectById } from "../../lib/api/project"
import UnderlineText from '../../components/utils/UnderlineText'
import categories from '../../lib/data/categories'

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
min-width: 35%;
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
white-space: pre-wrap;
`

const SuccessFormBox = styled.div`
width: 100%;
padding: 10px 30px;
border-radius: 10px;
border: solid 1px #e7e7e7;
box-shadow: 2px 2px 10px 0px #dcdcdc;
`

const Label = styled.label`
display: flex;
cursor: pointer;
padding: 5px 10px 5px 0;
position: relative;
${props =>
  props.disabled &&
  `
  cursor: not-allowed;
  opacity: 0.4;
  `}
`

const RadioButton = styled.input`
  position: absolute;
  visibility: hidden;
  display: none;
  &:checked + ${Mark} {
    &::after {
      width: 15px;
      height: 15px;
      opacity: 1;
      left: 17%;
      top: 17%;
    }
  }
`

const Mark = styled.span`
  display: inline-block;
  position: relative;
  border: 1px solid #0674da;
  width: 25px;
  height: 25px;
  left: 0;
  border-radius: 50%;
  margin: 20px;
  vertical-align: middle;
  &::after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-radius: 50%;
    background-color: #0674da;
    opacity: 0;
    left: 50%;
    top: 50%;
    position: absolute;
    transition: all 110ms;
  }
`

const CompanyName = styled.div`
font-size: 25px;
font-weight: bold;
margin-right: 30px;
padding-top: 14px;
`

const Price = styled.div`
font-size: 20px;
padding-top: 18px;
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
margin: 15px 450px 20px 450px;
transition: 0.5s;
:hover {
  background: #0674da;
}
`

function NewSuccess() {
  const [project, setProject] = useState({})
  const [val, setVal] = useState(3);
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
          <ProjectName>{project.name}</ProjectName>
          <MunicipalityAndCategory>
            <Municipality>{project.municipalityName}</Municipality>
            <Category>{categories[project.categoryId]}</Category>
          </MunicipalityAndCategory>
          <Dates>
            <DateName>登録日</DateName>
            <Date>{project.createDate}</Date>
            <DateName>入札日</DateName>
            <Date>{project.bidDate}</Date>
          </Dates>
        </BasicInfos>
        <Overview>{project.overview}</Overview>
      </ProjectDetails>
      <SuccessFormBox>
        <UnderlineText text={'落札企業を決定する'} />
        {(typeof(project.bids) === 'object') ? (
          project.bids.map((bid, index) => (
            <Label>
              <RadioButton type="radio" value={bid.id} checked={val === bid.id}/>
              <Mark />
              <CompanyName>◯◯株式会社</CompanyName>
              <Price>999,999,999 円</Price>
            </Label>
          ))
        ) : (<></>)
        }
        <SubmitButton>決定</SubmitButton>
      </SuccessFormBox>
    </AllContents>
  )
}

export default NewSuccess