export default [{
    path: '/gojs',
    name: 'gojs',
    component: () => import(/* webpackChunkName: "gojs" */ '../views/gojs/demo.vue')
}]