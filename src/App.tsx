import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { BudgetModalProvider } from "@/contexts/BudgetModalContext";
import { CookieConsentProvider } from "@/contexts/CookieConsentContext";
import { CookieBanner, CookieDetailModal, CookiePrivacyModal } from "@/components/CookieConsent";
import Index from "./pages/Index";
import ServiceDetail from "./pages/ServiceDetail";
import Viviendas from "./pages/Viviendas";
import Comunidades from "./pages/Comunidades";
import Negocios from "./pages/Negocios";
import Urgencias from "./pages/Urgencias";
import ProyectosPage from "./pages/ProyectosPage";
import ZonasPage from "./pages/ZonasPage";
import SobreNosotros from "./pages/SobreNosotros";
import ContactoPage from "./pages/ContactoPage";
import HorarioPage from "./pages/HorarioPage";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <CookieConsentProvider>
          <BudgetModalProvider>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/servicios/:slug" element={<ServiceDetail />} />
              {/* Category pages */}
              <Route path="/categorias/viviendas" element={<Viviendas />} />
              <Route path="/categorias/comunidades" element={<Comunidades />} />
              <Route path="/categorias/negocios-locales" element={<Negocios />} />
              <Route path="/categorias/urgencias" element={<Urgencias />} />
              {/* Redirects from old routes */}
              <Route path="/viviendas" element={<Navigate to="/categorias/viviendas" replace />} />
              <Route path="/comunidades" element={<Navigate to="/categorias/comunidades" replace />} />
              <Route path="/negocios" element={<Navigate to="/categorias/negocios-locales" replace />} />
              {/* Other pages */}
              <Route path="/proyectos" element={<ProyectosPage />} />
              <Route path="/zonas" element={<ZonasPage />} />
              <Route path="/sobre-nosotros" element={<SobreNosotros />} />
              <Route path="/contacto" element={<ContactoPage />} />
              <Route path="/horario" element={<HorarioPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <CookieBanner />
            <CookieDetailModal />
            <CookiePrivacyModal />
          </BudgetModalProvider>
        </CookieConsentProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
