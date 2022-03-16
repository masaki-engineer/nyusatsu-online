import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import styled from 'styled-components'

import { searchProjects } from "../../lib/api/project"
import UnderlineText from '../utils/UnderlineText'
import SearchForm from '../utils/SearchForm'
import Project from '../../components/utils/Project'
import categories from '../../lib/data/categories'

const AllContents = styled.div`
background: #ffffff;
width: 1200px;
margin: 0 auto;
padding: 10px 0;
display: flex;
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

function SearchProjects() {
  const [projects, setProjects] = useState([])
  const query = useLocation().search

  useEffect(async () => {
    const res = await searchProjects(query)
    console.log(res.data)
    setProjects(res.data)
  }, [query])
  
  return (
    <AllContents>
      <SideBar>
        <UnderlineText text={'案件を検索する'} />
        <SearchForm/>
      </SideBar>
      <Content>
        <UnderlineText text={(projects.length == 0) ? (`検索結果`) : (`検索結果(${projects.length}件)`)} />
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
    </AllContents>
  )
}

export default SearchProjects