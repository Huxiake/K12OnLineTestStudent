import request from '@/utils/request'
import qs from 'qs'

export function login(loginName, password) {
  const loginInfo = {
    'loginName': loginName,
    'password': password
  }
  const data = qs.stringify(loginInfo)
  return request({
    url: '/v1/login/studentPortal/web/login?' + data,
    method: 'post'
  })
}

export function getLoginStatus() {
  return request({
    url: '/v1/login/teacher/web/verify_login',
    method: 'POST'
  })
}

// 获取当前用户信息
export function getLoginUser() {
  return request({
    url: 'v1/teacher/myCenter/getLoginUser',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
