import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
width: calc(100% - 20px);
font-size: 20px;
font-weight: bold;
padding: 5px 0;
margin: 10px auto;
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