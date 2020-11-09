$(document).ready(function(){
  var index = 0;
  var mouseEvent = function(event){
    event.stopPropagation();
    if($(this)[0].nodeName == 'A'){
      index = $(this).index();
    }else{
      return true;
    }
    swiper();
  }

  var keyEvent = function(event) {
    event.stopPropagation();
    if (event.keyCode == 37) {
        index = index > 0 ? --index : $('a').length - 1;
    } else if (event.keyCode == 39) {
        index = index < $('a').length - 1 ? ++index : 0;
    } else {
        return true;
    }
    swiper();
  }

  var events = {
    mouseenter: mouseEvent,
    keydown: keyEvent
  };
  $('a').add(document).on(events);

  var swiper = function(){
      $('img').eq(index)
              .css({'opacity':'1'})
              .siblings()
              .css({'opacity':'0'});
  }

  var init = function(){
    index = 0;
    swiper();
  }

  init();
});