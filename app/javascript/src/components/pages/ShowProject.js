import React, { useState, useEffect, useContext } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

import { AuthContext } from "../../App"
import { deleteProjectById, getProjectById } from "../../lib/api/project"
import UnderlineText from '../../components/utils/UnderlineText'
import Button from '../utils/Button'
import StatusBar from '../../components/utils/StatusBar'
import categories from '../../lib/data/categories'

const AllContents = styled.div`
background: #ffffff;
width: 1200px;
margin: 0 auto;
`

const Header = styled.div`
width: 100%;
padding: 20px 30px;
`

const ProjectName = styled.div`
font-size: 35px;
font-weight: bold;
margin-bottom: 2px;
overflow-wrap: break-word;
`

const Subs = styled.div`
display: flex;
color: gray;
font-size: 15px;
`

const Municipality = styled.div`
color: gray;
margin-right: 20px;
text-decoration: underline;
:hover {
  text-decoration: none;
}
`

const Category = styled.div`
color: gray;
margin-right: 20px;
text-decoration: underline;
:hover {
  text-decoration: none;
}
`

const Dates = styled.div`
border-left: solid 1px gray;
padding-left: 20px;
display: flex;
`

const DateName = styled.div`
margin-right: 10px;
`

const Date = styled.div`
margin-right: 20px;
`

const Body = styled.div`
display: flex;
`

const Infos = styled.div`
width: 900px;
padding-left: 30px;
`

const Info = styled.div`
font-size: 15px;
overflow-wrap: break-word;
white-space: pre-wrap;
`

const SideBar = styled.div`
width: 260px;
padding: 0 30px;
`

const Buttons = styled.div`
margin-bottom: 20px;
`

const GrayButton = styled.div`
background: #a9a9a9;
color: #ffffff;
border: none;
font-size: 16px;
font-weight: bold;
text-align: center;
width: 200px;
height: 50px;
border-radius: 5px;
padding: 13px;
margin: 20px auto 10px auto;
`

const DeleteBox = styled.div`
background: #ffe0e0;
width: 200px;
border-radius: 5px;
padding: 10px;
`

const DeleteMessage = styled.div`
color: #c62c2c;
font-size: 16px;
font-weight: bold;
text-align: center;
margin-bottom: 3px;
`

const DoNotDelete = styled.button`
background: #ffffff;
color: #c62c2c;
border: none;
font-size: 13px;
font-weight: bold;
width: 85px;
height: 30px;
border-radius: 3px;
padding: 5px;
margin-right: 10px; 
cursor: pointer;
:hover {
  background: #c62c2c;
  color: #ffffff;
}
`

const DoDelete = styled.button`
background: #ffffff;
color: #c62c2c;
border: none;
font-size: 13px;
font-weight: bold;
width: 85px;
height: 30px;
border-radius: 3px;
padding: 5px;
cursor: pointer;
:hover {
  background: #c62c2c;
  color: #ffffff;
}
`

const Contact = styled.div`
background: #f5f5f5;
width: 200px;
border-radius: 2px;
padding: 10px;
`

const ContactTitle = styled.div`
font-size: 16px;
font-weight: bold;
margin-bottom: 2px;
`

const ContactInfo = styled.div`
font-size: 14px;
`

