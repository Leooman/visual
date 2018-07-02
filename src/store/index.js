import Vue from 'vue'
import Vuex from 'vuex'
import {people} from '@/controller/api'

Vue.use(Vuex)

const state = {
	adminInfo: {
		avatar: 'default.jpg'
	},
}

const mutations = {
	// saveAdminInfo(state, adminInfo){
	// 	state.adminInfo = adminInfo;
	// }
}

const actions = {
	async getPeopleList(){
		try{
			await people({
    			_page:2,
    			_limit:10
    		}).then(res => {
    			console.log(res)
    		}).catch(err => {
    			console.log(err)
    		})
		}catch(err){
			console.log(err)
		}
	}
}

export default new Vuex.Store({
	state,
	actions,
	mutations,
})