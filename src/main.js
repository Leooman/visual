import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'
// 引入插件
import './plugins'

Vue.config.productionTip = false;

router.beforeEach((to,from,next) => {
	// if(to.matched.some( m => m.meta.auth)){
  	if (to.meta.auth) {
    	// 根据业务需要修改登陆判断条件
	    if (store.state.isLogin) {
	      	next()
	    } else {
	      	Message('请先登录！')
	      	next({
	      		path: '/',
	      		// query:{ Rurl: to.fullPath}
	      	})
	    }
	}else{
		next()
	}
})

new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
})
