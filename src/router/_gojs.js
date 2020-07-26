export default [{
    path: '/gojs',
    name: 'gojs',
    component: () => import(/* webpackChunkName: "gojs" */ '../views/gojs/demo.vue')
}, {
    path: '/diagram',
    name: 'diagram',
    component: () => import(/* webpackChunkName: "diagram" */ '../views/diagram/index.vue')
}]