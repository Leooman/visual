import home from '../views/home.vue'
import Leaflet from './_leaflet'
import LhnUI from './_lhnui'
import Three from './_three'

const routes = [
  {
    path:'/',
    component:home,
    redirect:'/start',
    children:[
      ...Leaflet,
      ...LhnUI,
      ...Three
    ]
  }
]

export default routes
