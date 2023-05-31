import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import router from "./plugins/routes";
import 'vue-material-design-icons/styles.css';

const app = createApp(App);

app.use(router);
app.mount("#app");
