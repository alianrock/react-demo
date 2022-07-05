import request from '../utils/http'

export function getRecommends() {
  return request({
    url: '/api/recomendlist',
    method: 'get'
  })
}

export function getRank(data) {
  return request({
    url: '/api/rank',
    data,
    method: 'get'
  })
}