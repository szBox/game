import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Page from '@/components/page'
import Head from '@/templates/head-pic'
import Gift from '@/templates/gift'
import Message from '@/templates/message'
import Recharge from '@/templates/recharge'
import Home from '@/templates/home'
import Index from '@/templates/index'
import Interaction from '@/templates/interaction'
import Market from '@/templates/market'
import Among from '@/templates/among'
import Give from '@/templates/give'
import Give_sel from '@/templates/give_sel'
import GiveCommon from '@/components/give_common'
Vue.use(Router)

// export 的意思是暴露出来东西
export default new Router({
  routes: [
    {
      path: '/hhh',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/head',
      name: 'Head',
      component: Head
    },
    {
      path: '/page',
      name: 'Page',
      component: Page
    },
    {
      path: '/gift',
      name: 'Gift',
      component: Gift
    },
    {
      path: '/among',
      name: 'Among',
      component: Among
    },
    {
      path: '/give',
      name: 'Give',
      component: Give,
      children:[
      	{
      		path:'give_sel',
      		name:'Give_sel',
      		component:Give_sel
      	}
      ]
    },
    {
      path: '/give_common',
      name: 'GiveCommon',
      component: GiveCommon
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: '/home/index',
      children: [
        {
          path: '/home/index',
          name: 'Index',
          component: Index
        },
        {
          path: '/home/recharge',
          name: 'Recharge',
          component: Recharge
        },
        {
          path: '/home/interaction',
          name: 'Interaction',
          component: Interaction
        },
        {
          path: '/home/market',
          name: 'Market',
          component: Market
        }
      ]
    }
  ]
})
