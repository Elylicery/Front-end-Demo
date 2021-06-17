import React from 'react';
import ReactDOM  from "react-dom";
import Modal from 'antd-mobile/lib/modal/index.js'
import {Action} from 'antd-mobile/lib/modal/PropsType'

const stopMove = (e:any) => e.preventDefault();

export default function operation(
  actions = [{text:'知道了'}]//赋值默认值
){

  const div = document.createElement('div')
  document.body.appendChild(div)

  const close = () =>{
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
    document.body.removeEventListener('touchmove',stopMove)
  }

  const footer = actions.map((button:Action<React.CSSProperties>) =>{
    const oldOnPress = button.onPress || (()=>{});
    button.onPress = ()=>{
      const res = oldOnPress();
      if(res && res.then){
        res.then(close).catch(()=>{})
      }else close();
    }
    return button;
  })

  //防止页面滚动
  document.body.addEventListener('touchmove',stopMove,{passive:false})

  ReactDOM.render(
    <Modal
    visible={true}
    transparent={true}
    closable={false}
    maskClosable={false}
    className="am-modal-operation"
    operation={true}
    footer={footer}
  ></Modal>,
  div
  )
}