import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LogoImg from './images/logo.png'
import { AiOutlineSearch } from 'react-icons/ai'

const Navbar = styled.header`
background: #ffffff;
height: 120px;
display: flex;
align-items: center;
`

const LogoAndSearch = styled.div`
width: calc(100vw - 360px);
height: 100%;
display: flex;
align-items: center;
padding-left: 30px;
border-bottom: solid 1px gray;
`

const SearchBox = styled.div`
display: flex;
height: 60px;
margin-left: 45px;
border: solid 4px #0056A6;
border-top-left-radius: 10px;
border-bottom-left-radius: 10px;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
`

const SearchForm = styled.input`
font-size: 20px;
width: 600px;
padding: 20px;
border-top-left-radius: 10px;
border-bottom-left-radius: 10px;
border: none;
` 
const SearchButton = styled.button`
background: #0056A6;
font-size: 40px;
color: #ffffff;
width: 80px;
padding: 7px;
border: none;
cursor: pointer;
`

const UserNav = styled.div`
width: 180px;
height: 100%;
`

const MunicipalityNav = styled.div`
background: linear-gradient(#6b8e23, #556b2f);
color: #ffffff;
font-size: 18px;
text-align: center;
width: 100%;
height: 40%;
padding-top: 10px;
`

const CompanyNav = styled.div`
background: linear-gradient(#d2691e, #a0522d);
color: #ffffff;
font-size: 18px;
text-align: center;
width: 100%;
height: 40%;
padding-top: 10px;
`

const SignUpOrIn = styled.div`
background: linear-gradient(#ffffff, #f5f5f5);
font-size: 16px;
text-align: center;
width: 100%;
height: 30%;
padding-top: 6px;
border: solid 1px gray;
cursor: pointer;
`

function Header() {
  return (
    <Navbar>

      <LogoAndSearch>
        <img src={LogoImg}  alt="ロゴ" width="292.5" height="67.5" />
        <SearchBox>
          <SearchForm
            type="text"
            placeholder="入札案件を検索"
          />
          <SearchButton>
            <AiOutlineSearch/>
          </SearchButton>
        </SearchBox>
      </LogoAndSearch>

      <UserNav>
        <MunicipalityNav>
          自治体の方はコチラ
        </MunicipalityNav>
        <SignUpOrIn>
          <Link to="#">
            会員登録
          </Link>
        </SignUpOrIn>
        <SignUpOrIn>
          <Link to="#">
            ログイン
          </Link>
        </SignUpOrIn>
      </UserNav>

      <UserNav>
        <CompanyNav>
          企業の方はコチラ
        </CompanyNav>
        <SignUpOrIn>
          <Link to="#">
            会員登録
          </Link>
        </SignUpOrIn>
        <SignUpOrIn>
          <Link to="#">
            ログイン
          </Link>
        </SignUpOrIn>
      </UserNav>
      
    </Navbar>
  )
}

export default Header