import client from "./client"
import Cookies from "js-cookie"

// サインアップ（新規アカウント作成）
export const signUp = (params) => {
  return client.post("municipality", params)
}

// サインイン（ログイン）
export const signIn = (params)  => {
  return client.post("municipality/sign_in", params)
}

// サインアウト（ログアウト）
export const signOut = () => {
  return client.delete("municipality/sign_out", { headers: {
    "access-token": Cookies.get("_access_token"),
    "client": Cookies.get("_client"),
    "uid": Cookies.get("_uid")
  }})  
}

// 認証済みのユーザーを取得
export const getCurrentMunicipality = () => {
  if (!Cookies.get("_access_token") || !Cookies.get("_client") || !Cookies.get("_uid")) return
  return client.get("/municipality/sessions", { headers: {
    "access-token": Cookies.get("_access_token"),
    "client": Cookies.get("_client"),
    "uid": Cookies.get("_uid")
  }})
}