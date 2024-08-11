import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Info from './component/info'
import About from './component/about'
import Interest from './component/interest';
import Footer from './component/footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Info />
    <About />
    <Interest />
    <Footer />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
