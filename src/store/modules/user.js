import { login, getLoginUser, getLoginStatus } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    token: getToken(),
    userId: '',
    name: '',
    avatar: '',
    roles: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_USERID: (state, userId) => {
      state.userId = userId
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password).then(response => {
          const data = response.data
          if (data.errorMsg === '操作成功') {
            setToken('7681ea41')
            commit('SET_TOKEN', '7681ea41')
            resolve(response)
          }
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取当前用户信息
    GetLoginUser({ commit, state }) {
      return new Promise((resolve, reject) => {
        getLoginUser(state.t).then(response => {
          if (response.data.errorMsg === '操作成功') {
            const data = response.data.data
            commit('SET_NAME', data.name)
            commit('SET_USERID', data.id)
            commit('SET_AVATAR', data.headImg)
          }
        })
      })
    },

    // 判断登录状态
    GetLoginStatus({ commit, state }) {
      return new Promise((resolve, reject) => {
        getLoginStatus(state.token).then(response => {
          const data = response.data
          // if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
          // commit('SET_ROLES', data.roles)
          // } else {
          //   reject('getInfo: roles must be a non-null array !')
          // }
          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  }
}

export default user
