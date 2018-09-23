import Layout from '../layout/Layout.vue'
import { Main, Photos } from '../pages'

export const routeNames = [
  {name: 'main', component: Main},
  {name: 'photos', component: Photos}
]

const routes = [
  {path: '/:id', component: Layout,
    children: routeNames.map(route => {
      return {
        path: route.name,
        component: {template: route.component}
      }
    })
  }
]

export default routes;