import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import router from "./plugins/routes";

const app = createApp(App);

app.use(router);
app.mount("#app");