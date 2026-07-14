import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';

import MainLayout from './layouts/MainLayout';
import { SmoothScroll } from './components/animations/SmoothScroll';
import { PageTransition } from './components/animations/PageTransition';
import { LoadingScreen } from './components/common/LoadingScreen';

// Lazy loading pages for code splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Products = lazy(() => import('./pages/Products'));
const Solutions = lazy(() => import('./pages/Solutions'));
const Industries = lazy(() => import('./pages/Industries'));
const Technology = lazy(() => import('./pages/Technology'));
const News = lazy(() => import('./pages/News'));
const Careers = lazy(() => import('./pages/Careers'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const NotFound = lazy(() => import('./pages/NotFound'));

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg-primary)]">
    <div className="w-8 h-8 border-4 border-[var(--color-border)] border-t-[var(--color-accent)] rounded-full animate-spin" />
  </div>
);

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<PageLoader />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<PageTransition locationKey={location.pathname}><Home /></PageTransition>} />
            <Route path="about" element={<PageTransition locationKey={location.pathname}><About /></PageTransition>} />
            <Route path="products" element={<PageTransition locationKey={location.pathname}><Products /></PageTransition>} />
            <Route path="solutions" element={<PageTransition locationKey={location.pathname}><Solutions /></PageTransition>} />
            <Route path="industries" element={<PageTransition locationKey={location.pathname}><Industries /></PageTransition>} />
            <Route path="technology" element={<PageTransition locationKey={location.pathname}><Technology /></PageTransition>} />
            <Route path="news" element={<PageTransition locationKey={location.pathname}><News /></PageTransition>} />
            <Route path="careers" element={<PageTransition locationKey={location.pathname}><Careers /></PageTransition>} />
            <Route path="contact" element={<PageTransition locationKey={location.pathname}><Contact /></PageTransition>} />
            <Route path="privacy" element={<PageTransition locationKey={location.pathname}><Privacy /></PageTransition>} />
            <Route path="terms" element={<PageTransition locationKey={location.pathname}><Terms /></PageTransition>} />
            <Route path="*" element={<PageTransition locationKey={location.pathname}><NotFound /></PageTransition>} />
          </Route>
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

function App() {
  const [initialLoad, setInitialLoad] = useState(true);

  // Note: For development, you might want to skip the loading screen after first mount.
  // We'll run it once per session.
  useEffect(() => {
    const hasLoaded = sessionStorage.getItem('antigravity_loaded');
    if (hasLoaded) {
      setInitialLoad(false);
    }
  }, []);

  const handleLoadComplete = () => {
    sessionStorage.setItem('antigravity_loaded', 'true');
    setInitialLoad(false);
  };

  return (
    <HelmetProvider>
      {initialLoad ? (
        <LoadingScreen onComplete={handleLoadComplete} />
      ) : (
        <SmoothScroll>
          <BrowserRouter>
            <AnimatedRoutes />
          </BrowserRouter>
        </SmoothScroll>
      )}
    </HelmetProvider>
  );
}

export default App;
