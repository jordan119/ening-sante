import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CtaSection } from './components/sections/CtaSection';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Cibles } from './pages/Cibles';
import { APropos } from './pages/APropos';
import { Contact } from './pages/Contact';
import { EspaceClient } from './pages/EspaceClient';

function PublicLayout() {
  return (
    <div className="min-h-screen bg-neutral-white flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex flex-col">
        <Outlet />
      </div>

      <CtaSection />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/cibles" element={<Cibles />} />
            <Route path="/a-propos" element={<APropos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/diagnostic" element={<Contact />} />
        </Route>
        
        <Route path="/espace-client" element={<EspaceClient />} />
      </Routes>
    </Router>
  );
}

export default App;
