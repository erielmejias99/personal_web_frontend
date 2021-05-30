import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import vuetify from './plugins/vuetify';

import VueMeta from 'vue-meta'

import '@mdi/font/css/materialdesignicons.min.css'

import axios from 'axios'
const baseURL = process.env.NODE_ENV === 'production' ? 'https://erielmejias99-back.herokuapp.com/api/' : 'http://localhost:8000/api/';

axios.defaults.baseURL = baseURL

Vue.config.productionTip = false

Vue.use(VueMeta,{
  keyName: 'metaInfo',
  attribute: 'data-vue-meta',
  ssrAttribute: 'data-vue-meta-server-rendered',
  tagIDKeyName: 'vmid',
  refreshOnceOnNavigation: true
})

new Vue({
  router,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount('#app')
