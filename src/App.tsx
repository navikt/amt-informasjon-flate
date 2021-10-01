import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Decorator from './components/decorator/Decorator';
import './App.less';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import Routes from './Routes';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Decorator />
      <Router>
        <Routes />
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </QueryClientProvider>
  );
}

export default App;
