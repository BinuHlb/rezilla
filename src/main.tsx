import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import Header from './components/sections/header.tsx';
import Footer from './components/sections/footer.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header/>
    <App />
    <Footer/>
  </StrictMode>
);
