import AboutView from '@/views/AboutView.vue';
import GroupView from '@/views/GroupView.vue';
import HomePage from '@/views/HomePage.vue';
import OutreachView from '@/views/OutreachView.vue';
import PublicationsView from '@/views/PublicationsView.vue';
import ResearchView from '@/views/ResearchView.vue';
import ScienceedView from '@/views/ScienceedView.vue';
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/research',
    name: 'Research',
    component: ResearchView
  },
  {
    path: '/publications',
    name: 'Publications',
    component: PublicationsView
  },
  {
    path: '/outreach',
    name: 'Outreach',
    component: OutreachView
  },
  {
    path: '/group',
    name: 'Group',
    component: GroupView
  },
  {
    path: '/science-ed',
    name: 'ScienceEd',
    component: ScienceedView
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
