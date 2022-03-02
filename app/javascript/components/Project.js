import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Row = styled.div`
`

const Name = styled.div`
`

const MunicipalityAndCategory = styled.div`
`

const Municipality = styled.div`
`

const Category = styled.div`
`

const Dates = styled.div`
`

const DateName = styled.div`
`

const Date = styled.div`
`

function Project(props) {
  return (
    <Row>
      <Link to="#">
        <Name>{props.name}</Name>
      </Link>
      <MunicipalityAndCategory>
        <Municipality>{props.municipality}</Municipality>
        <Category>{props.category}</Category>
      </MunicipalityAndCategory>
      <Dates>
        <DateName>登録日</DateName>
        <Date>{props.createDate}</Date>
        <DateName>入札日</DateName>
        <Date>{props.bidDate}</Date>
      </Dates>
    </Row>
  )
}

export default Project