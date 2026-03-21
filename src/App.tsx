import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { BudgetModalProvider } from "@/contexts/BudgetModalContext";
import { CookieConsentProvider } from "@/contexts/CookieConsentContext";
import { CookieBanner, CookieDetailModal, CookiePrivacyModal } from "@/components/CookieConsent";
import { LanguageProvider, type Language } from "@/i18n/context";
import Landing from "./pages/Landing";
import Index from "./pages/Index";
import ServiceDetail from "./pages/ServiceDetail";
import Viviendas from "./pages/Viviendas";
import Comunidades from "./pages/Comunidades";
import Negocios from "./pages/Negocios";
import Urgencias from "./pages/Urgencias";
import ProyectosPage from "./pages/ProyectosPage";
import ZonasPage from "./pages/ZonasPage";
import SobreNosotros from "./pages/SobreNosotros";
import GrupoSorocaInfo from "./pages/GrupoSorocaInfo";
import ContactoPage from "./pages/ContactoPage";
import HorarioPage from "./pages/HorarioPage";
import ExtraServiceDetail from "./pages/ExtraServiceDetail";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import SEOHead from "./components/SEOHead";

const queryClient = new QueryClient();

const AppRoutes = ({ language }: { language: Language }) => (
  <LanguageProvider language={language}>
    <BudgetModalProvider>
      <SEOHead />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/inicio" element={<Index />} />
        <Route path="/servicios/:slug" element={<ServiceDetail />} />
        <Route path="/categorias/viviendas" element={<Viviendas />} />
        <Route path="/categorias/comunidades" element={<Comunidades />} />
        <Route path="/categorias/negocios-locales" element={<Negocios />} />
        <Route path="/categorias/urgencias" element={<Urgencias />} />
        <Route path="/viviendas" element={<Navigate to={language === "es" ? "/categorias/viviendas" : `/${language}/categorias/viviendas`} replace />} />
        <Route path="/comunidades" element={<Navigate to={language === "es" ? "/categorias/comunidades" : `/${language}/categorias/comunidades`} replace />} />
        <Route path="/negocios" element={<Navigate to={language === "es" ? "/categorias/negocios-locales" : `/${language}/categorias/negocios-locales`} replace />} />
        <Route path="/proyectos" element={<ProyectosPage />} />
        <Route path="/zonas" element={<ZonasPage />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/horario" element={<HorarioPage />} />
        <Route path="/rehabilitaciones/:sub" element={<ExtraServiceDetail />} />
        <Route path="/reformas/:sub" element={<ExtraServiceDetail />} />
        <Route path="/electricidad/:sub" element={<ExtraServiceDetail />} />
        <Route path="/soluciones-de-accesibilidad" element={<ExtraServiceDetail />} />
        <Route path="/albanileria" element={<ExtraServiceDetail />} />
        <Route path="/impermeabilizaciones" element={<ExtraServiceDetail />} />
        <Route path="/servicios-de-arquitectura" element={<ExtraServiceDetail />} />
        <Route path="/fugas-de-agua" element={<ExtraServiceDetail />} />
        <Route path="/trabajos-verticales" element={<ExtraServiceDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <CookieBanner />
      <CookieDetailModal />
      <CookiePrivacyModal />
    </BudgetModalProvider>
  </LanguageProvider>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <CookieConsentProvider>
          <Routes>
            <Route path="/en/*" element={<AppRoutes language="en" />} />
            <Route path="/de/*" element={<AppRoutes language="de" />} />
            <Route path="/ru/*" element={<AppRoutes language="ru" />} />
            <Route path="/ro/*" element={<AppRoutes language="ro" />} />
            <Route path="/*" element={<AppRoutes language="es" />} />
          </Routes>
        </CookieConsentProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
