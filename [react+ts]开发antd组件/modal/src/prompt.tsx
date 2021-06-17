import React from 'react';
import ReactDOM  from "react-dom";
import Modal from 'antd-mobile/lib/modal/index.js'
import {Action} from 'antd-mobile/lib/modal/PropsType'

const stopMove = (e:any) => e.preventDefault();

export default function prompt(
  title:React.ReactNode,
  message:React.ReactNode,
  actions = [{text:'取消'},{text:'确定'}]//赋值默认值
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

  //焦点落入输入库
  const focusInput = (input:HTMLInputElement)=> setTimeout(()=>input.focus(),500)

  ReactDOM.render(
    <Modal
    visible={true}
    transparent={true}
    title={title}
    closable={false}
    maskClosable={false}
    footer={footer}
  ><div>{message}</div>
    <div className="am-modal-input-container">
      <div className="am-modal-input">
        <input ref={node=> focusInput(node as HTMLInputElement)} type="text" />
      </div>
    </div>
  </Modal>,
  div
  )
}