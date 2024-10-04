import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { DataProvider } from './components/Context/DataContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
    <App />
    </DataProvider>
  </StrictMode>
  ,
)
