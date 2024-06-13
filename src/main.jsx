import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimeProvider } from './context/animeContext.jsx';
import ScrollToTop from './components/ScrollToTop.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AnimeProvider>
      <Router>
      <ScrollToTop />
          <App />
      </Router>
    </AnimeProvider>
  </React.StrictMode>,
)
