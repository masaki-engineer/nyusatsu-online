import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import styled from 'styled-components'

import UnderlineText from '../utils/UnderlineText'
import SearchForm from '../utils/SearchForm'
import Project from '../../components/utils/Project'
import categories from '../../lib/data/categories'
import prefectures from '../../lib/data/prefectures'
import { getMunicipalityById } from '../../lib/api/municipality'

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
`

const SideBar = styled.div`
width: 300px;
border-right: solid 1px gray;
`

const Content = styled.div`
width: 900px;
`

const Projects = styled.div`
width: 860px;
margin: 20px;
`

const Profile = styled.div`
font-size: 15px;
margin-left: 15px;
`

function MunicipalityShow() {
  const [menu, setMenu] = useState("projects")
  const [municipality, setMunicipality] = useState({})
  const [projects, setProjects] = useState([])
  const id = useParams().id

  useEffect(async () => {
    const res = await getMunicipalityById(id)
    console.log(res.data)
    setMunicipality(res.data)
  }, [])

  return (
    <AllContents>
      <Header>
        <Heading>
          <Logo/>
          <MunicipalityName>{municipality.name}</MunicipalityName>
        </Heading>
        <Menubar>
          <Menu onClick={() => setMenu("projects")} is_selected={(menu == "projects")}>登録案件</Menu>
          <Menu onClick={() => setMenu("profile")} is_selected={(menu == "profile")}>基本情報</Menu>
        </Menubar>
      </Header>
      <Contents>
        {(menu == "projects") ? (
          <>
            <SideBar>
              <UnderlineText text={'絞り込み'} />
              <SearchForm/>
            </SideBar>
            <Content>
              <Projects>
                {projects.map((val, key) => {
                  return (
                    <Project
                      key={key}
                      id={val.id}
                      name={val.name}
                      category={categories[val.categoryId]}
                      createDate={val.createDate}
                      bidDate={val.bidDate}
                      municipalityName={val.municipalityName}
                    />
                  )
                })}
              </Projects>
            </Content>
          </>
        ) : (menu == "profile") ? (
          <>
            <UnderlineText text={'住所'} />
            <Profile>
              〒{municipality.postalCode}<br/>
              {prefectures[municipality.prefectureId] + municipality.city + municipality.addresses + municipality.building}
            </Profile>
            <UnderlineText text={'電話番号'} />
            <Profile>
              {municipality.phoneNumber}
            </Profile>
            <UnderlineText text={'ホームページ'} />
            <Profile>
              {municipality.homePageUrl}
            </Profile>
          </>
        ) : (
          <></>
        )}
      </Contents>
    </AllContents>
  )
}

export default MunicipalityShow