import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { DataProvider } from './components/Context/DataContext.jsx'

createRoot(document.getElementById('root')).render(
  <DataProvider>
  <ChakraProvider>
    <App />
  </ChakraProvider>
  </DataProvider>,
)
