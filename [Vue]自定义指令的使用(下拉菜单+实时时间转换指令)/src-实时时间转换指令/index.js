
var app = new Vue({
  el:'#app',
  data:{
    timeNow:(new Date()).getTime(),
    timeBefore:1596830695721 //2020-08-07 本示例使用的时间戳都是毫秒级
  },
  computed:{
    timeNowFormat:function(){
      return Time.getLastDate(this.timeNow);
    },
    timeBeforeFormat:function(){
      return Time.getLastDate(this.timeBefore);
    }
  }
})