import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Chatbot from '../Chatbot/Chatbot';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header fijo en la parte superior */}
      <Header />
      
      {/* Contenido principal que cambia según la ruta */}
      <main className="flex-grow">
        <Outlet />
      </main>
      
      {/* Footer fijo en la parte inferior */}
      <Footer />
      
      {/* Chatbot flotante */}
      <Chatbot />
    </div>
  );
};

export default Layout;
