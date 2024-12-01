import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS

// Initialize AOS
AOS.init({
  duration: 1000, // Animation duration (optional)
  easing: 'ease-in-out', // Easing function (optional)
});

// ReactDOM.render is now replaced with createRoot for React 18+
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
