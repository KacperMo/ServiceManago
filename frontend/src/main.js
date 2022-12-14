import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./lib/axios";
import { createVuestic } from "vuestic-ui";
import "./assets/main.css";
import "vuestic-ui/css";

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(createVuestic());
app.mount("#app");
