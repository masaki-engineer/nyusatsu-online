import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
width: 100%;
font-size: 20px;
font-weight: bold;
padding: 5px 0;
margin: 10px 0;
border-bottom: solid 2px #0056A6;
`

function UnderlineText(props) {
  return (
    <>
      <Text>
        {props.text}
      </Text> 
    </>
  )
}

export default UnderlineText