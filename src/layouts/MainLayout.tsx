import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/navigation/Navbar';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-bg-primary)] text-white font-sans selection:bg-[var(--color-accent)] selection:text-white">
      <Navbar />
      {/* Semantic main element for screen readers */}
      <main id="main-content" className="flex-grow w-full outline-none" tabIndex={-1}>
        <Outlet />
      </main>
      {/* Footer would go here as <footer> */}
    </div>
  );
};

export default MainLayout;
