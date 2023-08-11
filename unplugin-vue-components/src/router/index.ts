import Vue from 'vue'
import VueRouter from 'vue-router'
import type { RouteConfig, Route, NavigationGuardNext } from 'vue-router'
Vue.use(VueRouter)
// 定义路由
const routes: Array<RouteConfig> = [
	{
		path: '/',
		redirect: '/home',
		component: () => import('@/components/Layout/index.vue'),
		children: [
			{
				path: '/home',
				name: 'home',
				component: () => import('@/views/home/index.vue'),
				meta: {
					layout: true,
				},
			},
		],
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/login/index.vue'),
	},
]

// 创建实例
const router = new VueRouter({
	mode: 'history',
	base: '/',
	routes: routes,
	// 页面滚动行为
	scrollBehavior(_to: Route, _from: Route, savedPosition: void | { x: number; y: number }) {
		if (savedPosition) {
			return savedPosition
		} else {
			return { x: 0, y: 0 }
		}
	},
})

// 路由操作
router.beforeEach((_to: Route, _from: Route, next: NavigationGuardNext) => {
	next()
})

export default router
