import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router";
import { setupAnalytics } from "./plugins/analytics";

const app = createApp(App);
app.use(vuetify);
app.use(router);
setupAnalytics(app, router);
app.mount("#app");
