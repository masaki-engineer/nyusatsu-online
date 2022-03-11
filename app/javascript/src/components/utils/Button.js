import React from 'react'
import styled from 'styled-components'

function Button(props) {
  const Box = styled.button`
  background: ${props.background};
  color: #ffffff;
  border: none;
  font-size: 16px;
  font-weight: bold;
  width: 200px;
  height: 50px;
  border-radius: 5px;
  padding: 10px;
  margin: 20px auto 10px auto; 
  display: block;
  cursor: pointer;
  transition: 0.5s;
  :hover {
    background: ${props.hover};
  }
  `
  return (
    <Box>
      {`${props.text} ＞`}
    </Box>
  )
}

export default Button