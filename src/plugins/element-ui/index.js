import Vue from 'vue'
import { Message,Notification,Button,Form,FormItem,Input,Card} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
export default {
	install (Vue){
		Vue.use(Button)
		Vue.use(Form)
		Vue.use(FormItem)
		Vue.use(Input)
		Vue.use(Card)
		Vue.prototype.$message = Message
		Vue.prototype.$notify = Notification
	}
}
