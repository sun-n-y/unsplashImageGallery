import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import AppContext from './AppContext.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <AppContext>
      <App />
    </AppContext>
  </QueryClientProvider>
);
