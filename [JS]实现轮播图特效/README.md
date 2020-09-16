# 使用原生Js实现轮播图特效

# 1. 效果图

![image-20200916212643391](README.assets/image-20200916212643391.png)

![image-20200916212701711](README.assets/image-20200916212701711.png)

# 2. 结构及样式

* 焦点图
*  主菜单，是一个二级联动的菜单
* 子菜单

# 3. 事件绑定

<img src="README.assets/image-20200916165709730.png" alt="image-20200916165709730" style="zoom:50%;" />

<img src="README.assets/image-20200916170718895.png" alt="image-20200916170718895" style="zoom:50%;" />

<img src="README.assets/image-20200916170814706.png" alt="image-20200916170814706" style="zoom:50%;" />

<img src="README.assets/image-20200916170958564.png" alt="image-20200916170958564" style="zoom:50%;" />

【注意】：IE中支持的是：`attachEvent()和detachEvent`

使用二级绑定事件，IE是`onclick`，其他是`click，为了解决兼容，要封装一段脚本。

<img src="README.assets/image-20200916171526572.png" alt="image-20200916171526572" style="zoom:50%;" />

# 4. 源码：swiper-src



