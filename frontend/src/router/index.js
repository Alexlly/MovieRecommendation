import {createRouter, createWebHistory} from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ResultsPage from '../views/ResultsPage.vue'
import AboutPage from '../views/AboutPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/results',
    name: 'Result',
    component: ResultsPage,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router