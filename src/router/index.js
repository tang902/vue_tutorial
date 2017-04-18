import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import TimeEntries from '@/components/TimeEntries'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },{
    	path:'/home',
    	name:'Home',
    	component:Home
    },{
    	path:'/time-entries',
    	component:TimeEntries,
    	children:[{
    		path:'log-time',
    		component:resolve=>require(['../components/LogTime.vue'],resolve)
    	}]
    }
  ]
})

