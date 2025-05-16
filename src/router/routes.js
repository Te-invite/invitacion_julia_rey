import { createRouter, createWebHistory } from "vue-router";
import Invitacion from "../views/Invitacion.vue";

const routes=[
    {path:'/', name:'Invitacion', component: Invitacion},
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
  scrollBehavior(to) {
    if (to.meta.scrollTo) {
      return {
        el: `#${to.meta.scrollTo}`,
        behavior: 'smooth'
      }
    }
    return { top: 0 }
  }
  });

export default router;