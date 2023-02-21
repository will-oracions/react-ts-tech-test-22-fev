import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from '@Layout/index';

const AppLayout: React.FC = () => {    
  return <>
    <Header />

    <main className="md:text-lg">
      <Outlet />
    </main>

    <Footer />
  </>;
}

export default AppLayout;