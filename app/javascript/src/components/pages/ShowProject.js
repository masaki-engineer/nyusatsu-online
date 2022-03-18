import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'

import { getProjectById } from "../../lib/api/project"
import UnderlineText from '../../components/utils/UnderlineText'
import Button from '../utils/Button'
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

const Status = styled.div`
background: #0ba71b;
font-size: 13px;
color: #ffffff;
height: 25px;
border-radius: 5px;
padding: 3px 10px;
margin-bottom: 10px;
display: inline;
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
`

const SideBar = styled.div`
width: 260px;
padding: 0 30px;
`

const Buttons = styled.div`
margin-bottom: 20px;
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
  const [project, setProject] = useState({})
  const id = useParams().id

  useEffect(async () => {
    const res = await getProjectById(id)
    console.log(res.data)
    setProject(res.data)
  }, [])

  return (
    <AllContents>
      <Header>
        <Status>入札受付中</Status>
        <ProjectName>{project.name}</ProjectName>
        <Subs>
          <Link to={`/municipality/${project.municipalityId}`}>
            <Municipality>{project.municipalityName}</Municipality>
          </Link>
          <Link to={`/projects/search?category_id=${project.categoryId}`}>
            <Category>{categories[project.categoryId]}</Category>
          </Link>
          <Dates>
            <DateName>登録日</DateName>
            <Date>{project.createDate}</Date>
            <DateName>入札日</DateName>
            <Date>{project.bidDate}</Date>
          </Dates>
        </Subs>
      </Header>

      <Body>

        <Infos>
          <UnderlineText text={'入札参加資格'} />
          <Info>{project.qualification}</Info>
          <UnderlineText text={'案件概要'} />
          <Info>
            {project.overview}
            {(project.url !== "") ? (
              <>
                <br/>［参考URL］{project.url}
              </>
            ) : (
              <></>
            )}
          </Info>
          <UnderlineText text={'落札情報'} />
          <Info>{"test株式会社：12,345,678 円"}</Info>
        </Infos>

        <SideBar>
          <Buttons>
            <Link to="#">
              <Button text={"入札する"} background={"#d68b2d"} hover={"#f4a84c"}/>
            </Link>
            <Link to="#">
              <Button text={"複製して案件を登録"} background={"#0156a5"} hover={"#0674da"}/>
            </Link>
            <Link to="#">
              <Button text={"案件を削除する"} background={"#0156a5"} hover={"#0674da"}/>
            </Link>
          </Buttons>
          <Contact>
            <ContactTitle>お問い合わせ</ContactTitle>
            <ContactInfo>
              {project.municipalityName}役所<br/>
              {project.repDivision}<br/>
              {project.repPerson}<br/>
              tel：{project.phoneNumber}<br/>
              mail：{project.email}<br/>
            </ContactInfo>
          </Contact>
        </SideBar>

      </Body>

    </AllContents>
  )
}

export default ShowProject