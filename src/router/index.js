import Leaflet from '../views/Leaflet.vue'

const routes = [
  {
    path: '/',
    name: 'Leaflet',
    component: Leaflet
  },
  {
    path: '/GLTFLoader',
    name: 'GLTFLoader',
    component: () => import(/* webpackChunkName: "GLTFLoader" */ '../views/GLTFLoader.vue')
  }
]

export default routes
