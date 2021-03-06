import React, { useState, useContext, useEffect } from 'react'
import { useNavigate, useLocation } from "react-router-dom"
import styled from 'styled-components'

import { AuthContext } from "../../App"
import { createProject, getProjectById } from "../../lib/api/project"
import UnderlineText from '../../components/utils/UnderlineText'
import ErrorMessage from '../../components/utils/ErrorMessage'
import categories from '../../lib/data/categories'

const Contents = styled.div`
background: #ffffff;
width: 1200px;
padding: 30px;
margin: 0 auto;
`

const Row = styled.div`
margin: 30px 10px;
width: 1100px;
min-height: 50px;
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
width: 750px;
padding: 15px;
border-radius: 3px;
border: solid 1px #a9a9a9;
`

const FormBoxTextarea = styled.textarea`
font-size: 15px;
max-width: 750px;
min-width: 750px;
height: 300px;
padding: 15px;
border-radius: 3px;
border: solid 1px #a9a9a9;
`

const SelectBox = styled.select`
font-size: 15px;
width: 750px;
padding: 15px;
border-radius: 3px;
border: solid 1px #a9a9a9;
`

const SubmitButton = styled.button`
background: #0156a5;
border: none;
color: #ffffff;
font-size: 16px;
width: 90px;
height: 40px;
border-radius: 5px;
padding: 8px;
margin: 0 555px;
transition: 0.5s;
:hover {
  background: #0674da;
}
`

function NewProject() {
  const { currentMunicipality } = useContext(AuthContext)
  const navigate = useNavigate()
  const query = useLocation().search
  const projectId = new URLSearchParams(query).get("project_id")
  const [form, setForm] = useState({
    name: "",
    categoryId: 0,
    overview: "",
    qualification: "",
    bidDate: "",
    repDivision: "",
    repPerson: "",
    phoneNumber: "",
    email: "",
    url: "",
    municipalityId: currentMunicipality.id
  })
  const [errorMessageOpen, setErrorMessageOpen] = useState(false)

  useEffect(async () => {
    if (projectId !== null) {
      const res = await getProjectById(projectId)
      const project = res.data
      setForm({
        name: project.name,
        categoryId: project.categoryId,
        overview: project.overview,
        qualification: project.qualification,
        bidDate: "",
        repDivision: "",
        repPerson: "",
        phoneNumber: "",
        email: "",
        url: "",
        municipalityId: currentMunicipality.id
      })
    }
  }, [])

  const handleChange = (input) => e => {
    setForm({...form, [input] : e.target.value})
    console.log(form)
  }

  const handleSubmit = async () => {
    try {
      const res = await createProject(form)
      console.log(res)

      if (res.status === 200) {
        navigate("/municipality/my_page")
        console.log("Project created in successfully!")
      } else {
        console.log("Project created in failed!")
        setErrorMessageOpen(true)
      }
    } catch (err) {
      console.log(err)
      setErrorMessageOpen(true)
    }
  }

  return (
    <Contents>
      <UnderlineText text={'????????????'} />

      <ErrorMessage // ??????????????????????????????????????????????????????
        open={errorMessageOpen}
        message="????????????????????????????????????????????????????????????"
      />

      <Row>
        <TitleBox>
          <Title>?????????</Title>
          <Required>??????</Required>
        </TitleBox>
        <FormBox
          type="text"
          value={form.name}
          onChange={handleChange('name')}
        />
      </Row>
      
      <Row>
        <TitleBox>
          <Title>???????????????</Title>
          <Required>??????</Required>
        </TitleBox>
        <SelectBox
          value={form.categoryId}
          onChange={handleChange('categoryId')}
        >
          {categories.map((val, key) => {
            return (<option value={key}>{val}</option>)
          })}
        </SelectBox>
      </Row>
      
      <Row>
        <TitleBox>
          <Title>????????????</Title>
          <Required>??????</Required>
        </TitleBox>
        <FormBoxTextarea
          value={form.overview}
          onChange={handleChange('overview')}
        />
      </Row>
      
      <Row>
        <TitleBox>
          <Title>??????????????????</Title>
          <Required>??????</Required>
        </TitleBox>
        <FormBoxTextarea
          value={form.qualification}
          onChange={handleChange('qualification')}
        />
      </Row>
      
      <Row>
        <TitleBox>
          <Title>?????????</Title>
          <Required>??????</Required>
        </TitleBox>
        <FormBox
          type="date"
          value={form.bidDate}
          onChange={handleChange('bidDate')}
        />
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
          <Title>?????????????????????</Title>
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
          <Title>??????????????????????????????</Title>
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
          <Title>??????URL</Title>
          <Optional>??????</Optional>
        </TitleBox>
        <FormBox
          type="text"
          value={form.url}
          onChange={handleChange('url')}
        />
      </Row>

      <SubmitButton onClick={handleSubmit}>??????</SubmitButton>
    </Contents>
  )
}

export default NewProject