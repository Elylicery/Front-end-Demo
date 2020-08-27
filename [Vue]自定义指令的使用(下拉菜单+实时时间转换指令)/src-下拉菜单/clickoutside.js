Vue.directive('clickoutside',{
  bind:function(el,binding,vnode){
    function documentHandler(e){
      if(el.contains(e.target)){
        return false;
      }
      if(binding.expression){
        binding.value(e);
      }
    }
    el.__vueClickOutside__ = documentHandler;
    document.addEventListener('mouseover',documentHandler);
  },
  unbind:function(el,binding){
    document.removeEventListener('mouseover',el.__vueClickOutside__);
    delete el.__vueClickOutside__;
  }
})