import React, { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { AuthContext } from "../../App"
import { getProjectById } from "../../lib/api/project"
import { createBid } from "../../lib/api/bid"
import UnderlineText from '../../components/utils/UnderlineText'
import ErrorMessage from '../../components/utils/ErrorMessage'
import ProjectDetails from '../../components/utils/ProjectDetails'

const AllContents = styled.div`
background: #ffffff;
width: 1200px;
margin: 0 auto;
padding: 50px 70px;
`

const BidFormBox = styled.div`
width: 100%;
padding: 10px 30px;
border-radius: 10px;
border: solid 1px #e7e7e7;
box-shadow: 2px 2px 10px 0px #dcdcdc;
`

const CompanyName = styled.div`
font-size: 18px;
font-weight: bold;
`

const Row = styled.div`
margin-top: 20px;
width: 100%;
display: flex;
`

const TitleBox = styled.div`
width: 200px;
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

const FormBox = styled.input`
font-size: 15px;
width: 800px;
padding: 15px;
border-radius: 3px;
border: solid 1px #a9a9a9;
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
margin: 25px 450px;
transition: 0.5s;
:hover {
  background: #0674da;
}
`

function NewBid() {
  const { currentCompany } = useContext(AuthContext)
  const navigate = useNavigate()
  const [project, setProject] = useState({})
  const id = useParams().project_id
  const [form, setForm] = useState({
    repDivision: "",
    repPerson: "",
    phoneNumber: "",
    email: "",
    price: "",
    companyId: currentCompany.id,
    projectId: id
  })
  const [errorMessageOpen, setErrorMessageOpen] = useState(false)

  useEffect(async () => {
    const res = await getProjectById(id)
    console.log(res.data)
    setProject(res.data)
  }, [])

  const handleChange = (input) => e => {
    setForm({...form, [input] : e.target.value})
    console.log(form)
  }

  const handleSubmit = async () => {
    try {
      const res = await createBid(form)
      console.log(res)

      if (res.status === 200) {
        navigate(`/projects/${id}`)
        console.log("Bid created in successfully!")
      } else {
        console.log("Bid created in failed!")
        setErrorMessageOpen(true)
      }
    } catch (err) {
      console.log(err)
      setErrorMessageOpen(true)
    }
  }

  return (
    <AllContents>
      <ProjectDetails project={project}/>

      <BidFormBox>
        <UnderlineText text={'??????????????????'} />

        <ErrorMessage // ??????????????????????????????????????????????????????
        open={errorMessageOpen}
        message="????????????????????????????????????????????????????????????"
        />

        <Row>
          <TitleBox>
            <Title>?????????</Title>
          </TitleBox>
          <CompanyName>{currentCompany.name}</CompanyName>
        </Row>

        <Row>
          <TitleBox>
            <Title>?????????</Title>
            <Required>??????</Required>
          </TitleBox>
          <FormBox
            type="text"
            value={form.repDivision}
            onChange={handleChange('repDivision')}
          />
        </Row>

        <Row>
          <TitleBox>
            <Title>????????????</Title>
            <Required>??????</Required>
          </TitleBox>
          <FormBox
            type="text"
            value={form.repPerson}
            onChange={handleChange('repPerson')}
          />
        </Row>

        <Row>
          <TitleBox>
            <Title>????????????</Title>
            <Required>??????</Required>
          </TitleBox>
          <FormBox
            type="text"
            value={form.phoneNumber}
            onChange={handleChange('phoneNumber')}
          />
        </Row>

        <Row>
          <TitleBox>
            <Title>?????????????????????</Title>
            <Required>??????</Required>
          </TitleBox>
          <FormBox
            type="text"
            value={form.email}
            onChange={handleChange('email')}
          />
        </Row>

        <Row>
          <TitleBox>
            <Title>????????????</Title>
            <Required>??????</Required>
          </TitleBox>
          <FormBox
            type="text"
            value={form.price}
            onChange={handleChange('price')}
          />
        </Row>

        <SubmitButton onClick={handleSubmit}>????????????</SubmitButton>
      </BidFormBox>
    </AllContents>
  )
}

export default NewBid