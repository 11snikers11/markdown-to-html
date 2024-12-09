import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import StoreProvider from './context/StoreProvider.tsx'
import { spy } from 'mobx'

spy((event) => {
  if (event.type.includes('action')) {
    console.log(event)
  }
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreProvider>
      <App />
    </StoreProvider>
  </StrictMode>
)
