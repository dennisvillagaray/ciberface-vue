import { createStore } from 'vuex'

import state from './state'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

import chat from './modules/chat'
import user from './modules/user'

const store = createStore({
  state,
  getters,
  actions,
  mutations,
  modules: { chat, user }
})

export default store;