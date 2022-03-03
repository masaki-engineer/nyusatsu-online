import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LogoImg from './images/logo.png'
import { AiOutlineSearch } from 'react-icons/ai'

const Navbar = styled.header`
background: #ffffff;
height: 90px;
display: flex;
align-items: center;
border-bottom: solid 1px gray;
`

const LogoAndSearch = styled.div`
width: calc(100vw - 270px);
min-width: 830px;
display: flex;
align-items: center;
padding: 0 30px;
`
const LogoImgBox = styled.img`
width: 234px;
`

const SearchBox = styled.div`
display: flex;
height: 45px;
width: calc(100% - 30px);
max-width: 700px;
margin-left: 30px;
margin-right: 20px;
border: solid 3px #0056A6;
border-top-left-radius: 10px;
border-bottom-left-radius: 10px;
border-top-right-radius: 10px;
border-bottom-right-radius: 10px;
`

const SearchForm = styled.input`
font-size: 15px;
width: 100%;
padding: 15px;
border-top-left-radius: 10px;
border-bottom-left-radius: 10px;
border: none;
` 
const SearchButton = styled.button`
background: #0056A6;
font-size: 30px;
color: #ffffff;
width: 60px;
padding: 6px;
border: none;
cursor: pointer;
`

const UserNav = styled.div`
min-width: 135px;
height: 100%;
`

const MunicipalityNav = styled.div`
background: #072542;
color: #ffffff;
font-size: 13px;
text-align: center;
width: 100%;
height: 40%;
padding-top: 7px;
`

const CompanyNav = styled.div`
background: #52677b;
color: #ffffff;
font-size: 13px;
text-align: center;
width: 100%;
height: 40%;
padding-top: 7px;
`

const SignUpOrIn = styled.div`
background: linear-gradient(#ffffff, #f5f5f5);
font-size: 12px;
text-align: center;
width: 100%;
height: 30%;
padding-top: 4px;
border-top: solid 1px gray;
border-left: solid 1px gray;
cursor: pointer;
`

function Header() {
  return (
    <Navbar>

      <LogoAndSearch>
        <Link to="#">
          <LogoImgBox src={LogoImg} />
        </Link>
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
        <Link to="#">
          <SignUpOrIn>
            会員登録
          </SignUpOrIn>
        </Link>
        <Link to="#">
          <SignUpOrIn>
            ログイン
          </SignUpOrIn>
        </Link>
      </UserNav>

      <UserNav>
        <CompanyNav>
          企業の方はコチラ
        </CompanyNav>
        <Link to="#">
          <SignUpOrIn>
            会員登録
          </SignUpOrIn>
        </Link>
        <Link to="#">
          <SignUpOrIn>
            ログイン
          </SignUpOrIn>
        </Link>
      </UserNav>

    </Navbar>
  )
}

export default Header