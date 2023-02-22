import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ChakraProvider } from '@chakra-ui/react';

import './index.css';
import App from './App';
import Loading from '@Pages/Loading';
import AppTheme from './helpers/custom-theme.helper';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <QueryClientProvider client={queryClient}>

        <ChakraProvider theme={AppTheme}>
          <App />
        </ChakraProvider>

      </QueryClientProvider>
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
