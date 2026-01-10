
import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import FeaturesPage from './pages/FeaturesPage';
import DemoPage from './pages/DemoPage';
import DiscordBotsPage from './pages/DiscordBotsPage';
import RestaurantPage from './pages/business/RestaurantPage';
import BeautyPage from './pages/business/BeautyPage';
import CommercePage from './pages/business/CommercePage';
import PlanosBotsPage from './pages/PlanosBotsPage';
import PlanosAppsPage from './pages/PlanosAppsPage';
import RestaurantExamplePage from './pages/examples/RestaurantExamplePage';
import BeautyExamplePage from './pages/examples/BeautyExamplePage';
import InstitutionalExamplePage from './pages/examples/InstitutionalPage';
import CatalogExamplePage from './pages/examples/CatalogPage';
import BenefitsPage from './pages/BenefitsPage';
import NotFoundPage from './pages/NotFoundPage';
import PageTransition from './components/PageTransition';


const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  React.useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
        <Route path="/sobre" element={<PageTransition><AboutPage /></PageTransition>} />
        <Route path="/servicos" element={<PageTransition><ServicesPage /></PageTransition>} />
        <Route path="/funcionalidades" element={<PageTransition><FeaturesPage /></PageTransition>} />
        <Route path="/demonstracao" element={<PageTransition><DemoPage /></PageTransition>} />
        <Route path="/discord-bots" element={<PageTransition><PlanosBotsPage /></PageTransition>} />
        <Route path="/negocios/restaurantes" element={<PageTransition><RestaurantPage /></PageTransition>} />
        <Route path="/negocios/estetica" element={<PageTransition><BeautyPage /></PageTransition>} />
        <Route path="/negocios/comercio" element={<PageTransition><CommercePage /></PageTransition>} />
        <Route path="/planos-bots" element={<PageTransition><PlanosBotsPage /></PageTransition>} />
        <Route path="/planos-apps" element={<PageTransition><PlanosAppsPage /></PageTransition>} />
        <Route path="/exemplos/restaurante" element={<PageTransition><RestaurantExamplePage /></PageTransition>} />
        <Route path="/exemplos/estetica" element={<PageTransition><BeautyExamplePage /></PageTransition>} />
        <Route path="/exemplos/institucional" element={<PageTransition><InstitutionalExamplePage /></PageTransition>} />
        <Route path="/exemplos/catalogo" element={<PageTransition><CatalogExamplePage /></PageTransition>} />
        <Route path="/beneficios" element={<PageTransition><BenefitsPage /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFoundPage /></PageTransition>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
