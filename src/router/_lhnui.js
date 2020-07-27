export default [{
    path: '/diagram',
    name: 'diagram',
    component: () => import(/* webpackChunkName: "diagram" */ '../views/diagram/index.vue')
}]