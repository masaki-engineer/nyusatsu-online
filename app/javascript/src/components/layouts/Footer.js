import React from 'react'
import styled from 'styled-components'
import LogoImg from '../../images/logo.png'

const FooterMiddle = styled.div`
background: #ffffff;
width: 1200px;
height: 160px;
padding: 30px 0;
margin: 0 auto;
display: flex;
`

const LogoImgBox = styled.img`
width: 400px;
margin: auto 60px;
`

const NavList = styled.ul`
height: 100%;
column-count: 2;
`

const Nav = styled.li`
font-size: 13px;
margin: 0 40px 6px 0;
list-style: none;
`

const FooterBottom = styled.div`
background: #ffffff;
width: 100%;
height: 30px;
padding-top: 8px;
border-top: solid 1px gray;
`

const Copyright = styled.p`
font-size: 5px;
text-align: center;
`

function Footer() {
  return (
    <>
      <FooterMiddle>
        <LogoImgBox
          src={LogoImg}
        />
        <NavList>
          <Nav>よくある質問</Nav>
          <Nav>利用規約(免責事項)</Nav>
          <Nav>お問い合わせ</Nav>
          <Nav>お知らせ</Nav>
          <Nav>運営会社</Nav>
          <Nav>個人情報保護方針</Nav>
          <Nav>サイトマップ</Nav>
        </NavList>
      </FooterMiddle>
      <FooterBottom>
        <Copyright>© 2022 NYUSATSU ONLINE, INC.</Copyright>
      </FooterBottom>
    </>
  )
}

export default Footer