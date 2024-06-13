import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // 
import App from './App'; // Import main App component
import reportWebVitals from './reportWebVitals'; // Import Web Vitals reporting

// Render the main App component wrapped in React's StrictMode
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Report web vitals to analytics service or console (optional)
reportWebVitals();