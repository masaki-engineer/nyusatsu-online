import client from "./client"
import Cookies from "js-cookie"

// サインアップ（新規アカウント作成）
export const signUp = (params) => {
  return client.post("company", params)
}

// サインイン（ログイン）
export const signIn = (params)  => {
  return client.post("company/sign_in", params)
}

// サインアウト（ログアウト）
export const companySignOut = () => {
  return client.delete("company/sign_out", { headers: {
    "access-token": Cookies.get("_access_token"),
    "client": Cookies.get("_client"),
    "uid": Cookies.get("_uid")
  }})  
}

// 認証済みのユーザーを取得
export const getCurrentCompany = () => {
  if (!Cookies.get("_access_token") || !Cookies.get("_client") || !Cookies.get("_uid")) return
  return client.get("/company/sessions", { headers: {
    "access-token": Cookies.get("_access_token"),
    "client": Cookies.get("_client"),
    "uid": Cookies.get("_uid")
  }})
}

// IDから企業情報を取得
export const getCompanyById = (id) => {
  return client.get(`companies/${id}`)
}