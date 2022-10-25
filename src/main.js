import { createApp } from "vue";
import Routes from "./routes";
import App from "./App.vue";
import "./global.css";

createApp(App).use(Routes).mount("#app");
