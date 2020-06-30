import Leaflet from '../views/leaflet/Leaflet.vue'

const routes = [
  {
    path: '/',
    name: 'Leaflet',
    component: Leaflet
  },
  {
    path: '/start',
    name: 'start',
    component: () => import(/* webpackChunkName: "start" */ '../views/threejs/start.vue')
  },
  {
    path: '/GLTFLoader',
    name: 'GLTFLoader',
    component: () => import(/* webpackChunkName: "GLTFLoader" */ '../views/threejs/GLTFLoader.vue')
  },
  {
    path: '/gojs',
    name: 'gojs',
    component: () => import(/* webpackChunkName: "gojs" */ '../views/gojs/demo.vue')
  }
]

export default routes
