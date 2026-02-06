import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MainLayout from './layouts/MainLayout';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import { Toaster } from '../components/ui/Toaster';

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Navbar />
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<LandingPage />} />
          </Route>
        </Routes>
        <Toaster />
      </BrowserRouter>
  );
}

export default App;