import React from 'react';
import ReactDOM from 'react-dom';
import 'antd-mobile/dist/antd-mobile.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import alert from './Alert';
import operation from './operation';
import prompt from './prompt'

// //eg1 alert弹窗的实现
// alert('title','hello Alert')

//eg2 opration弹窗的实现
// operation([{text:'标为未读'},{text:'置顶聊天'}])

//eg3 prompt弹窗的实现
prompt('标题','你多大了');

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
