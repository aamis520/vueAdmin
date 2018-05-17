import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [{
  path: '/login',
  component: _import('login/index'),
  hidden: true
},
{
  path: '/404',
  component: _import('404'),
  hidden: true
},

{
  path: '/',
  component: Layout, // 首页
  redirect: '/dashboard',
  name: 'dashboard',
  hidden: true,
  meta: { title: '首页', icon: '' },
  children: [{
    path: 'dashboard',
    component: _import('dashboard/index'),
    meta: { title: '首页', icon: '' }
  }]
},
{
	path: '/marketing',
	name: 'marketing',
  component: Layout,
  redirect: '/marketing/new',
  meta: { title: '营销中心', icon: '' },
  children: [
  	{
  		path: 'new',
	    name: 'marketingNew',
	    component: _import('marketing/new'),
	    meta: { title: '新品', icon: '' }
  	},
  	{
  		path: 'shakPrice',
	    name: 'marketingShakPrice',
	    component: _import('marketing/shakPrice'),
	    meta: { title: '惊天价', icon: '' }
  	},
  	{
  		path: 'zero',
	    name: 'marketingZeroBuy',
	    component: _import('marketing/zeroBuy'),
	    meta: { title: '0元购', icon: '' }
  	},
  	{
  		path: 'byself',
	    name: 'marketingByself',
	    component: _import('marketing/bySelf'),
	    meta: { title: '自己拼', icon: '' }
  	},
  	{
  		path: 'together',
	    name: 'marketingTogether',
	    component: _import('marketing/together'),
	    meta: { title: '多人拼', icon: '' }
  	},
  	{
  		path: 'everyone',
	    name: 'marketingEveryone',
	    component: _import('marketing/everyone'),
	    meta: { title: '每人拼', icon: '' }
  	},
  	{
  		path: 'bitEnd',
	    name: 'marketingBitEnd',
	    component: _import('marketing/bitEnd'),
	    meta: { title: '拼到底', icon: '' }
  	},
  	{
  		path: 'groupBuy',
	    name: 'marketingGroupBuy',
	    component: _import('marketing/groupBuy'),
	    meta: { title: '团购', icon: '' }
  	},
  	{
  		path: 'hot',
	    name: 'marketingHot',
	    component: _import('marketing/hot'),
	    meta: { title: '爆款', icon: '' }
  	},
  	{
  		path: 'seckill',
	    name: 'marketingSeckill',
	    component: _import('marketing/seckill'),
	    meta: { title: '秒杀', icon: '' }
  	},
  ]
},
{
  path: '*',
  redirect: '/404',
  hidden: true
}
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})
