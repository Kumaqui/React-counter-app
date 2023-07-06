import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; //自己定義的css引用
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'; // 路徑差異1
// import Counter from './components/counter.jsx' // 路徑差異2
import Counters from './components/counters.jsx' // counters 組件

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
