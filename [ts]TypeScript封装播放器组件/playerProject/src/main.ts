import './iconfont/iconfont.css'
import './main.css'
import popup from './components/popup/popup'
import video from './components/video/video'

let listItem = document.querySelectorAll('#list li');

for(let i=0;i<listItem.length;i++){
  listItem[i].addEventListener('click',function(){

    let url = this.dataset.url;
    let title = this.dataset.title;

    //console.log("对应视频信息",url,title);
    
    popup({
      width:'800px',
      height:'556px',
      title,
      pos:'center',
      // mask:false
      content(elem){
        console.log("video的参数",url,elem);
        video({
          url,
          elem,
          autoplay:true
        })
      }
    });


  })
}
