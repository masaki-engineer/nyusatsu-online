import React, { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom"
import styled from 'styled-components'
import Cookies from "js-cookie"

import { AuthContext } from "../../App"
import { signUp } from "../../lib/api/municipality"
import UnderlineText from '../../components/utils/UnderlineText'
import ErrorMessage from '../../components/utils/ErrorMessage'
import prefectures from '../../lib/data/prefectures'

const Contents = styled.div`
background: #ffffff;
width: 1200px;
padding: 30px;
margin: 0 auto;
`

const Row = styled.div`
margin: 30px 5px;
width: 1100px;
height: 50px;
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
width: 100%;
padding: 15px;
border-radius: 3px;
border: solid 1px #a9a9a9;
`

const SelectBox = styled.select`
font-size: 15px;
width: 100%;
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

function MunicipalitySignUp() {
  const { setIsMunicipalitySignedIn, setCurrentMunicipality } = useContext(AuthContext)
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    postalCode: "",
    prefectureId: 0,
    city: "",
    addresses: "",
    building: "",
    phoneNumber: "",
    homePageUrl: ""
  })
  const [errorMessageOpen, setErrorMessageOpen] = useState(false)

  const handleChange = (input) => e => {
    setForm({...form, [input] : e.target.value})
    console.log(form)
  }

  const handleSubmit = async () => {
    try {
      const res = await signUp(form)
      console.log(res)

      if (res.status === 200) {
        // ?????????????????????????????????????????????
        Cookies.set("_access_token", res.headers["access-token"])
        Cookies.set("_client", res.headers["client"])
        Cookies.set("_uid", res.headers["uid"])

        setIsMunicipalitySignedIn(true)
        setCurrentMunicipality(res.data.data)

        navigate("/municipality/my_page")

        console.log("Signed in successfully!")
      } else {
        console.log("Signed in failed!")
        setErrorMessageOpen(true)
      }
    } catch (err) {
      console.log(err)
      setErrorMessageOpen(true)
    }
  }

  return (
    <Contents>
      <UnderlineText text={'?????????????????????'} />

      <ErrorMessage // ??????????????????????????????????????????????????????
        open={errorMessageOpen}
        message="????????????????????????????????????????????????????????????"
      />

      <Row>
        <TitleBox>
          <Title>????????????</Title>
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
          <Title>???????????????</Title>
          <Required>??????</Required>
        </TitleBox>
        <FormBox
          type="password"
          value={form.password}
          onChange={handleChange('password')}
        />
      </Row>
      
      <Row>
        <TitleBox>
          <Title>???????????????????????????</Title>
          <Required>??????</Required>
        </TitleBox>
        <FormBox
          type="password"
          value={form.passwordConfirmation}
          onChange={handleChange('passwordConfirmation')}
        />
      </Row>
      
      <Row>
        <TitleBox>
          <Title>????????????</Title>
          <Required>??????</Required>
        </TitleBox>
        <FormBox
          type="text"
          value={form.postalCode}
          onChange={handleChange('postalCode')}
        />
      </Row>
      
      <Row>
        <TitleBox>
          <Title>????????????</Title>
          <Required>??????</Required>
        </TitleBox>
        <SelectBox
          value={form.prefectureId}
          onChange={handleChange('prefectureId')}
        >
          {prefectures.map((val, key) => {
            return (<option value={key}>{val}</option>)
          })}
        </SelectBox>
      </Row>
      
      <Row>
        <TitleBox>
          <Title>?????????</Title>
          <Required>??????</Required>
        </TitleBox>
        <FormBox
          type="text"
          value={form.city}
          onChange={handleChange('city')}
        />
      </Row>
      
      <Row>
        <TitleBox>
          <Title>??????</Title>
          <Required>??????</Required>
        </TitleBox>
        <FormBox
          type="text"
          value={form.addresses}
          onChange={handleChange('addresses')}
        />
      </Row>
      
      <Row>
        <TitleBox>
          <Title>?????????</Title>
          <Optional>??????</Optional>
        </TitleBox>
        <FormBox
          type="text"
          value={form.building}
          onChange={handleChange('building')}
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
          <Title>??????????????????URL</Title>
          <Required>??????</Required>
        </TitleBox>
        <FormBox
          type="text"
          value={form.homePageUrl}
          onChange={handleChange('homePageUrl')}
        />
      </Row>

      <SubmitButton onClick={handleSubmit}>??????</SubmitButton>
    </Contents>
  )
}

export default MunicipalitySignUp