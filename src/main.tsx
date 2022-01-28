import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

console.log(import.meta.env.VITE_API_KEY);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
