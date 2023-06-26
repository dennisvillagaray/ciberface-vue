import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Chat from "@/views/_chat.vue";
import DefaultLayout from "@/layouts/Default.vue";
import Login from "@/views/auth/Login.vue";
import Register from "@/views/auth/Register.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
        meta: { requiresAuth: true },
      },
      {
        path: "",
        name: "Login",
        component: Login,
        meta: { hiddenChatModal: true },
      },
      {
        path: "/register",
        component: Register,
        meta: { hiddenChatModal: true },

      },
      {
        path: '/chat/:slug',
        name: 'Chat',
        component: Chat,
        meta: { hiddenChatModal: true, requiresAuth: true },
      },
    ]
  }
];


const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const user = localStorage.getItem("user");

  if (requiresAuth && !user) {
    if (to.name === "Login") {
      next();
    } else {
      router.push({ name: "Login" });
    }
  } else {
    next();
  }
});

export default router;
