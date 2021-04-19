/*
 * @Author: Xiaochun
 * @Date: 2021-04-14 15:49:55
 * @Last Modified by: Xiaochun
 * @Last Modified time: 2021-04-14 17:32:53
 */

//写一个IFE，防止全局变量污染
(function () {
	//得到元素
	var carousel_list = document.getElementById("carousel_list");
	var left_btn = document.getElementById("left_btn");
	var right_btn = document.getElementById("right_btn");
  var circle_ol = document.getElementById("circle_ol");
  var circle_list = circle_ol.getElementsByTagName('li');
  var banner = document.getElementById('banner');

	//克隆第一张li
	var clone_li = carousel_list.firstElementChild.cloneNode(true);
	//上树
	carousel_list.appendChild(clone_li);

	//当前正在显示的图片序号，从0开始
	var idx = 0;

  //节流锁
  var lock = true;

	//右边按钮添加事件监听
	right_btn.onclick = right_btn_handler;
  //右按钮的事件处理函数
  function right_btn_handler() {
		//判断节流锁的状态，如果是关闭的，那就什么都不做
    if(!lock) return;
    //关锁
    lock = false;
    //加上过渡
		carousel_list.style.transition = "transform .5s ease 0s";
		//idx+1
		idx++;
		//轮播图拉动
		carousel_list.style.transform = `translateX(${-16.66 * idx}%)`;
		//carousel_list.style.transform = 'translateX('+ -16.66*3 + '%)';

		//判断是否是最后一张图，如果是最后一张，就要瞬间移动回来
		if (idx > 4) {
			setTimeout(function () {
				//去掉过度
				carousel_list.style.transition = "none";
				//删除transform属性
				carousel_list.style.transform = "none";
				//全局图片序号变为0
				idx = 0;
			}, 500);
		}
    //设置小圆点
    setCircles();
    
    //开锁，动画结束之后开锁
    setTimeout(() => {
      lock = true;
    }, 500);
	};

	//左边按钮添加事件监听
	left_btn.onclick = function () {
    //判断节流锁的状态，如果是关闭的，那就什么都不做
    if(!lock) return;
    //关锁
    lock = false;
    
		//左按钮很特殊，要先写if语句，而不是idx--
		if (idx === 0) {
			//瞬间拉到到最后
			carousel_list.style.transition = "none";
			//拉到最后(瞬间替换)
			carousel_list.style.transform = `translateX(${-16.66 * 5}%)`;

			//小技巧，延时0毫秒非常有用，可以让刚才的瞬发生之后，再把过渡加上
			setTimeout(function () {
				//加上过渡
				carousel_list.style.transition = "transform .5s ease 0s";
				//轮播图拉动
				carousel_list.style.transform = `translateX(${-16.66 * 4}%)`;
				//改变idx的值
				idx = 4;
			}, 0);
		}else{
      idx --;
      //拉动
			carousel_list.style.transform = `translateX(${-16.66 * idx}%)`;
    }
    //设置小圆点
    setCircles();

    //开锁，动画结束之后开锁
    setTimeout(() => {
      lock = true;
    }, 500);
	};


  //设置小圆点的current在谁身上，序号为idx的小圆点采用current类名，其他的li都没有类名
  function setCircles(){
    //遍历，遍历0、1、2、3、4、5
    //每遍历一个数字都要和idx比一下，如果相等，就把这项设置类名为  curent，否则去掉类名
    for(var i=0;i<=4;i++){
      if(i == idx%5){
        //这里的%5非常巧妙，1，2，3，4除以5的余数都是它本身，但是5除以5就等于0了
        //这里%5的目的就说为了右按钮它有一瞬间，idx会成为5，500ms之后才变为0
        circle_list[i].className = 'current';
      }else{
        circle_list[i].className = '';
      }
    }
  }

  //事件委托,小圆点的监听
  circle_ol.onclick = function(e){
    if(e.target.tagName.toLowerCase() == 'li'){
      //得到li身上的data-n属性，就是n
      var n = Number(e.target.getAttribute('data-n'));
      //改变idx
      idx = n;
      //拉动
      carousel_list.style.transform = `translateX(${-16.66 * idx}%)`;
      //调用改变小圆点函数
      setCircles();
    }
  }

  //定时器，实现自动轮播
  var timer = setInterval(right_btn_handler,2000);

  //鼠标进入，自动轮播暂停
  banner.onmouseenter = function(){
    clearInterval(timer);
  }
  //鼠标离开，自动轮播开始
  banner.onmouseleave = function(){
    //设表先关!!
    clearInterval(timer);
    //设置定时器
    timer = setInterval(right_btn_handler,2000);
  }
})();

