import React, { useState, useEffect, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

import { AuthContext } from "../../App"
import Button from '../utils/Button'
import UnderlineText from '../utils/UnderlineText'
import SearchForm from '../utils/SearchForm'
import Project from '../../components/utils/Project'
import { searchProjects } from "../../lib/api/project"

const AllContents = styled.div`
background: #ffffff;
width: 1200px;
margin: 0 auto;
padding: 10px 0;
`

const Header = styled.div`
width: 100%;
padding: 0 15px;
`

const ControlBox = styled.div`
background: #f0f8ff;
height: 230px;
width: 100%;
margin: 20px auto;
padding: 30px;
display: flex;
`

const Buttons = styled.div`
width: 300px;
height: 100%;
border-right: solid 1px gray;
`

const StatusBox = styled.div`
height: 100%;
padding-left: 50px;
display: flex;
`

const Row = styled.div`
width: 200px;
padding: 20px;
margin: auto 0;
`

const Status = styled.div`
color: #0156a5;
font-size: 25px;
font-weight: bold;
text-align: center;
`

const Count = styled.div`
font-size: 25px;
height: 100%;
text-align: center;
font-weight: bold;
`

const Number = styled.span`
font-size: 50px;
`

const Contents = styled.div`
width: 100%;
display: flex;
`

const SideBar = styled.div`
width: 300px;
border-right: solid 1px gray;
padding: 0 15px;
`

const Content = styled.div`
width: 900px;
`

const Projects = styled.div`
width: 860px;
margin: 20px;
`

function MunicipalityMyPage() {
  const { currentMunicipality } = useContext(AuthContext)
  const id = currentMunicipality.id
  const [projects, setProjects] = useState([])
  const [allProjects, setAllProjects] = useState([])
  const query = useLocation().search

  useEffect(async () => {
    let searchQuery = ""
    if (query == "") {searchQuery = `?municipality_id=${id}`}
    else {searchQuery = `${query}&municipality_id=${id}`}
    const res = await searchProjects(searchQuery)
    console.log(res.data)
    setProjects(res.data)
  }, [query])

  useEffect(async () => {
    let searchQuery = `?municipality_id=${id}`
    const res = await searchProjects(searchQuery)
    setAllProjects(res.data)
  }, [])

  return (
    <AllContents>
      <Header>
        <UnderlineText text={`${currentMunicipality.name}??????????????????`} />
        <ControlBox>

          <Buttons>
            <Link to="/projects/new">
              <Button text={"????????????"} background={"#0156a5"} hover={"#0674da"}/>
            </Link>
            <Link to={`/municipality/${id}`}>
            <Button text={"???????????????????????????"} background={"#0156a5"} hover={"#0674da"}/>
            </Link>
          </Buttons>

          <StatusBox>
            <Row>
              <Status>???????????????</Status>
              <Count>
                <Number>
                  {allProjects.filter(project => !project.hasSuccess).length}
                </Number>
                {" ???"}
              </Count>
            </Row>

            <Row>
              <Status>??????????????????</Status>
              <Count>
                <Number>
                  {allProjects.filter(project => project.hasSuccess).length}
                </Number>
                {" ???"}
              </Count>
            </Row>
          </StatusBox>

        </ControlBox>
      </Header>
      <Contents>
        <SideBar>
          <UnderlineText text={'????????????'} />
          <SearchForm/>
        </SideBar>
        <Content>
          <Projects>
            {projects.map((project) => {
              return (
                <Project project={project} />
              )
            })}
          </Projects>
        </Content>
      </Contents>
    </AllContents>
  )
}

export default MunicipalityMyPage