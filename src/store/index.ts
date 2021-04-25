import { Commit, createStore } from 'vuex'
import {User} from '@/models/user'
import UserModule from '@/store/UserModule'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    User: UserModule
  }
})
