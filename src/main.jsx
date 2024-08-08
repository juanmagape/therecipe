import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app.jsx'
import Header from './components/header.jsx'
import Slider from './components/slider.jsx'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/footer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
<div>
  <Header />
  <Slider />
    <App />
    <Footer/>
  </div>
  </React.StrictMode>,
)
