import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ProductoProvider } from './context/ProductoContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(

<React.StrictMode>
    <ProductoProvider>
    <App />
    </ProductoProvider>
  </React.StrictMode>
)
