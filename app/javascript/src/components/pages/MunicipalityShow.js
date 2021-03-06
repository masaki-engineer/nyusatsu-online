import React, { useState, useEffect } from 'react'
import { useParams, useLocation } from "react-router-dom"
import styled from 'styled-components'

import UnderlineText from '../utils/UnderlineText'
import SearchForm from '../utils/SearchForm'
import Project from '../../components/utils/Project'
import categories from '../../lib/data/categories'
import prefectures from '../../lib/data/prefectures'
import { getMunicipalityById } from '../../lib/api/municipality'
import { searchProjects } from "../../lib/api/project"

const AllContents = styled.div`
width: 1200px;
margin: 0 auto;
`

const Header = styled.div`
background: #ffffff;
width: 100%;
height: 150px;
padding: 25px 45px 0 45px;
border-bottom: solid 1px #c7c7c7;
`

const Heading = styled.div`
width: 100%;
height: 70px;
display: flex;
margin-bottom: 15px;
`

const Logo = styled.div`
background: gray;
width: 70px;
height: 70px;
margin-right: 10px;
`

const MunicipalityName = styled.div`
font-size: 40px;
font-weight: bold;
margin: auto 0;
`

const Menubar = styled.ul`
width: 100%;
height: 40px;
display: flex;
`

const Menu = styled.li`
color: #696969;
font-size: 16px;
width: 100px;
height: 100%;
padding-top: 8px;
text-align: center;
cursor: pointer;
list-style: none;
${({ is_selected }) => is_selected && `
  color: #0056A6;
  font-weight: bold;
  border-bottom: solid 2px #0056A6;
`}
`

const Contents = styled.div`
background: #ffffff;
width: 100%;
padding: 10px 0;
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

const ProfileInfos = styled.div`
width: 100%;
padding: 0 30px;
`

const Profile = styled.div`
font-size: 15px;
margin-left: 5px;
`

function MunicipalityShow() {
  const [menu, setMenu] = useState("projects")
  const [municipality, setMunicipality] = useState({})
  const [projects, setProjects] = useState([])
  const id = useParams().id
  const query = useLocation().search

  useEffect(async () => {
    const res = await getMunicipalityById(id)
    console.log(res.data)
    setMunicipality(res.data)
  }, [])

  useEffect(async () => {
    let searchQuery = ""
    if (query == "") {searchQuery = `?municipality_id=${id}`}
    else {searchQuery = `${query}&municipality_id=${id}`}
    const res = await searchProjects(searchQuery)
    console.log(res.data)
    setProjects(res.data)
  }, [query])

  return (
    <AllContents>
      <Header>
        <Heading>
          <Logo/>
          <MunicipalityName>{municipality.name}</MunicipalityName>
        </Heading>
        <Menubar>
          <Menu onClick={() => setMenu("projects")} is_selected={(menu == "projects")}>????????????</Menu>
          <Menu onClick={() => setMenu("profile")} is_selected={(menu == "profile")}>????????????</Menu>
        </Menubar>
      </Header>
      <Contents>
        {(menu == "projects") ? (
          <>
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
          </>
        ) : (menu == "profile") ? (
          <ProfileInfos>
            <UnderlineText text={'??????'} />
            <Profile>
              ???{municipality.postalCode}<br/>
              {prefectures[municipality.prefectureId] + municipality.city + municipality.addresses + municipality.building}
            </Profile>
            <UnderlineText text={'????????????'} />
            <Profile>
              {municipality.phoneNumber}
            </Profile>
            <UnderlineText text={'??????????????????'} />
            <Profile>
              {municipality.homePageUrl}
            </Profile>
          </ProfileInfos>
        ) : (
          <></>
        )}
      </Contents>
    </AllContents>
  )
}

export default MunicipalityShow