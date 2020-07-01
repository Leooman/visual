import home from '../views/home.vue'
import Leaflet from './_leaflet'
import Gojs from './_gojs'
import Three from './_three'

const routes = [
  {
    path:'/',
    component:home,
    redirect:'/gojs',
    children:[
      ...Leaflet,
      ...Gojs,
      ...Three
    ]
  }
]

export default routes
