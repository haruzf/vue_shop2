import Vue from 'vue'
import App from './App'
import router from './router'
// 导入全体样式表
import '@/assets/css/global.css'
// 导入字体图标
import '@/assets/fonts/iconfont.css'

import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
Vue.prototype.$http = axios

// 手动配置element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import { Button, Form, FormItem, Input, Message } from 'element-ui';
// import { Form, FormItem } from 'element-ui';
// import { Input } from 'element-ui';

Vue.use(ElementUI)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.prototype.$message = Message

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})