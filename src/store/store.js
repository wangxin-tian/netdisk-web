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
    setKeyword({ commit }, payload) {
      commit('setKeyword', payload);
    }
  }
}

const ModuleAudio = {
  state() {
    return {
      url: '',
      name: ''
    }
  },
  getters: {
    getUrl(state) {
      return state.url;
    },
    getName(state) {
      return state.name;
    }
  },
  mutations: {
    setMusic(state, payload) {
      state.url = payload.url;
      state.name = payload.name;
    }
  },
  actions: {
    setMusic({ commit }, payload) {
      commit('setMusic', payload);
    }
  }
}

const ModuleVideo = {
  state() {
    return {
      url: '',
      name: ''
    }
  },
  getters: {
    getUrl(state) {
      return state.url;
    },
    getName(state) {
      return state.name;
    }
  },
  mutations: {
    setVideo(state, payload) {
      state.url = payload.url;
      state.name = payload.name;
    }
  },
  actions: {
    setVideo({ commit }, payload) {
      commit('setVideo', payload);
    }
  }
}

const ModuleText = {
  state() {
    return {
      value: '',
      name: '',
      params: {}
    }
  },
  getters: {
    getText(state) {
      return state.value;
    },
    getName(state) {
      return state.name;
    }
  },
  mutations: {
    setText(state, payload) {
      state.value = payload.value;
      state.name = payload.name;
      state.params = payload.params;
    }
  },
  actions: {
    setText({ commit }, payload) {
      commit('setText', payload);
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
    },
    getUserid: (state) => {
      return state.id;
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
    user: ModuleUser,
    audio: ModuleAudio,
    video: ModuleVideo,
    text: ModuleText
  }
});

export default store;
