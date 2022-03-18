import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Row = styled.div`
height: 120px;
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
background: #d68b2d;
font-size: 13px;
color: #ffffff;
height: 28px;
border-radius: 5px;
padding: 5px 10px;
margin-right: 15px;
`

const Category = styled.div`
background: #0674da;
font-size: 13px;
color: #ffffff;
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
    <Link to={`/projects/${props.id}`}>
      <Row>
        <Name>{props.name}</Name>
        <BottomBox>
          <MunicipalityAndCategory>
            <Municipality>{props.municipalityName}</Municipality>
            <Category>{props.category}</Category>
          </MunicipalityAndCategory>
          <Dates>
            <DateName>登録日</DateName>
            <Date>{props.createDate}</Date>
            <DateName>入札日</DateName>
            <Date>{props.bidDate}</Date>
          </Dates>
        </BottomBox>
      </Row>
    </Link>
  )
}

export default Project