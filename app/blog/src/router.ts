import { createMemoryHistory, createRouter } from 'vue-router';

import Home from "./pages/Home.vue";
import NowPlaying from './pages/NowPlaying.vue';

export default createRouter({
  history: createMemoryHistory(),
  routes: [{ path: "/", component: Home }, { path: "/now", component: NowPlaying }]
})
