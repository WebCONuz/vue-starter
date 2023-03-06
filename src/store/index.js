import { createStore } from "vuex";
import count from "../modules/count";

export const store = createStore({
  modules: {
    count,
  },
});
