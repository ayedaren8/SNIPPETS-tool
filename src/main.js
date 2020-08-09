import Vue from 'vue';
import TNWebUI from '@tencent/TNWeb-ui';
import '@tencent/TNWeb-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import Clipboard from 'clipboard';
import Storage from '@/storage/storage.js'
Vue.prototype.Storage=Storage
Vue.prototype.Clipboard=Clipboard
Vue.use(TNWebUI);
new Vue({
  el: '#app', render: h => h(App)
});