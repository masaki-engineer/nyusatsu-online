import React from 'react'
import { Link } from 'react-router-dom'
import TopImg from '../../images/top.png'
import styled from 'styled-components'

import UnderlineText from '../../components/utils/UnderlineText'
import PrefList from '../../components/utils/PrefList'
import Project from '../../components/utils/Project'

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
`

const CategoryLists = styled.ul`
margin: 0 15px;
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
`

const TopImgBox = styled.img`
width: calc(100% - 20px);
margin: 10px;
`

const Areas = styled.div`
width: 860px;
margin: 20px;
border-top: solid 1px #a9a9a9;
border-right: solid 1px #a9a9a9;
border-left: solid 1px #a9a9a9;
`

const Projects = styled.div`
width: 860px;
margin: 20px;
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
  const categories = [
    {1: "IT・情報通信" },
    {2: "ITシステム・ネットワーク全般" },
    {3: "オフィス機器・PC・事務用品全般" },
    {4: "BPO・アウトソーシング" },
    {5: "セキュリティ機器全般" },
    {6: "エネルギー" },
    {7: "建築工事" }
  ]
  const projects = [
    {
      id: 1,
      name: "テスト案件の募集だなり〜テスト案件の募集だなり〜テスト案件の募集だなり〜テスト案件の募集だなり〜テスト案件の募集だなり〜テスト案件の募集だなり〜",
      category: "運輸・物流",
      createDate: "2022/02/28",
      bidDate: "2022/3/31",
      municipality: "福岡市"
    }, {
      id: 2,
      name: "テスト案件の募集だなり〜２",
      category: "オフィス機器・PC・事務用品全般",
      createDate: "2022/02/26",
      bidDate: "2022/3/15",
      municipality: "大阪市"
    }, {
      id: 3,
      name: "テスト案件の募集だなり〜２",
      category: "オフィス機器・PC・事務用品全般",
      createDate: "2022/02/26",
      bidDate: "2022/3/15",
      municipality: "大阪市"
    }, {
      id: 4,
      name: "テスト案件の募集だなり〜２",
      category: "オフィス機器・PC・事務用品全般",
      createDate: "2022/02/26",
      bidDate: "2022/3/15",
      municipality: "大阪市"
    }
  ]
  return (
    <AllContents>

      <TopContents>
        <SideBar>
          <UnderlineText text={'入札カテゴリー'} />
          <CategoryLists>
            {categories.map((val, key) => {
              return (
                <Link to="#">
                  <CategoryList>{val[ Object.keys(val)[0] ]}</CategoryList>
                </Link>
              )
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
              prefectures={[{2: '埼玉'}, {3: '千葉'}, {4: '東京'}, {5: '神奈川'}]}
            />
            <PrefList
              area={'北関東・甲信'}
              prefectures={[{2: '茨城'}, {3: '栃木'}, {4: '群馬'}, {5: '山梨'}, {6: '長野'}]}
            />
            <PrefList
              area={'北陸'}
              prefectures={[{2: '新潟'}, {3: '富山'}, {4: '石川'}, {5: '福井'}]}
            />
            <PrefList
              area={'東海'}
              prefectures={[{2: '岐阜'}, {3: '静岡'}, {4: '愛知'}, {5: '三重'}]}
            />
            <PrefList
              area={'近畿'}
              prefectures={[{2: '滋賀'}, {3: '京都'}, {4: '大阪'}, {5: '兵庫'}, {6: '奈良'}, {7: '和歌山'}]}
            />
            <PrefList
              area={'中国'}
              prefectures={[{2: '鳥取'}, {3: '島根'}, {4: '岡山'}, {5: '広島'}, {6: '山口'}]}
            />
            <PrefList
              area={'四国'}
              prefectures={[{2: '徳島'}, {3: '香川'}, {4: '愛媛'}, {5: '高知'}]}
            />
            <PrefList
              area={'九州・沖縄'}
              prefectures={[{2: '福岡'}, {3: '佐賀'}, {4: '長崎'}, {5: '熊本'}, {6: '大分'}, {7: '宮崎'}, {7: '鹿児島'}, {7: '沖縄'}]}
            />
          </Areas>
          <UnderlineText text={'最近登録された案件'} />
          <Projects>
            {projects.map((val, key) => {
              return (
                <Project
                  key={key}
                  id={val.id}
                  name={val.name}
                  category={val.category}
                  createDate={val.createDate}
                  bidDate={val.bidDate}
                  municipality={val.municipality}
                />
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