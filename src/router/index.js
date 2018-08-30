import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect:"/fbgl",
      component:r => require.ensure([],() =>  r(require('../pages/index/index.vue')), 'index'),
      children:[
        {
          path: '/fbgl',
          name: 'fbgl',
          component: r => require.ensure([], () => r(require('../pages/fbgl/index.vue')), 'index')
        },{
          path: '/qygl',
          name: 'qygl',
          component: r => require.ensure([], () => r(require('../pages/qygl/index.vue')), 'index')
        },{
          path: '/flkx',
          name: 'flkx',
          component: r => require.ensure([], () => r(require('../pages/flkx/index.vue')), 'index')
        },{
          path: '/xwzx',
          name: 'xwzx',
          component: r => require.ensure([], () => r(require('../pages/xwzx/index.vue')), 'index')
        }
      ]
    },
    {
      path: '/*',
      redirect:"/fbgl",
    }
  ]
})
