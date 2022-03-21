import client from "./client"

// 新規案件作成
export const createBid = (params) => {
  return client.post(`projects/${params.projectId}/bids`, params)
}