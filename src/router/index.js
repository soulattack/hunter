import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'
import test from '@/components/test'
import personal from '@/components/personal'
import blacklist from '@/components/blackList'
import deposit from '@/components/deposit'
import service from '@/components/service'
import messagecenter from '@/components/messageCenter'
import loginempower from '@/components/loginEmpower'
import login from '@/components/login'
import recharge from '@/components/recharge'
import mytask from '@/components/tasksMine'
import paysuccess from '@/components/PaySuccess'
import taskdetail from '@/components/TaskDetail'
import selecttasktype from '@/components/SelectTaskType'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/personal',
      name: 'personal',
      component: personal
    },
    {
      path: '/blacklist',
      name: 'blacklist',
      component: blacklist
    },
    {
      path: '/deposit',
      name: 'deposit',
      component: deposit
    },
    {
      path: '/service',
      name: 'service',
      component: service
    },
    {
      path: '/messagecenter',
      name: 'messagecenter',
      component: messagecenter
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/loginempower',
      name: 'loginempower',
      component: loginempower
    },
    {
      path: '/recharge',
      name: 'recharge',
      component: recharge
    },
    
    {
      path: '/mytask',
      name: 'mytask',
      component: mytask
    },
    {
      path: '/taskdetail',
      name: 'taskdetail',
      component: taskdetail
    },
    {
      path: '/paysuccess',
      name: 'paysuccess',
      component: paysuccess
    },
    {
      path: '/selecttasktype',
      name: 'selecttasktype',
      component: selecttasktype
    }
    
    
  ]
})
