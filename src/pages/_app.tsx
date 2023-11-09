import { AuthContextProvider } from '@/context';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient,QueryClientProvider  } from 'react-query'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }: AppProps) {

  const client = new QueryClient()


  return <QueryClientProvider client={client}>
  <AuthContextProvider>
    <ToastContainer/>
    <Component {...pageProps} />
    </AuthContextProvider>
  </QueryClientProvider>
}
