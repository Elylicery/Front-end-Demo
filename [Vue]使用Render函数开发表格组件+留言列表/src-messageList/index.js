/**
* 发布一条留言,需要的数据有昵称和留言内容，发布操作应该在    
* 根实例app内完成，留言列表的数据也是从app获取。
*/
var app = new Vue({
  el: '#app',
  data: {
    username: '',
    message: '',
    list: []
  },
  methods: {
    //发布留言
    handleSend: function () {
      console.log("username:", this.username,"message:",this.message);
      //表单校验
      if(this.username === ''){
        window.alert('请输入昵称');
        return;
      };
      if(this.message === ''){
        window.alert('请输入留言内容');
        return;
      }
      this.list.push({
        name:this.username,
        message:this.message
      });
      this.message = '';
      console.log("成功发布留言！");
    },
    //回复留言
    handleReply: function (index) {
      var name = this.list[index].name;
      this.message = '回复@' + name + ':';
      this.username = '',
      this.$refs.message.focus();
    }
  }
});