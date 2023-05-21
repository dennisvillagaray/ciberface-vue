import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import DefaultLayout from "@/layouts/Default.vue";
import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";

const a = true;

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: a ? Home : Login
      },
      {
        path: "/register",
        component: Register
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