function ShowProject() {
  const { isCompanySignedIn, currentCompany, isMunicipalitySignedIn, currentMunicipality } = useContext(AuthContext)
  const [project, setProject] = useState({})
  const [isDeletable, setIsDeletable] = useState(false)
  const [isBided, setIsBided] = useState(false)
  const id = useParams().id

  useEffect(async () => {
    const res = await getProjectById(id)
    console.log(res.data)
    setProject(res.data)

    const biddingCompanyIds = res.data.bids.map(bid => bid.companyId)
    if (isCompanySignedIn) {
      if (biddingCompanyIds.includes(currentCompany.id)) {
        setIsBided(true)
      }
    }
  }, [])

  const navigate = useNavigate()
  const doDelete = async() => {
    try {
      const res = await deleteProjectById(id)
      console.log(res)
      if (res.status === 204) {
        navigate("/municipality/my_page")
        console.log(`Project id:${id} deleted in successfully!`)
      } else {
        console.log(`Project id:${id} deleted in failed!`)
      }
    } catch (err) {
      console.log(err)
    }
  }
  
  return (
    <AllContents>
      <Header>
        {(project.hasSuccess) ? (
          <>
            <StatusBar status={"??????????????????"} />
          </>
        ) : (
          <>
            <StatusBar status={"???????????????"} />
          </>
        )}
        <ProjectName>{project.name}</ProjectName>
        <Subs>
          <Link to={`/municipality/${project.municipalityId}`}>
            <Municipality>{project.municipalityName}</Municipality>
          </Link>
          <Link to={`/projects/search?category_id=${project.categoryId}`}>
            <Category>{categories[project.categoryId]}</Category>
          </Link>
          <Dates>
            <DateName>?????????</DateName>
            <Date>{project.createDate}</Date>
            <DateName>?????????</DateName>
            <Date>{project.bidDate}</Date>
          </Dates>
        </Subs>
      </Header>

      <Body>

        <Infos>
          <UnderlineText text={'??????????????????'} />
          <Info>{project.qualification}</Info>
          <UnderlineText text={'????????????'} />
          <Info>
            {project.overview}
            {(project.url !== "") ? (
              <>
                <br/>?????????URL???{project.url}
              </>
            ) : (
              <></>
            )}
          </Info>
          {(project.hasSuccess) ? (
            <>
              <UnderlineText text={'????????????'} />
              <Info>{`${project.successBid.name}???${project.successBid.price.toLocaleString()} ???`}</Info>
            </>
          ) : (
            <></>
          )}
        </Infos>

        <SideBar>
          <Buttons>

            {(isMunicipalitySignedIn) ? (
              (project.municipalityId === currentMunicipality.id) ? (
                (project.hasSuccess) ? (
                  <GrayButton>????????????</GrayButton>
                ) : (
                <Link to={`/projects/${id}/successes/new`}>
                  <Button text={"???????????????????????????"} background={"#d68b2d"} hover={"#f4a84c"}/>
                </Link>
                )
              ) : (<></>)
            ) : (project.hasSuccess) ? (
              <GrayButton>????????????</GrayButton>
            ) : (
              (isBided) ? (
                <GrayButton>????????????</GrayButton>
              ) : (
                <Link to={`/projects/${id}/bids/new`}>
                  <Button text={"????????????"} background={"#d68b2d"} hover={"#f4a84c"}/>
                </Link>
              )
            )}

            {(isMunicipalitySignedIn) ? (
              <Link to={`/projects/new?project_id=${id}`}>
                <Button text={"???????????????????????????"} background={"#0156a5"} hover={"#0674da"}/>
              </Link>
            ) : (<></>)}

            {(project.hasSuccess) ? (
              <></>
            ) : (isMunicipalitySignedIn) ? (
              (project.municipalityId === currentMunicipality.id) ? (
                <div onClick={() => setIsDeletable(true)}>
                  <Button text={"?????????????????????"} background={"#0156a5"} hover={"#0674da"}/>
                </div>
              ) : (
                <></>
              )
            ) : (
              <></>
            )}
            {(isDeletable) ? (
              <DeleteBox>
                <DeleteMessage>??????????????????????????????</DeleteMessage>
                <DoNotDelete onClick={() => setIsDeletable(false)}>???????????????</DoNotDelete>
                <DoDelete onClick={() => doDelete()}>????????????</DoDelete>
              </DeleteBox>
            ) : (
              <></>
            )}
            
          </Buttons>
          <Contact>
            <ContactTitle>??????????????????</ContactTitle>
            <ContactInfo>
              {project.municipalityName}??????<br/>
              {project.repDivision}<br/>
              {project.repPerson}<br/>
              tel???{project.phoneNumber}<br/>
              mail???{project.email}<br/>
            </ContactInfo>
          </Contact>
        </SideBar>

      </Body>

    </AllContents>
  )
}

export default ShowProject