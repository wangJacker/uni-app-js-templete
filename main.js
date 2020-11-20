import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
import store from '@/store/index.js';
import httpInterceptor from '@/common/http.interceptor.js'
import httpApi from '@/common/http.api.js'
let vuexStore = require("@/store/$u.mixin.js");
Vue.config.productionTip = false

App.mpType = 'app'
Vue.use(uView);
Vue.mixin(vuexStore)
const app = new Vue({
	store,
	...App
})
// 这里需要写在最后，是为了等Vue创建对象完成，引入"app"对象(也即页面的"this"实例)
Vue.use(httpInterceptor, app)
// http接口API集中管理引入部分
Vue.use(httpApi, app)
app.$mount()
