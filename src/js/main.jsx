import React from 'react'
import ReactDOM from 'react-dom/client'
import TrafficLight from './components/App';

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TrafficLight/>
  </React.StrictMode>,
)
