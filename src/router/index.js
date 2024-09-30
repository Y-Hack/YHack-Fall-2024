import { createRouter, createWebHistory } from "vue-router";
import HackYale from "../views/HackYale.vue";
import TeamHacks from "../views/TeamHacks.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HackYale,
    },
    {
      path: "/team",
      name: "team",
      component: TeamHacks,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ],
});

export default router;
