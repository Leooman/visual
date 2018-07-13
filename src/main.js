import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 引入插件
import './plugins'

Vue.config.productionTip = false;

new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
})
