import axios from 'axios';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Set base URL for production
if (import.meta.env.VITE_API_URL) {
    axios.defaults.baseURL = import.meta.env.VITE_API_URL;
    axios.defaults.withCredentials = true;
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
