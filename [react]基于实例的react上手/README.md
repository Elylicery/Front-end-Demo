# 基于实例的React16教程

> 原视频链接：https://www.imooc.com/video/17893

## 1. React一些知识回顾

**Jsx**

* jsx只是一个语法糖，本质是`React.createElement`语法。
* 是一个ReactELmenet对象（如图下）

![image-20210627172741848](README.assets/image-20210627172741848.png)

**在React项目中使用bootstarp**

1. `npm install bootstrap --save`
2. 在index.js中引入`import 'bootstrap/dist/css/bootstrap.min.css'`

 **React属性**

![image-20210627173019685](README.assets/image-20210627173019685.png)

![image-20210627173044352](README.assets/image-20210627173044352.png)

![image-20210630212820335](README.assets/image-20210630212820335.png)

![image-20210630212827199](README.assets/image-20210630212827199.png)

**React生命周期**

![image-20210704134744593](README.assets/image-20210704134744593.png)

![image-20210704134801941](README.assets/image-20210704134801941.png)

![image-20210704135606016](README.assets/image-20210704135606016.png)

![image-20210704140227198](README.assets/image-20210704140227198.png)

也可以通过受控组件ref直接获取DOM

## 2. 综合实例 - 留言板

![image-20210704142048221](README.assets/image-20210704142048221.png)

**React开发思想以及和其他思想的异同**

* **状态提升（lifting state up）：**将共享的状态提升到它们最近的父组件中进行管理
* **自上而下的数据流(top down data flow)**：react中，数据是通过props来进行由上而下的数据传递的
* 和双向绑定区别：单向数据流要写回调函数，比双向绑定要写更多的模板代码

## 3. context

在一个典型的react应用中，数据是通过props属性由上而下进行传递的，但是对于某些全局类型的属性而言非常繁琐，比如语言 ：中午or英文，主题：浅色or深色，这些属性是应用中许多属性都需要的

![image-20210704144704555](README.assets/image-20210704144704555.png)

![image-20210704144817561](README.assets/image-20210704144817561.png)

![image-20210704144830775](README.assets/image-20210704144830775.png)

代码在demo-themechange中



