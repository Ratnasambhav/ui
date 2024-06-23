import { createWebHistory, createRouter } from 'vue-router';

import Home from "./pages/Home.vue";
import NowPlaying from './pages/NowPlaying.vue';
import GeneratingColorsInCss from './pages/writing/GeneratingColorsInCss.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: '/writing', component: Home },
    { path: "/now", component: NowPlaying },
    { path: '/writing/generating-colors-in-css', component: GeneratingColorsInCss }
  ]
})
