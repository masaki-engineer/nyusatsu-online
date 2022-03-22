import React from 'react'
import styled from 'styled-components'
import categories from '../../lib/data/categories'

const Box = styled.div`
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

function ProjectDetails(props) {
  return (
    <Box>
      <BasicInfos>
        <ProjectName>{props.project.name}</ProjectName>
        <MunicipalityAndCategory>
          <Municipality>{props.project.municipalityName}</Municipality>
          <Category>{categories[props.project.categoryId]}</Category>
        </MunicipalityAndCategory>
        <Dates>
          <DateName>登録日</DateName>
          <Date>{props.project.createDate}</Date>
          <DateName>入札日</DateName>
          <Date>{props.project.bidDate}</Date>
        </Dates>
      </BasicInfos>
      <Overview>{props.project.overview}</Overview>
    </Box>
  )
}

export default ProjectDetails