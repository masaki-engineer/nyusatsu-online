import React from 'react'
import styled from 'styled-components'


function StatusBar(props) {
  const background = {
    '入札受付中': "#0ba71b",
    '落札結果あり': "#b59f93"
  }
  const Status = styled.div`
  background: ${background[props.status]};
  font-size: 13px;
  color: #ffffff;
  height: 21px;
  border-radius: 10.5px;
  padding: 1px 10px;
  display: inline-block;
  `

  return (
    <Status>{props.status}</Status>
  )
}

export default StatusBar