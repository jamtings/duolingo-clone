import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LearnView from '../views/LearnView.vue'
import LanguageSelectView from '../views/LanguageSelectView.vue'
import LessonView from '../views/LessonView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/languages',
    name: 'languages',
    component: LanguageSelectView
  },
  {
    path: '/learn/:lang?',
    name: 'learn',
    component: LearnView
  },
  {
    path: '/lesson/:unitId/:levelId',
    name: 'lesson',
    component: LessonView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router 