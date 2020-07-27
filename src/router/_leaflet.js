export default [{
    path: '/leaflet',
    name: 'Leaflet',
    component: () => import(/* webpackChunkName: "leaflet" */ '../views/leaflet/Leaflet.vue')
}]