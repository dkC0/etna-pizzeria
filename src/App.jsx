import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import GrainOverlay from './components/GrainOverlay';
import Loader from './components/Loader';
import RouteLoader from './components/RouteLoader';
import ScrollToHash from './components/ScrollToHash';
import SmoothScroll from './components/SmoothScroll';
import StickyCallCTA from './components/StickyCallCTA';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';

export default function App() {
  const [loading, setLoading] = useState(() => !sessionStorage.getItem('etna_loaded'));
  const location = useLocation();

  const handleDone = () => {
    sessionStorage.setItem('etna_loaded', '1');
    setLoading(false);
  };

  return (
    <>
      {loading && <Loader onDone={handleDone} />}
      <RouteLoader />
      <SmoothScroll />
      <a href="#main" className="skip-link">Przejdź do treści</a>
      <ScrollToHash />
      <GrainOverlay />
      <Nav />
      <main id="main" key={location.pathname} className="page-fade">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/o-nas" element={<About />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/galeria" element={<Gallery />} />
        </Routes>
      </main>
      <StickyCallCTA />
      <Footer />
    </>
  );
}
