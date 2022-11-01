/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
const state = {
  user: {},
};

const actions = {};

const getters = {};

const mutations = {
  updateUser(state, user) {
    state.user = user;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
