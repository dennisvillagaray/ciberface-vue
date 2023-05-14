import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import DefaultLayout from "@/layouts/Default.vue";
import Login from "@/pages/Login.vue";

const a = false;

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "",
        // name: "Home",
        component: a ? Home : Login
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
