import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      layout: "default",
      title: "Жилфонд",
    },
    component: () => import("@/pages/home/Page.vue"),
  },
  {
    path: "/user/:id",
    name: "user",
    meta: {
      layout: "default",
    },
    component: () => {},
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export { router };
