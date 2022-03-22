import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import TopImg from '../../images/top.png'
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

const PCImage = styled.div`
background: gray;
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
          <UnderlineText text={'入札カテゴリー'} />
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
          <TopImgBox src={TopImg}  alt="トップ画像" />
          <UnderlineText text={'都道府県で検索する'} />
          <Areas>
            <PrefList
              area={'北海道'}
              prefectures={[{1: '北海道'}]}
            />
            <PrefList
              area={'東北'}
              prefectures={[{2: '青森'}, {3: '岩手'}, {4: '宮城'}, {5: '秋田'}, {6: '山形'}, {7: '福島'}]}
            />
            <PrefList
              area={'南関東'}
              prefectures={[{11: '埼玉'}, {12: '千葉'}, {13: '東京'}, {14: '神奈川'}]}
            />
            <PrefList
              area={'北関東・甲信'}
              prefectures={[{8: '茨城'}, {9: '栃木'}, {10: '群馬'}, {19: '山梨'}, {20: '長野'}]}
            />
            <PrefList
              area={'北陸'}
              prefectures={[{15: '新潟'}, {16: '富山'}, {17: '石川'}, {18: '福井'}]}
            />
            <PrefList
              area={'東海'}
              prefectures={[{21: '岐阜'}, {22: '静岡'}, {23: '愛知'}, {24: '三重'}]}
            />
            <PrefList
              area={'近畿'}
              prefectures={[{25: '滋賀'}, {26: '京都'}, {27: '大阪'}, {28: '兵庫'}, {29: '奈良'}, {30: '和歌山'}]}
            />
            <PrefList
              area={'中国'}
              prefectures={[{31: '鳥取'}, {32: '島根'}, {33: '岡山'}, {34: '広島'}, {35: '山口'}]}
            />
            <PrefList
              area={'四国'}
              prefectures={[{36: '徳島'}, {37: '香川'}, {38: '愛媛'}, {39: '高知'}]}
            />
            <PrefList
              area={'九州・沖縄'}
              prefectures={[{40: '福岡'}, {41: '佐賀'}, {42: '長崎'}, {43: '熊本'}, {44: '大分'}, {45: '宮崎'}, {46: '鹿児島'}, {47: '沖縄'}]}
            />
          </Areas>
          <UnderlineText text={'最近登録された案件'} />
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
        <PCImage></PCImage>
        <Contact>
          <Copy>
            自治体様・企業様へ<br/>
            入札を全てオンライン化しませんか？
          </Copy>
          <Sentence>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </Sentence>
          <Link to="#">
            <ContactButton>
              お問い合わせ
            </ContactButton>
          </Link>
        </Contact>
      </BottomContents>

    </AllContents>
  )
}

export default TopPage