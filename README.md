Vadmin `vue基础项目模板`
=====

## 项目概述:coffee:

[Vadmin](https://github.com/Leooman/Vadmin) 是一套基于vue2.0的基础前后端分离项目模板，内部集成`vue-router`路由管理，`axios`http请求库，`vuex`状态管理，`element-ui`组件库，基于`webpack`模块管理，支持`ES6`语法

## 开发方式

> 本地模拟数据开发

基于[json-server](https://github.com/typicode/json-server)模拟测试服务和[faker](https://github.com/Marak/faker.js)模拟测试数据，项目测试用例路径`src/mock/`

服务启动`json-server src/mock/db.js --routes src/mock/route.json`，默认调用3000端口，加上参数 `--port [端口号]` 调用指定端口号，本地模拟数据开发方式：

```
npm run mock

npm run local
```

> 本地调用接口开发

```
npm run dev
```

> 项目打包集成

```
npm run build
```




## 项目结构

`master`分支只提供最基础的项目架构，如需添加布局结构，需求功能，请自行创建其他分支。项目结构：

```
├─src                   项目应用目录
│  ├─assets             静态资源目录
│  ├─components         组件目录
│  ├─config             项目配置目录
│  │  ├─axios.js        axios http请求公用文件
│  │  └─env.js          项目环境配置文件
│  │
│  ├─controller         项目控制器目录
│  │  ├─api.js          后台接口统一调用文件
│  │  └─utils.js        项目共用方法文件
│  │
│  ├─mock               模拟测试数据目录
│  ├─page               项目页面目录
│  ├─plugins            插件目录
│  ├─router             路由配置目录
│  ├─store              vuex状态管理目录
│  ├─style              项目公用样式目录
│  ├─App.vue            项目入口页面
│  └─main.js            项目入口文件
│
├─build                 webpack项目配置目录
│  ├─build.js           项目打包入口文件
│  ├─check-versions.js  模块版本检测文件
│  ├─dev-client.js      本地开发热部署配置
│  ├─dev-server.js      本地开发服务文件
│  ├─utils.js           webpack plugin配置文件
│  ├─vue-loader.conf.js   项目loaders调用配置
│  ├─webpack.base.conf.js webpack基础配置
│  ├─webpack.dev.conf.js  webpack本地开发配置
│  ├─webpack.prod.conf.js webpack生产配置
│  └─webpack.test.conf.js webpack测试配置
│
├─config                开发配置目录
│  ├─dev.env.js         本地环境配置
│  ├─index.js           命令运行参数配置
│  ├─prod.env.js        生产环境配置
│  └─test.env.js        测试环境配置
│
├─static                静态文件(build时直接复制到项目目录,不会被webpack打包处理)
│
├─test                  测试目录
│  ├─e2e                端到端测试目录
│  └─unit               单元测试目录
│
├─.babelrc
├─.editorconfig
├─.eslintignore
├─.eslintrc.js
├─.gitignore
├─.postcssrc.js
├─index.html
├─LICENSE
├─package.json
├─README.md
```

## 贡献:slightly_smiling_face:

如果你有好的建议或功能，欢迎提`issue`或`pull request`。