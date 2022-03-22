import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import StatusBar from './StatusBar'
import categories from '../../lib/data/categories'

const Row = styled.div`
width: 100%;
border-radius: 10px;
border: solid 1px #e7e7e7;
box-shadow: 2px 2px 10px 0px #dcdcdc;
margin: 15px 0;
padding: 20px;
transition: 0.5s;
:hover {
  background: #ffefd5;
}
`

const Name = styled.div`
font-size: 25px;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
width: 100%;
margin-top: 3px;
margin-bottom: 10px;
`

const BottomBox = styled.div`
display: flex;
justify-content: space-between;
`

const MunicipalityAndCategory = styled.div`
display: flex;
`

const Municipality = styled.div`
background: #fdf1e2;
font-size: 13px;
color: #d38220;
height: 28px;
border-radius: 5px;
padding: 5px 10px;
margin-right: 15px;
`

const Category = styled.div`
background: #d9ecff;
font-size: 13px;
color: #0674da;
height: 28px;
border-radius: 5px;
padding: 5px 10px;
`

const Dates = styled.div`
display: flex;
height: 30px;
width: 400px;
padding-left: 20px;
border-left: solid 1px gray;
`

const DateName = styled.div`
font-size: 15px;
margin: auto 20px auto 0;
`

const Date = styled.div`
font-size: 15px;
margin: auto 30px auto 0;
`

function Project(props) {
  return (
    <Link to={`/projects/${props.project.id}`}>
      <Row>
        {(props.project.hasSuccess) ? (
          <>
            <StatusBar status={"落札結果あり"} />
          </>
        ) : (
          <>
            <StatusBar status={"入札受付中"} />
          </>
        )}
        <Name>{props.project.name}</Name>
        <BottomBox>
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
        </BottomBox>
      </Row>
    </Link>
  )
}

export default Project