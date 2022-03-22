import client from "./client"

// 新規落札作成
export const createSuccess = (params) => {
  return client.post(`projects/${params.projectId}/successes`, params)
}