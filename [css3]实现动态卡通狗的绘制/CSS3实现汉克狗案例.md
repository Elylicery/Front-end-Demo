# CSS3实现卡通狗案例

首先设置整体html结构

```html
<body>
  <div class="dog">
    <div class="forehead"></div>
    <div class="face"></div>
    <div class="chin"></div>
    <div class="ear"></div>
    <div class="ear right"></div>
  </div>
</body>
```

把变量放在根元素root中，作为一个CSS3变量，使得所有的元素都可以调用这个变量。

```css
  <style>
  :root{
    --h1:#1b2f90;
    --bg:#f9f9f6;
  }
  </style>
```

使用绝对定位的方式让forehead在dog中居中

```css
  .dog{
    width: 300px;
    height: 400px;
    position: relative;/*相对定位*/
  }
  
   .forehead{
    width: 102px;
    height: 48px;
    background: var(--bg);
    position: absolute;/*绝对定位*/
    left: 50%;/*设置left*/
    transform: translate(-50%,0);/*利用translate居中*/
  }
```

或者讲该样式抽取

```css
  .center{
    position: absolute;/*绝对定位*/
    left: 50%;/*设置left*/
    transform: translate(-50%,0);/*利用translate居中*/
  }
```

其他注意的点

* `transform: scale(-1,1) translate(-26px,0) rotate(10deg) ;`里的`scale(-1,1)`表示水平翻转

* `<div class="ear right"></div>`选取时应写为

  ```css
  /*注意这里的ear和right里面没有空格*/  
  .ear.right{
      transform: scale(-1,1) translate(-26px,0) rotate(10deg) ;/*transform后面的样式会覆盖前面的样式*/
    }
  ```

* ```css
        <div class="eye">
          <div class="pupil"></div>
        </div>
  ```

  眼球不能超出眼眶，所以要在eye里面加`overflow:hidden`

  ```css
      .eye {
        overflow: hidden;/**/
        position: absolute;
        left: 50%;
        width: 24px;
        height: 24px;
        background: var(--bg);
        box-shadow: 2px 0px 0px -1px #000 inset,-1px -1px 7px 1px #bbb;
        z-index: 2;
        border-radius: 50% / 20px 12px 12px 4px;
        top:-2px;
        transform: translate(-43.5px,0);
      }
  ```

* 眼珠子里的两个光圈可以使用.prupil:before / after伪元素来实现

  * 注意伪元素要有 content 才能显示出来

