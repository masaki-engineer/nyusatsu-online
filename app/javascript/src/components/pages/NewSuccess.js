import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { getProjectById } from "../../lib/api/project"
import { createSuccess } from "../../lib/api/success"
import UnderlineText from '../../components/utils/UnderlineText'
import ProjectDetails from '../../components/utils/ProjectDetails'

const AllContents = styled.div`
background: #ffffff;
width: 1200px;
margin: 0 auto;
padding: 50px 70px;
`

const SuccessFormBox = styled.div`
width: 100%;
padding: 10px 30px;
border-radius: 10px;
border: solid 1px #e7e7e7;
box-shadow: 2px 2px 10px 0px #dcdcdc;
`

const Label = styled.label`
display: flex;
cursor: pointer;
padding: 5px 10px 5px 0;
position: relative;
${props =>
  props.disabled &&
  `
  cursor: not-allowed;
  opacity: 0.4;
  `}
`

const RadioButton = styled.input`
  position: absolute;
  visibility: hidden;
  display: none;
  &:checked + ${Mark} {
    &::after {
      width: 15px;
      height: 15px;
      opacity: 1;
      left: 17%;
      top: 17%;
    }
  }
`

const Mark = styled.span`
  display: inline-block;
  position: relative;
  border: 1px solid #0674da;
  width: 25px;
  height: 25px;
  left: 0;
  border-radius: 50%;
  margin: 20px;
  vertical-align: middle;
  &::after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-radius: 50%;
    background-color: #0674da;
    opacity: 0;
    left: 50%;
    top: 50%;
    position: absolute;
    transition: all 110ms;
  }
`

const CompanyName = styled.div`
font-size: 25px;
font-weight: bold;
margin-right: 30px;
padding-top: 14px;
`

const Price = styled.div`
font-size: 20px;
padding-top: 18px;
`

const SubmitButton = styled.button`
background: #0156a5;
border: none;
color: #ffffff;
font-size: 16px;
width: 100px;
height: 40px;
border-radius: 5px;
padding: 8px;
margin: 15px 450px 20px 450px;
transition: 0.5s;
:hover {
  background: #0674da;
}
`

function NewSuccess() {
  const navigate = useNavigate()
  const [project, setProject] = useState({})
  const id = useParams().project_id
  const [form, setForm] = useState({bidId: ""})

  useEffect(async () => {
    const res = await getProjectById(id)
    console.log(res.data)
    setProject(res.data)
    const lowestBid = res.data.bids[0]
    setForm({bidId: lowestBid.id})
  }, [])

  const handleChange = (input) => e => {
    setForm({...form, [input] : e.target.value})
    console.log(form)
  }

  const handleSubmit = async () => {
    try {
      const res = await createSuccess(form)
      console.log(res)

      if (res.status === 200) {
        navigate(`/projects/${id}`)
        console.log("Success created in successfully!")
      } else {
        console.log("Success created in failed!")
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <AllContents>
      <ProjectDetails project={project}/>
      <SuccessFormBox>
        <UnderlineText text={'???????????????????????????'} />
        {(typeof(project.bids) === 'object') ? (
          project.bids.map((bid) => (
            <Label>
              <RadioButton
                type="radio"
                value={bid.id}
                checked={form.bidId == bid.id}
                onChange={handleChange('bidId')}
              />
              <Mark />
              <CompanyName>{bid.name}</CompanyName>
              <Price>{`${bid.price.toLocaleString()} ???`}</Price>
            </Label>
          ))
        ) : (<></>)
        }
        <SubmitButton onClick={handleSubmit}>??????</SubmitButton>
      </SuccessFormBox>
    </AllContents>
  )
}

export default NewSuccess