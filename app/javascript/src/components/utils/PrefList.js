import React from 'react'
import styled from 'styled-components'
import { AiFillRightCircle } from 'react-icons/ai'

const Row = styled.div`
height: 50px;
width: 100%;
display: flex;
border-bottom: solid 1px #a9a9a9;
`

const Area = styled.div`
background: #f5f5f5;
width: 150px;
height: 100%;
font-size: 16px;
font-weight: bold;
padding-top: 13px;
text-align: center;
`

const Prefectures = styled.ul`
width: 650px;
display: flex;
padding-left: 30px;
display: flex;
`

const Prefecture = styled.a`
margin: 15px 20px auto 0;
display: flex;
:hover {
  opacity: 0.5;
}
`

const RightSign = styled.div`
font-size: 17px;
margin: auto 3px auto 0;
color: #0056A6;
`

const Name = styled.li`
font-size: 14px;
list-style: none;
`

function PrefList(props) {
  return (
    <Row>
      <Area>
        {props.area}
      </Area>
      <Prefectures>
        {props.prefectures.map(val => {
          return (
            <Prefecture href="#">
              <RightSign>
                <AiFillRightCircle/>
              </RightSign>
              <Name>
                {val[ Object.keys(val)[0] ]}
              </Name>
            </Prefecture>
          )
        })}
      </Prefectures>
    </Row>
  )
}

export default PrefList