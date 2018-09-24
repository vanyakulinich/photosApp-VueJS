import Layout from '../layout/Layout.vue'
import { Main, Photos, Illustrations, Vectors } from '../pages'

export const routesNames = [
  'main', 'photos', 'illustrations', 'vectors'
]


const routes = [
  {path: '/', component: Layout,
    children: [
      {path: 'main', component: Main},
      {path: 'photos', component: Photos},
      {path: 'illustrations', component: Illustrations},
      {path: 'vectors', component: Vectors}
    ]
  }
];

export default routes;