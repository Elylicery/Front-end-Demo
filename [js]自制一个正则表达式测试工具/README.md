# 自制一个正则表达式测试工具

html+css+js

思路：

1. 使用 `pattern.exec(str)`进行匹配
2. 使用 `str.replace(pattern,rreplaceText)`进行文本替换

# 效果图

![](.\final.png)

# 源码

## RegExp-Test.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="regexp">
    <h1 class="title">正则表达式测试工具</h1>
    <textarea id="userText" class="textbox" placeholder="在此输入待匹配的文本"></textarea>
    <!--匹配-->
    <p>
      正则表达式：<input type="text" id="userRegExp" class="textfield" placeholder="在此输入正则表达式">
      <input type="checkbox" name="userModifier" value="i"/>忽略大小写
      <input type="checkbox" name="userModifier" value="g"/>全局匹配
      <input type="checkbox" name="userModifier" value="m"/>多行匹配
      <input type="button" id="matchingBtn" value="测试匹配">
    </p>
    匹配结果:
    <div id="matchingResult" class="textbox readonly" disabled></div>
    <!--替换-->
    <p>
      替换文本：<input type="text" id="userReplaceText" class="textfield" placeholder="在此输入替换文本">
      <input type="button" id="replaceBtn" value="替换">
    </p>
    匹配结果:
    <div id="replaceResult" class="textbox readonly" disabled></div>
  </div>
</body>
<script type="text/javascript" src="test.js"></script>
</html>
```

## test.js

```js
//获取DOM元素
var userText = document.getElementById('userText'),
userRegExp = document.getElementById('userRegExp'),
userModifier = document.getElementsByName('userModifier'),
matchingBtn = document.getElementById('matchingBtn'),
matchingResult = document.getElementById('matchingResult'),
userReplaceText = document.getElementById('userReplaceText'),
replaceBtn = document.getElementById('replaceBtn'),
replaceResult = document.getElementById('replaceResult');

var pattern,modifier="";

//获取模式修饰符
for(var i=0;i<userModifier.length;i++){
  userModifier[i].onclick = function(){
    modifier = "";
    for(var j=0;j<userModifier.length;j++){
      if(userModifier[j].checked){
        modifier += userModifier[j].value;
      }
    }
  }
}
//开始正则匹配
matchingBtn.onclick = function(){
  if(!userText.value){
    alert("请输入待匹配的文本！")
    userText.focus();
    return;
  }
  if(!userRegExp.value){
    alert("请输入正则表达式！")
    userRegExp.focus();
    return;
  }
  pattern = new RegExp('('+userRegExp.value+')',modifier);
  matchingResult.innerHTML = pattern.exec(userText.value) ? userText.value.replace(pattern,'<span style="background-color:yellow">$1</span>') :'(没有匹配)';
}

//开始替换
replaceBtn.onclick = function(){
  if(!userText.value){
    alert("请输入待匹配的文本！")
    userText.focus();
    return;
  }
  if(!userRegExp.value){
    alert("请输入正则表达式！")
    userRegExp.focus();
    return;
  }
  if(!userReplaceText.value){
    alert("请输入要替换的文本！")
    userReplaceText.focus();
    return;
  }
  pattern = new RegExp('('+userRegExp.value+')',modifier);
  replaceResult.innerHTML = userText.value.replace(pattern,'<span style="color:red">'+userReplaceText.value+'</span>');
}
```



## style.css

稍加修饰即可

```css
.regexp{
  width: 650px;
  margin: 100px auto;
  font-size: 14px;
}
.regexp .title{
  color:#777;
  font-size: 24px;
  text-align: center;
}
.regexp .textbox{
  width: 638px;
  height: 150px;
  border:1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
  resize: none;
}

.regexp .readonly{
  background-color: #eeeeee;
}

.regexp .textfield{
  width: 215px;
  padding: 5px;
  border:1px solid #ccc;
}
```

