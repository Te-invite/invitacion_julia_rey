import { createRouter, createWebHashHistory } from 'vue-router';
import Invitacion from '../views/Home.vue';
const routes=[
    {
        path:'/',
        name:'Invitacion',
        component: Invitacion
    },
    
];
const router = createRouter({
    history: createWebHashHistory(),
    routes
  });
  
  export default router;