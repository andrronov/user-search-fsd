import "@/shared/assets/base.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { router } from "./app/router/routes";
import App from "../src/app/App.vue";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia).use(router).mount("#app");
