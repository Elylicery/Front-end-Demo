var app = new Vue({
  el: '#app',
  data() {
    return {
      //是否全选
      isAllCheck: false,
      //购物车列表
      list: [
        {
          cateName: '电子商品',
          cateSelect:false,
          goodsList: [
            {
              id: 1,
              name: 'iPhone 7',
              price: 6188,
              count: 1,
              select: false,
            },
            {
              id: 2,
              name: 'iPad Pro',
              price: 3388,
              count: 1,
              select: false,
            },
            {
              id: 3,
              name: 'MacBook',
              price: 21453,
              count: 1,
              select: false,
            }
          ]
        },
        {
          cateName: '生活用品',
          cateSelect:false,
          goodsList: [
            {
              id: 1,
              name: '牙刷',
              price: 10,
              count: 1,
              select: false,
            },
            {
              id: 2,
              name: '卫生纸',
              price: 20,
              count: 1,
              select: false,
            },
            {
              id: 3,
              name: '牙膏',
              price: 30,
              count: 1,
              select: false,
            }
          ]
        },
        {
          cateName: '果蔬',
          cateSelect:false,
          goodsList: [
            {
              id: 1,
              name: '哈密瓜',
              price: 10,
              count: 1,
              select: false,
            },
            {
              id: 2,
              name: '草莓一盒',
              price: 11,
              count: 1,
              select: false,
            },
            {
              id: 3,
              name: '猕猴桃一盒',
              price: 5,
              count: 1,
              select: false,
            }
          ]
        }
      ]       
    }
  },
  computed: {
    totalPrice: function () {
      var total = 0;
      for (let i = 0; i < this.list.length; i++) {
        let item = this.list[i];
        for(let j=0;j<item.goodsList.length;j++){
          if (item.goodsList[j].select === true) {
            total += item.goodsList[j].price * item.goodsList[j].count;
          }
        }
      }
      return total.toString().replace(/\B(?=(\d{3})+$)/g, ',');
    }
  },
  methods: {
    //监听表格内容变换，当分类按钮变化时，全选按钮变化
    allCate(){
      let cateSelect = 0;
      this.list.forEach(item => {
        if(!item.cateSelect){
          this.isAllCheck = false;
          return;
        }else{
          cateSelect+=1;
        }
      });
      if(cateSelect === this.list.length){
        this.isAllCheck = true;
      }
    },
    //点击全选按钮，控制所有分类
    selectedAll: function () {
      this.list.forEach(item => {
        if(this.isAllCheck){
          item.cateSelect = true;
        }else{
          item.cateSelect = false
        }
        this.selectedCateAll(item);
      })
    },
    //点击某一商品,其父选项分类变化
    isChecked(item) {
      //当子选项全选中时，分类按钮也要选中，反之则不选中
      var listSelected = [];
      var listUnselected = [];
      item.goodsList.forEach(good => {
        if (good.select) {
          listSelected.push(good.select);
        } else {
          listUnselected.push(good.select);
        }
      })
      //当listSelect的长度等于list长度时，说明该分类下全部选中
      if (listSelected.length == item.goodsList.length) {
        item.cateSelect = true;
      }
      //当listUnselected中有数据，说明该分类下有没有勾选的子选项
      if (listUnselected.length > 0) {
        item.cateSelect = false;
      }
    },
    //控制某一分类的商品数据全选/全不选
    selectedCateAll(item){
      item.goodsList.forEach(good =>{
        if(item.cateSelect){
          good.select = true;
        }else{
          good.select = false;
          this.isAllCheck = false ;
        }
      })
    },
    //某一商品减少数量
    handleReduce: function (curitem,index) {
      this.list.forEach(item =>{
        if(item.cateName === curitem.cateName){
          if(item.goodsList[index].count === 1){
            return;
          }
          item.goodsList[index].count--;
        }
      })
    },
    //某一商品增加数量
    handleAdd: function (curitem,index) {
      this.list.forEach(item =>{
        if(item.cateName === curitem.cateName){
          item.goodsList[index].count++;
        }
      })
    },
    //移除某一商品
    handleRemove: function (curitem,index) {
      this.list.forEach(item =>{
        if(item.cateName === curitem.cateName){
          item.goodsList.splice(index,1);
        }
      })
    }
  }
})