import Vue from 'vue'
import Vuex from 'vuex'
import {setStore,getStore} from '@/controller/utils'
Vue.use(Vuex)

const state = {
	isLogin:false,
	userInfo:{}
}

const mutations = {
	changeLoginStatus(state, isLogin){
		state.isLogin = isLogin;
	}
}

const actions = {
	// async getUserList(){
	// 	try{
	// 		await user({}).then(res => {
 //    			console.log(res)
 //    		}).catch(err => {
 //    			console.log(err)
 //    		})
	// 	}catch(err){
	// 		console.log(err)
	// 	}
	// }
}

for(var item in state){
    getStore(item)?state[item] = JSON.parse(getStore(item)): false;
}
export default new Vuex.Store({
	state,
	actions,
	mutations,
})