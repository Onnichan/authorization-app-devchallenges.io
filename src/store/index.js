import { createStore, createLogger } from "vuex";
import auth from "./modules/auth.module";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    auth,
  },
  state: {},
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
