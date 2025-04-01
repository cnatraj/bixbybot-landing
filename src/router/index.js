import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Waitlist from "../views/Waitlist.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/waitlist",
    name: "Waitlist",
    component: Waitlist,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
