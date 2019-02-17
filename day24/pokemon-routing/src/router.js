import Vue from 'vue'
import VueRouter from 'vue-router'
import BlastoiseCard from './components/BlastoiseCard.vue'
import CharizardCard from './components/CharizardCard.vue'
import VenusaurCard from './components/VenusaurCard.vue'
import NotFound from './components/NotFound'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: CharizardCard },
  { path: '/charizard', component: CharizardCard },
  { path: '/blastoise', component: BlastoiseCard },
  { path: '/venusaur', component: VenusaurCard },
  { path: '*', component: NotFound }
];

export const router = new VueRouter({
  mode: 'history',
  routes
});
