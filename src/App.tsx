import { useEffect } from 'react';
import './App.css'
import useTelegram from './hooks/useTelegram'
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ChakraProvider } from '@chakra-ui/react';

const queryClient = new QueryClient()

function App() {
  const tg = useTelegram()

  useEffect(() => {
    if (tg) {
      console.log(tg);
      
    }
  }, [tg])

  
  
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default App
