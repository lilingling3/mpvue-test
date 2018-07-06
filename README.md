## 基于 mpvue-quickstart 改造而来的项目原型结构

### 目前做了如下改进
> * 首页多次请求改为async await方式
> * 对wx原生api做了promisify封装
> * 对整个应用的vuex做了模块切分
> * 对counter做了演示加强，多了input控件的多种绑定方式、vuex的多种通信示例

### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

目录结构定义
```
|________App.vue
|________base                           //整个应用的底层基础支持函数的封装
|     |________common-func.js           //一些与我们应用的业务处理相关的通用函数
|     |________config.js                
|     |________constants                //各种常量定义处
|     |     |________mutation-type.js
|     |     |________...
|     |________http.js                  //wx http请求能力的promisify封装
|     |________utils
|     |     |________index.js
|     |     |________string.js           //与字符串处理相关的工具函数
|     |     |________date.js             //与日期处理相关的工具函数
|     |     |________...
|     |________wx-api.js                 //wx原生sdk接口的promisify封装
|     |________l2l-api.js                //调动l2l后端的接口定义文件
| 
|________components                      //业务组件定义处，可一定程度复用，功能较齐全,采用业务逻辑、模板和样式分离的多文件形式书写一个组件
|     |________ContactItem
|           |________index.vue
|           |________index.css
|           |________index.js
|     |________ContactList
|     |________...
|________main.js                         //程序的入口文件
|________pages                           //各个页面定义
|     |________contact
|     |     |________index.vue
|     |     |________index.css
|     |     |________index.js
|     |     |________main.js             //负责将组件挂载到vue中
|     |________...
| 
|________store                           //vuex store配置相关
|     |________index.js
|     |________modules                   //按模块(即页面)切分的各个store，每个store里有自己的actions,mutations,state,getters定义
|     |     |________contact.js
|     |     |________...
|     |________root-actions.js           //全局通用的根actions
|     |________root-mutations.js         //全局通用的根mutations
|     |________root-state.js             //全局通用的根state
|             
|________views                           //展示型组件定义处，复用程度最高，功能较弱，采用单文件组件的方式来书写组件
|     |________L2LButton.vue
|     |________L2LTab.vue
```
