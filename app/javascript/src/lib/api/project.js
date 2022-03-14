import client from "./client"

// 新規案件作成
export const createProject = (params) => {
  return client.post("projects", params)
}

// 直近に登録された案件をMAX5件取得
export const getRecentProjects = () => {
  return client.post("projects/recent")
}