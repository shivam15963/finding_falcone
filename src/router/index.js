import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import FindFalcone from '@/components/FindFalcone'
import AssignVehicles from '@/components/AssignVehicles'
import Result from '@/components/Result'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
    	path: '/findfalcone',
    	name: 'FindFalcone',
    	component: FindFalcone
    },
    {
    	path: '/assignvehicles',
    	name: 'AssignVehicles',
    	component: AssignVehicles
    },
    {
    	path: '/result',
    	name: 'Result',
    	component: Result
    }
  ]
})
