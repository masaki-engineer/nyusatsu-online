import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import TopImg from '../../images/top.png'
import PCImage from '../../images/PCImage.png'
import styled from 'styled-components'

import { getRecentProjects } from "../../lib/api/project"
import UnderlineText from '../../components/utils/UnderlineText'
import PrefList from '../../components/utils/PrefList'
import Project from '../../components/utils/Project'
import categories from '../../lib/data/categories'

const AllContents = styled.div`
width: 1200px;
margin: 0 auto;
`

const TopContents = styled.div`
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

const CategoryLists = styled.ul`
margin: 0 5px;
`

const CategoryList = styled.li`
font-size: 14px;
margin: 10px 0;
list-style: none;
:hover {
  opacity: 0.5;
}
`

const Content = styled.div`
width: 900px;
padding: 0 15px;
`

const TopImgBox = styled.img`
width: 100%;
`

const Areas = styled.div`
width: 860px;
margin: 20px 5px;
border-top: solid 1px #a9a9a9;
border-right: solid 1px #a9a9a9;
border-left: solid 1px #a9a9a9;
`

const Projects = styled.div`
width: 860px;
margin: 20px 5px;
`

const BottomContents = styled.div`
background: linear-gradient(to bottom right, #244a6f, #072542);
width: 100%;
height: 400px;
padding: 50px;
display: flex;
`

const PCImageBox = styled.img`
width: 500px;
height: 300px;
margin-right: 50px;
`

const Contact = styled.div`
width: 550px
`

const Copy = styled.div`
color: #ffffff;
font-size: 30px;
font-weight: bold;
margin-bottom: 20px;
`

const Sentence = styled.div`
color: #ffffff;
font-size: 14px;
margin-bottom: 30px;
`

const ContactButton = styled.button`
background: #3cb371;
border: none;
color: #ffffff;
font-size: 20px;
width: 300px;
height: 60px;
border-radius: 5px;
padding: 10px;
transition: 0.5s;
:hover {
  background: #66cdaa;
}
`

function TopPage() {
  const [projects, setProjects] = useState([])

  useEffect(async () => {
    const res = await getRecentProjects()
    console.log(res.data)
    setProjects(res.data)
  }, [])

  return (
    <AllContents>

      <TopContents>
        <SideBar>
          <UnderlineText text={'?????????????????????'} />
          <CategoryLists>
            {categories.map((val, key) => {
              if (key !== 0) {
                return (
                  <Link to={`/projects/search?category_id=${key}`}>
                    <CategoryList>{val}</CategoryList>
                  </Link>
                )
              }
            })}
          </CategoryLists>
        </SideBar>
        <Content>
          <TopImgBox src={TopImg}  alt="???????????????" />
          <UnderlineText text={'???????????????????????????'} />
          <Areas>
            <PrefList
              area={'?????????'}
              prefectures={[{1: '?????????'}]}
            />
            <PrefList
              area={'??????'}
              prefectures={[{2: '??????'}, {3: '??????'}, {4: '??????'}, {5: '??????'}, {6: '??????'}, {7: '??????'}]}
            />
            <PrefList
              area={'?????????'}
              prefectures={[{11: '??????'}, {12: '??????'}, {13: '??????'}, {14: '?????????'}]}
            />
            <PrefList
              area={'??????????????????'}
              prefectures={[{8: '??????'}, {9: '??????'}, {10: '??????'}, {19: '??????'}, {20: '??????'}]}
            />
            <PrefList
              area={'??????'}
              prefectures={[{15: '??????'}, {16: '??????'}, {17: '??????'}, {18: '??????'}]}
            />
            <PrefList
              area={'??????'}
              prefectures={[{21: '??????'}, {22: '??????'}, {23: '??????'}, {24: '??????'}]}
            />
            <PrefList
              area={'??????'}
              prefectures={[{25: '??????'}, {26: '??????'}, {27: '??????'}, {28: '??????'}, {29: '??????'}, {30: '?????????'}]}
            />
            <PrefList
              area={'??????'}
              prefectures={[{31: '??????'}, {32: '??????'}, {33: '??????'}, {34: '??????'}, {35: '??????'}]}
            />
            <PrefList
              area={'??????'}
              prefectures={[{36: '??????'}, {37: '??????'}, {38: '??????'}, {39: '??????'}]}
            />
            <PrefList
              area={'???????????????'}
              prefectures={[{40: '??????'}, {41: '??????'}, {42: '??????'}, {43: '??????'}, {44: '??????'}, {45: '??????'}, {46: '?????????'}, {47: '??????'}]}
            />
          </Areas>
          <UnderlineText text={'???????????????????????????'} />
          <Projects>
            {projects.map((project) => {
              return (
                <Project project={project} />
              )
            })}
          </Projects>
        </Content>
      </TopContents>

      <BottomContents>
        <PCImageBox src={PCImage}  alt="???????????????" />
        <Contact>
          <Copy>
            ???????????????????????????<br/>
            ???????????????????????????????????????????????????
          </Copy>
          <Sentence>
            ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
          </Sentence>
          <Link to="#">
            <ContactButton>
              ??????????????????
            </ContactButton>
          </Link>
        </Contact>
      </BottomContents>

    </AllContents>
  )
}

export default TopPage