import Vue from 'vue';
import TNWebUI from '@tencent/TNWeb-ui';
import '@tencent/TNWeb-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import clipboard from 'clipboard';
Vue.use(TNWebUI);
new Vue({
  el: '#app', render: h => h(App)
});