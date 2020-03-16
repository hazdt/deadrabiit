import Vue from 'vue'
import VueHotkey from 'v-hotkey'
import VueClipboard from 'v-clipboard'

import App from './App.vue'

Vue.use(VueHotkey);
Vue.use(VueClipboard);

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
