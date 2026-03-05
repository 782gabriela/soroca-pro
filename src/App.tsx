import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ServiceDetail from "./pages/ServiceDetail";
import Viviendas from "./pages/Viviendas";
import Comunidades from "./pages/Comunidades";
import Negocios from "./pages/Negocios";
import ProyectosPage from "./pages/ProyectosPage";
import ZonasPage from "./pages/ZonasPage";
import SobreNosotros from "./pages/SobreNosotros";
import ContactoPage from "./pages/ContactoPage";
import HorarioPage from "./pages/HorarioPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicios/:slug" element={<ServiceDetail />} />
          <Route path="/viviendas" element={<Viviendas />} />
          <Route path="/comunidades" element={<Comunidades />} />
          <Route path="/negocios" element={<Negocios />} />
          <Route path="/proyectos" element={<ProyectosPage />} />
          <Route path="/zonas" element={<ZonasPage />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/horario" element={<HorarioPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
