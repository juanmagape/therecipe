import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/header.jsx'
import App from './components/app.jsx'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
<div>
  <Header />
  <App/>
  </div>
  </React.StrictMode>,
)
