import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// New Pages
import HomePage from './pages/HomePage';
import BotPlansPage from './pages/BotPlansPage';
import WebServicesPage from './pages/WebServicesPage';
import ContactPage from './pages/ContactPage';

// Legacy Pages (kept for potential demos or SEO)
import RestaurantExamplePage from './pages/business/RestaurantPage';
import BeautyExamplePage from './pages/business/BeautyPage';
import CommercePage from './pages/business/CommercePage';

// Components
import PageTransition from './components/PageTransition';
import NotFoundPage from './pages/NotFoundPage';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  React.useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes>
          {/* Main New Structure */}
          <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
          <Route path="/planos-bots" element={<PageTransition><BotPlansPage /></PageTransition>} />
          <Route path="/web-services" element={<PageTransition><WebServicesPage /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />

          {/* Legacy / Demo Routes */}
          <Route path="/demonstracao" element={<PageTransition><RestaurantExamplePage /></PageTransition>} /> {/* Using Restaurant as main demo */}
          <Route path="/exemplos/restaurante" element={<PageTransition><RestaurantExamplePage /></PageTransition>} />
          <Route path="/exemplos/estetica" element={<PageTransition><BeautyExamplePage /></PageTransition>} />

          {/* Fallback */}
          <Route path="*" element={<PageTransition><NotFoundPage /></PageTransition>} />
        </Routes>
      </AnimatePresence>
    </HashRouter>
  );
}

export default App;
