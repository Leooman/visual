/**
 * 配置编译环境和线上环境之间的切换
 * 
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * 
 */

let baseUrl = ''; 
let routerMode = 'history';
if (process.env.NODE_ENV == 'development') {
	if(process.env.TYPE == 'local') baseUrl = 'http://localhost:3000'
	if(process.env.TYPE == 'online') baseUrl = 'http://localhost:8080'
}else{
	baseUrl = (process.env.HOST == 'vadmin') ? '/Vadmin' : ''
}

export {
	baseUrl,
	routerMode
}