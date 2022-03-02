import React from 'react'
import { Link } from 'react-router-dom'
import TopImg from './images/top.png'
import styled from 'styled-components'
import { AiFillRightCircle } from 'react-icons/ai'

import UnderlineText from './UnderlineText'
import PrefList from './PrefList'
import Project from './Project'

const AllContents = styled.div`
width: 1200px;
margin: 0 auto;
`

const TopContents = styled.div`
background: #ffffff;
width: 100%;
display: flex;
`

const SideBar = styled.div`
width: 300px;
margin-top: 10px;
border-right: solid 1px gray;
`

const CategoryLists = styled.ul`
margin: 0 15px;
`

const CategoryList = styled.li`
font-size: 14px;
margin: 10px 0;
list-style: none;
`

const Content = styled.div`
width: calc(100% - 200px);
`

const TopImgBox = styled.img`
width: calc(100% - 20px);
margin: 10px;
`

const Areas = styled.div`
width: 800px;
margin: 20px;
border-top: solid 1px #a9a9a9;
border-right: solid 1px #a9a9a9;
border-left: solid 1px #a9a9a9;
`

const Projects = styled.div`
`

const BottomContents = styled.div`
`

const Contact = styled.div`
`

const PCImage = styled.div`
`

const Copy = styled.div`
`

const Sentence = styled.div`
`

const ContactButton = styled.button`
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
  ];
  const projects = [
    {
      id: 1,
      name: "テスト案件の募集だなり〜",
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
    }
  ];
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
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </Sentence>
          <ContactButton>
            <Link to="#">お問い合わせ</Link>
          </ContactButton>
        </Contact>
      </BottomContents>

    </AllContents>
  )
}

export default TopPage