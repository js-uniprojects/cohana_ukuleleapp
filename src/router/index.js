import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Information from '../views/Information'
import Preparation from '../views/Preparation'
import Starting from '../views/Learn'
import Story from '../views/Informations/Story'
import Anatomy from '../views/Informations/Anatomy'
import Types from '../views/Informations/Types'
import Tuning from '../views/Preparations/Tuning'
import Posture from '../views/Preparations/Posture'
import Strumming from '../views/Preparations/Strumming'
import LevelC from '../views/Starting/LevelC'
import LevelG from '../views/Starting/LevelG'
import LevelF from '../views/Starting/LevelF'

Vue.use(VueRouter);





export default new VueRouter({
  routes: [
    {
      path: '/',
      name:Home,
      component:Home
    },
    {
      path: '/information',
      name:'Information',
      component: Information
    },
    {
      path: '/preparation',
      name:'Preparation',
      component: Preparation
    },
    {
      path: '/learn',
      name:'Learn',
      component: Starting
    },
    {
      path: '/story',
      name:'Story',
      component: Story
    },
    {
      path: '/anatomy',
      name:'anatomy',
      component: Anatomy
    },
    {
      path: '/types',
      name:'types',
      component: Types
    },
    {
      path: '/tuning',
      name:'tuning',
      component: Tuning
    },
    {
      path: '/posture',
      name:'posture',
      component: Posture
    },
    {
      path: '/strumming',
      name:'strumming',
      component: Strumming
    },
    {
      path: '/levelc',
      name:'levelc',
      component: LevelC
    },
    {
      path: '/levelg',
      name:'levelg',
      component: LevelG
    },
    {
    path: '/levelf',
    name:'levelf',
    component: LevelF
  },

  ],
});