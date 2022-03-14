import client from "./client"

// 新規案件作成
export const createProject = (params) => {
  return client.post("projects", params)
}