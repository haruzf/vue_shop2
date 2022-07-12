import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/global.css'

// 手动配置element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import { Button, Form, FormItem, Input } from 'element-ui';
// import { Form, FormItem } from 'element-ui';
// import { Input } from 'element-ui';

Vue.use(ElementUI)
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})