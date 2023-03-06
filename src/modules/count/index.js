const count = {
  state: () => {
    number: 0;
  },
  mutations: {
    INCREMENT(state) {
      state.number += 1;
    },
    DECREMENT(state) {
      state.number -= 1;
    },
    RESET(state) {
      state.number = 0;
    },
  },
  actions: {},
  getters: {
    doubleCount(state) {
      state.number += 100;
    },
  },
};

export default count;
