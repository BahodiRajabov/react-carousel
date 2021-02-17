import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
ReactDOM.render(
  // Har doim strict modeni ishlatishimiz kerak. React shunga moslangan
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);