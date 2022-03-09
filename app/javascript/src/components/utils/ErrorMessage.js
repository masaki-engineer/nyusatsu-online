import React from 'react'
import styled from 'styled-components'

const Message = styled.div`
color: #ff0000;
font-size: 15px;
margin: 30px 20px;
`

function ErrorMessage(props) {
  return (
    <>
      {props.open ? (
        <Message>{props.message}</Message>
      ) : (
        <div></div>
      )}
    </>
  )
}

export default ErrorMessage