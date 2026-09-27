import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Process from './pages/Process';
import Sustainability from './pages/Sustainability';
import Contact from './pages/Contact';
import './index.css';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const NotFound = () => (
  <main style={{ paddingTop: '72px', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '20px', textAlign: 'center' }}>
    <h1 style={{ fontFamily: 'Oswald', fontSize: '6rem', color: '#2dba6e', lineHeight: 1 }}>404</h1>
    <p style={{ fontFamily: 'Oswald', fontSize: '1.2rem', letterSpacing: '2px', textTransform: 'uppercase', color: '#285A5B' }}>Page Not Found</p>
    <a href="/" className="btn-primary" style={{ marginTop: '8px' }}>GO HOME</a>
  </main>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<Products />} />
        <Route path="/process" element={<Process />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
