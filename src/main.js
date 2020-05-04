import Vue from "vue"
import VueRouter from "vue-router"
import App from "./App.vue"
import "./public-path"
import routes from "./router"

Vue.config.productionTip = false
Vue.use(VueRouter)

let router = null
let instance = null

export async function bootstrap() {
  
}

export async function mount() {
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/micro-frontends/vue' : process.env.BASE_URL,
    mode: "history",
    routes
  })
  instance = new Vue({
    router,
    render: h => h(App)
  }).$mount("#app")
}

export async function unmount() {
  instance.$destroy()
  instance = null
  router = null
}

window.__POWERED_BY_QIANKUN__ || mount()