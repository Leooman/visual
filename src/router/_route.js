const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const home = r => require.ensure([], () => r(require('@/page/home')), 'home');

const routes = [
	{
		path: '/',
		component: login
	},
	{
		path: '/home',
		component: home,
		meta:{auth:true}
	},
]

export default routes