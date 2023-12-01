import { createStore } from "vuex";

const defaultUser = {
  id: '',
  token: '',
  username: '',
  password: '',
};

const ModuleKeyword = {
  state() {
    return {
      keyword: ''
    }
  },
  mutations: {
    setKeyword(state, payload) {
      state.keyword = payload.keyword;
    }
  },
  actions: {
    setKeyword(_, { commit }, payload) {
      commit('setKeyword', payload);
    }
  }
}

const ModuleUser = {
  state() {
    return {
      id: '',
      token: '',
      username: '',
      password: '',
    }
  },
  getters: {
    isLogin: (state) => {
      console.log('getter:', state.token);
      return state.token ? true : false;
    }
  },
  mutations: {
    login: (state, payload) => {
      Object.assign(state, payload);
    },
    logout: (state, payload) => Object.assign(state, payload),
  },
  actions: {
    login: ({ commit }, payload) => {
      console.log('action:', payload)
      if (payload.token) {
        localStorage.setItem('token', payload.token);
      }
      commit('login', payload)
    },
    logout: ({ commit }) => commit('logout', defaultUser),
  }
}

const store = createStore({
  modules: {
    kw: ModuleKeyword,
    user: ModuleUser
  }
});

export default store;
