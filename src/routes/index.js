import Layout from '../layout/Layout.vue'
import { Main, Photos } from '../pages'

export const routesNames = [
  'main', 'photos',
]


const routes = [
  {path: '/', component: Layout,
    children: [
      {path: 'main', component: Main},
      {path: 'photos', component: Photos},
    ]
  }
];

export default routes;