
# 代码规范和约束

### 点击以下链接查看更多参考详情
> [vue代码风格指导 ](https://cn.vuejs.org/v2/style-guide)
> 
> [vue教程](https://cn.vuejs.org/v2/guide/single-file-components.html)

---
### **文件命名** 除了copoments和views下的组件定义用大驼峰命名，其他所有的文件或者文件采用连字符命名方式
---

### **组件分类** 我们结合小程序的代码结构和业界的最佳实践，将组件分为三类
* `单一型组件`，全局只会实例化一次，对应我们项目里 `pages` 文件夹下的组件，`功能最全面，可复用程度最低`
* `业务型组件`，和我们的业务紧密相关，对应我们项目里 `components` 文件夹下的组件，`功能封装程度适中，可复用程度适中`
* `展示型组件`，这种组件通常纯做展示，暴露一定的属性注入数据和绑定交互接口，和业务无关，通常来说这一类组件可最后下沉为通用UI库的组件，供别的项目使用，对应我们项目里的 `views` 文件夹下的组件，`功能最弱，可复用程度最高`
---
### **组件定义**
* 所有组件均采用`大驼峰`命名风格

* `展示型组件` 定义在`views`文件夹下，没有复杂逻辑，不需要关注点分离, 采用单文件组件格式来定义
```javascript
-- good
|________views
|     |________Button.vue
|     |________NavigatorBar.vue

-- bad
|________views
|     |________button.vue
|     |________navigator-bar.vue

-- bad
|________views
|     |________button.vue
|     |________navigatorBar.vue
```

Button.vue如下
```javascript
<template>
  <button class="Button">out customize button</button>
</template>
<script>
  export default {}
</script>
<style>
  .btn{
    border:1px solid blue;
  }
</style>
```


* `业务型组件`定义在`components`文件夹下，通常会包含一定的业务逻辑在其中，我们采用多文件的方式来定义组件，一个组件的文件结构如下所示，.vue文件书写html模板，.css书写样式，.js书写组件的业务交互逻辑
```
|________components
|     |________ContactItem
|            |________index.vue
|            |________index.js
|            |________index.css

```

.vue文件如下,组件的css样式用和自己组件命名一样的`大驼峰风格`名字来作为自己样式的命名空间
```
<template>
  <div class="ContactItem" @click="handleContactClick">
  </div>
</template>
<script src="./index.js"></script>
<style src="./index.css" scoped></style>
```

.css用`连字符`来区别开各个层级的关系，用`大驼峰`表示各个层级自己样式命名,`{namespace}-{sceneName}-{subSceneName}`,注意最多不要超过4层，`a-b-c-d`是OK的，`a-b-c-d-e`是不好的,可以拉平来命名,如`a-b-c-d-e`、`a-b-c-d-f`,可命名为`a-b-c-de`、`a-b-c-df`，示例如下
```
.ContactItem {
  padding: 10px;
  border:1px solid purple;
}
.ContactItem-border{
  //your style here
}
.ContactItem-imgBox{
  //your style here
}
.ContactItem-imgBox-header{
  //your style here
}
.ContactItem-imgBox-header span{
  //your style here
}
```

在别的文件里，引入该组件方式如下
```
import ContactItem from '@src/components/ContactItem/index.vue';
```


* `单一型组件`既我们小程序里的`页面型组件`，定义在`pages`文件夹下，一样的采用关注点分离原则，每一个页面组件都包含四个文件，`main.js`负责将组件挂载到vue上，`index.vue`书写html模板，`index.js`书写业务逻辑，`index.css`书写样式

