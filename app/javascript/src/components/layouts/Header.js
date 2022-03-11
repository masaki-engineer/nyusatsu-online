import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LogoImg from '../../images/logo.png'
import { AiOutlineSearch } from 'react-icons/ai'
import Cookies from "js-cookie"

import { AuthContext } from "../../App"
import { municipalitySignOut } from "../../lib/api/municipality"
import { companySignOut } from "../../lib/api/company"

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

const MyPage = styled.a`
color: #0056A6;
font-size: 15px;
font-weight: bold;
text-align: center;
width: 100%;
height: 45px;
display: block;
margin: 22px 0;
padding-top: 12px;
border-right: solid 1px gray;
border-left: solid 1px gray;
cursor: pointer;
`

const LogOut = styled.div`
color: #0056A6;
font-size: 15px;
font-weight: bold;
text-align: center;
width: 100%;
height: 45px;
margin: 22px 0;
padding-top: 12px;
cursor: pointer;
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
  const {
    isMunicipalitySignedIn, setIsMunicipalitySignedIn,
    isCompanySignedIn, setIsCompanySignedIn
  } = useContext(AuthContext)
  console.log(`Municipality signed in:${isMunicipalitySignedIn}`)
  console.log(`Company signed in:${isCompanySignedIn}`)

  const handleMunicipalitySignOut = async () => {
    try {
      const res = await municipalitySignOut()

      if (res.data.success === true) {
        // サインアウト時には各Cookieを削除
        Cookies.remove("_access_token")
        Cookies.remove("_client")
        Cookies.remove("_uid")

        setIsMunicipalitySignedIn(false)

        console.log("Succeeded in sign out")
      } else {
        console.log("Failed in sign out")
      }
    } catch (err) {
      console.log(err)
    }
  }

  const handleCompanySignOut = async () => {
    try {
      const res = await companySignOut()

      if (res.data.success === true) {
        // サインアウト時には各Cookieを削除
        Cookies.remove("_access_token")
        Cookies.remove("_client")
        Cookies.remove("_uid")

        setIsCompanySignedIn(false)

        console.log("Succeeded in sign out")
      } else {
        console.log("Failed in sign out")
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Navbar>

      <LogoAndSearch>
        <Link to="/">
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

      {isMunicipalitySignedIn ? (
        <>
          <UserNav>
            <MyPage href="/municipality/my_page">マイページ</MyPage>
          </UserNav>
          <UserNav>
            <LogOut onClick={handleMunicipalitySignOut}>
              ログアウト
            </LogOut>
          </UserNav>
        </>
      ) : isCompanySignedIn ? (
        <>
          <UserNav>
            <MyPage href="#">マイページ</MyPage>
          </UserNav>
          <UserNav>
            <LogOut onClick={handleCompanySignOut}>
              ログアウト
            </LogOut>
          </UserNav>
        </>
      ) : (
        <>
          <UserNav>
            <MunicipalityNav>
              自治体の方はコチラ
            </MunicipalityNav>
            <Link to="/municipality/sign_up">
              <SignUpOrIn>
                会員登録
              </SignUpOrIn>
            </Link>
            <Link to="/municipality/sign_in">
              <SignUpOrIn>
                ログイン
              </SignUpOrIn>
            </Link>
          </UserNav>
    
          <UserNav>
            <CompanyNav>
              企業の方はコチラ
            </CompanyNav>
            <Link to="/company/sign_up">
              <SignUpOrIn>
                会員登録
              </SignUpOrIn>
            </Link>
            <Link to="/company/sign_in">
              <SignUpOrIn>
                ログイン
              </SignUpOrIn>
            </Link>
          </UserNav>
        </>
      )}

    </Navbar>
  )
}

export default Header