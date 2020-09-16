//声明全局变量
var index = 0,//当前显示图片的索引，默认值为0
    timer = null;//定时器
    main = byId("main"),
    prev = byId("prev"),//上一张
    next = byId("next"),//下一张
    pics = byId("banner").getElementsByTagName("div"),//轮播图的所有图片
    dots = byId("dots").getElementsByTagName("span"),//所有小圆点
    size = pics.length;
    banner = byId("banner");
    //console.log(size);

    menuContent = byId("menu-content");//取到一级菜单
    menuItems = menuContent.getElementsByClassName("menu-item");
    subMenu = byId("sub-menu");//取到二级菜单
    innerBox = subMenu.getElementsByClassName("inner-box");//获取子菜单的内容

//封装getElementById()
function byId(id) {
  return typeof(id) === "string" ? document.getElementById(id):id;
}

/* 封装通用事件绑定方法
    element:绑定事件的DOM元素
    type:事件名
    handler:事件处理程序
*/
function addHandler(element,type,handler){
  //非IE浏览器
  if(element.addEventListener){
    element.addEventListener(type,handler,true);
  }else if(element.attachEvent){
    //IE如果支持DOM2级
    element.attachEvent('on'+type,handler);
  }else{
    //IE老的不支持DOM2级，所以只能使用DOM0级
    element['on'+type]+handler;//element.onclick = element[onclick] JS中使用 . 的地方都可以用 [] 来替代,此处事件名是一个变量，所以只能使用 []
  }
}

//清除定时器,停止自动轮播
function stopAutoPlay(){
  if(timer){
    clearInterval(timer);
  }
}

//开启自动轮播
function startAutoPlay(){
  timer = setInterval(function(){
    index++;
    if(index >= size) index = 0;
    changeImg();
  },3000);
}

//切换图片
function changeImg(){
  //遍历所有图片，将图片隐藏，将原点上的类清除
  for(var i=0;i<size;i++){
    pics[i].style.display = "none";//之前的所有图隐藏
    dots[i].className = ""; 
  }
  //显示当前图片
  pics[index].style.display = "block";
  //当前圆点高亮显示
  dots[index].className = "active"; 
}

//点击下一张按钮显示下一张图片
addHandler(next,"click",function(){
  //图片切换
  index++;
  if(index >= size) index = 0;
  changeImg();
});

//点击上一张按钮显示下一张图片
addHandler(prev,"click",function(){
  //图片切换
  index--;
  if(index<0) index = size-1;
  changeImg();
})

//点击原点索引切换图片
for(var d = 0;d<size;d++){
  //这里因为作用域的问题要注意！
  // addHandler(dots[d],"click",function(){
  //   console.log(d);//这里得到的d是最终值3
  // })
  //通过给其定义属性来解决
  dots[d].setAttribute("data-id",d);
  addHandler(dots[d],"click",function(){
    index = this.getAttribute("data-id");//this.data-id会出错，因为带'-'了
    changeImg();
  })
}

//鼠标滑过主菜单
for(var m =0,idx;m<menuItems.length;m++){
  //给所有主菜单定义属性，标明它的索引
  menuItems[m].setAttribute("data-index",m);
  addHandler(menuItems[m],"mouseover",function(){
    //显示子菜单所在的背景
    subMenu.className = "sub-menu";
    //获取当前主菜单的索引
    idx = this.getAttribute("data-index");
    //遍历所有的子菜单innnerBox，将他们隐藏
    for(var j=0;j<innerBox.length;j++){
      //隐藏所有的子菜单
      innerBox[j].style.display = "none";
      //所有的主菜单取消背景
      menuItems[j].style.background = "none"
    }
    //找到当前子菜单，让其显示出来
    innerBox[idx].style.display = "block";
    menuItems[idx].style.background = "rgba(0,0,0,0.1)"
  });
}

//鼠标离开banner，隐藏子菜单
addHandler(banner,"mouseout",function(){
  subMenu.className = "sub-menu hide";
});

//鼠标离开主菜单menuContent,隐藏子菜单
addHandler(menuContent,"mouseout",function(){
  subMenu.className = "sub-menu hide";
});

//鼠标划入子菜单时，子菜单显示
addHandler(subMenu,"mouseover",function(){
  this.className = "sub-menu";
})

//鼠标离开子菜单时，子菜单隐藏
addHandler(subMenu,"mouseout",function(){
  this.className = "sub-menu hide";
})

//鼠标滑入main,停止轮播
addHandler(main,"mouseover",stopAutoPlay);
//鼠标离开，继续轮播
addHandler(main,"mouseout",startAutoPlay);

//自动开启轮播
startAutoPlay();

