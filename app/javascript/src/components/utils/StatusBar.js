import React from 'react'
import styled from 'styled-components'


function StatusBar(props) {
  const background = {
    '入札受付中': "#0ba71b",
    '落札結果あり': "#b1874f"
  }
  const Status = styled.div`
  background: ${background[props.status]};
  font-size: 13px;
  color: #ffffff;
  height: 25px;
  border-radius: 5px;
  padding: 3px 10px;
  margin-bottom: 10px;
  display: inline;
  `

  return (
    <Status>{props.status}</Status>
  )
}

export default StatusBar