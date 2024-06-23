import { createApp } from 'vue';
import { TooltipDirective } from '@ui/ui-lib';

import router from "./router";

import App from './App.vue';

import './style.css';

const app = createApp(App);
app.directive('tooltip', TooltipDirective);
app.use(router).mount('#app');
