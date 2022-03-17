import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import styled from 'styled-components'

import UnderlineText from '../utils/UnderlineText'
import prefectures from '../../lib/data/prefectures'
import { getCompanyById } from '../../lib/api/company'

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
margin-bottom: 15px;
`

const CompanyName = styled.div`
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

const ProfileInfos = styled.div`
width: 100%;
`

const Profile = styled.div`
font-size: 15px;
margin-left: 15px;
`

function CompanyShow() {
  const [menu, setMenu] = useState("profile")
  const [company, setCompany] = useState({})
  const id = useParams().id

  useEffect(async () => {
    const res = await getCompanyById(id)
    console.log(res.data)
    setCompany(res.data)
  }, [])

  return (
    <AllContents>
      <Header>
        <Heading>
          <CompanyName>{company.name}</CompanyName>
        </Heading>
        <Menubar>
          <Menu onClick={() => setMenu("profile")} is_selected={(menu == "profile")}>基本情報</Menu>
        </Menubar>
      </Header>
      <Contents>
        {(menu == "profile") ? (
          <ProfileInfos>
            <UnderlineText text={'住所'} />
            <Profile>
              〒{company.postalCode}<br/>
              {prefectures[company.prefectureId] + company.city + company.addresses + company.building}
            </Profile>
            <UnderlineText text={'電話番号'} />
            <Profile>
              {company.phoneNumber}
            </Profile>
            {(company.homePageUrl !== "") ? (
              <>
                <UnderlineText text={'ホームページ'} />
                <Profile>
                  {company.homePageUrl}
                </Profile>
              </>
            ) : (
              <></>
            )}
          </ProfileInfos>
        ) : (
          <></>
        )}
      </Contents>
    </AllContents>
  )
}

export default CompanyShow