import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'
import AuthProvider from './Context/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <AuthProvider >
            <div className='dark:bg-slate-800 dark:text-white'>
                <App />
            </div>
        </AuthProvider>
        <Toaster  />
    </BrowserRouter>
);