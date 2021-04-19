(function(){
  var bannerNavUl = document.getElementById('banner-nav-ul');
  var bannerNav = document.getElementById('banner-nav');
  //寻找所有的menu
  var menus = document.querySelectorAll('.menus-box .menu');
  //寻找所有的li
  var bannerLis = document.querySelectorAll('#banner-nav-ul li');
  //事件委托,必须使用onmouseover事件，而不是onmouseenter
  //因为onmouserover 冒泡，onmouseenter不冒泡
  bannerNavUl.onmouseover = function(e){
    if(e.target.tagName.toLowerCase() === 'li'){
      //得到触碰的这个li元素身长的data-t属性
      var t = e.target.getAttribute('data-t');
      //排他操作，让所有的li都去掉current类名
      for(let i=0;i<bannerLis.length;i++){
        bannerLis[i].className = bannerLis[i].getAttribute('data-t');
        menus[i].className = 'menu';
      }
      //当前碰到的这个li，要加current类
      e.target.className += ' current';
      console.log(t);
      //寻找匹配的menu
      var themenu = document.querySelector('.menus-box .menu[data-t='+t+']');
      //排他操作，让所有的盒子都去掉current类名
      for(let i=0;i<menus.length;i++){
        menus[i].className = 'menu';
      }
      //匹配的这项加上current类名
      themenu.className = 'menu current';
    }
  }
  //当鼠标离开大盒子的时候，菜单要关闭
  bannerNav.onmouseleave = function(){
    for(let i=0;i<bannerLis.length;i++){
      bannerLis[i].className = bannerLis[i].getAttribute('data-t');
      menus[i].className = 'menu';
    }
  }
})();