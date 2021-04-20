import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8000/api/'
 // ブラウザのクッキーをバックエンド側に送信するための設定
axios.defaults.withCredentials = true

createApp(App).use(store).use(router).mount('#app')
