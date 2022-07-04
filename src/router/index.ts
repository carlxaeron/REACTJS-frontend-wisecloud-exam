import { createRouter, createWebHistory } from 'vue-router';
import Game from '@/views/Game.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Game,
  },
  {
    path: '/game/:gameId',
    name: 'Game',
    component: Game,
  },
];

const router = createRouter({ history: createWebHistory(), routes });
export default router;
