Vadmin `vue基础项目模板`
=====

## 项目概述

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
www  WEB部署目录（或者子目录）
├─application           应用目录
│  ├─common             公共模块目录（可以更改）
│  ├─module_name        模块目录
│  │  ├─config.php      模块配置文件
│  │  ├─common.php      模块函数文件
│  │  ├─controller      控制器目录
│  │  ├─model           模型目录
│  │  ├─view            视图目录
│  │  └─ ...            更多类库目录
│  │
│  ├─command.php        命令行工具配置文件
│  ├─common.php         公共函数文件
│  ├─config.php         公共配置文件
│  ├─route.php          路由配置文件
│  ├─tags.php           应用行为扩展定义文件
│  └─database.php       数据库配置文件
│
├─public                WEB目录（对外访问目录）
│  ├─index.php          入口文件
│  ├─router.php         快速测试文件
│  └─.htaccess          用于apache的重写
│
├─thinkphp              框架系统目录
│  ├─lang               语言文件目录
│  ├─library            框架类库目录
│  │  ├─think           Think类库包目录
│  │  └─traits          系统Trait目录
│  │
│  ├─tpl                系统模板目录
│  ├─base.php           基础定义文件
│  ├─console.php        控制台入口文件
│  ├─convention.php     框架惯例配置文件
│  ├─helper.php         助手函数文件
│  ├─phpunit.xml        phpunit配置文件
│  └─start.php          框架入口文件
│
├─extend                扩展类库目录
├─runtime               应用的运行时目录（可写，可定制）
├─vendor                第三方类库目录（Composer依赖库）
├─build.php             自动生成定义文件（参考）
├─composer.json         composer 定义文件
├─LICENSE.txt           授权说明文件
├─README.md             README 文件
├─think                 命令行入口文件
├─message.sql           数据库备份文件
```

## 贡献

如果你有好的建议或功能，欢迎提`issue`或`pull request`。