import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.js"; // pastikan file ini ada dan benar path-nya

createApp(App).use(router).mount("#app");
