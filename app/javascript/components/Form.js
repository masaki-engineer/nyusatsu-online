import React from 'react'
import styled from 'styled-components'

const Row = styled.div`
margin: 30px 20px;
width: 1100px;
height: 50px;
display: flex;
`

const TitleBox = styled.div`
width: 350px;
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

const Optional = styled.p`
background: #a9a9a9;
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
width: 100%;
padding: 15px;
border-radius: 3px;
border: solid 1px #a9a9a9;
`

function Form(props) {
  return (
    <Row>
      <TitleBox>
        <Title>{props.title}</Title>
        {props.required ? (
          <Required>必須</Required>
        ) : (
          <Optional>任意</Optional>
        )}
      </TitleBox>
      <FormBox
        type={props.type}
        placeholder={props.placeholder}
      />
    </Row>
  )
}

export default Form