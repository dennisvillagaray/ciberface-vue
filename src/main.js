import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import router from "./plugins/routes";
import 'vue-material-design-icons/styles.css';
import store from './store';

const app = createApp(App);

app.use(router);
app.use(store);
app.mount("#app");
