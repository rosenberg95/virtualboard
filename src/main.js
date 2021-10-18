import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import * as firebase from 'firebase/compat'
import VueYoutube from 'vue-youtube'

Vue.use(VueYoutube)
Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyAwJhj6l_v3UFN7eGnimKmXKMupVA4qFwM',
      authDomain: 'v-board-3ef21.firebaseapp.com',
      projectId: 'v-board-3ef21',
      storageBucket: 'v-board-3ef21.appspot.com',
      messagingSenderId: '932493542288',
      appId: '1:932493542288:web:879fa091f5e511a7836915',
    })
  }
}).$mount('#app')
