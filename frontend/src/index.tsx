import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Import your global styles here
import App from './App'; // Import your main App component
import reportWebVitals from './reportWebVitals'; // Import Web Vitals reporting

// Render the main App component wrapped in React's StrictMode
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Attach the rendered output to the root element in your HTML (typically a <div id="root"></div>)
);

// Report web vitals to analytics service or console (optional)
reportWebVitals();