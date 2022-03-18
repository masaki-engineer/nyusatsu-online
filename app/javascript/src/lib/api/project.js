import client from "./client"

// 新規案件作成
export const createProject = (params) => {
  return client.post("projects", params)
}

// 直近に登録された案件をMAX5件取得
export const getRecentProjects = () => {
  return client.get("projects/recent")
}

// 検索条件(query)に該当する案件を全て取得
export const searchProjects = (query) => {
  return client.get(`projects/search${query}`)
}

// IDから案件情報を取得
export const getProjectById = (id) => {
  return client.get(`projects/${id}`)
}