import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { services } from "@/data/services";
import logoSoroca from "@/assets/logo-soroca.jpeg";
import { useBudgetModal } from "@/contexts/BudgetModalContext";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const { openBudgetModal } = useBudgetModal();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleInicio = () => {
    setMobileOpen(false);
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:h-20">
        <Link to="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
          <div className="h-10 w-10 overflow-hidden rounded-lg">
            <img src={logoSoroca} alt="Grupo Soroca" className="h-full w-full object-cover" />
          </div>
          <div className="hidden sm:block">
            <span className="text-lg font-bold text-foreground">Grupo Soroca</span>
            <span className="block text-xs text-muted-foreground">Reformas y mantenimiento</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <button onClick={handleInicio} className="rounded-md px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground">Inicio</button>
          <div ref={dropdownRef} className="relative">
            <button onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground">
              Servicios
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full mt-1 w-56 rounded-lg border border-border bg-card py-2 shadow-lg">
                {services.map((s) => (
                  <Link key={s.slug} to={`/servicios/${s.slug}`} onClick={() => setServicesOpen(false)} className="flex items-center gap-2 px-4 py-2.5 text-sm uppercase tracking-wide text-foreground/80 transition-colors hover:bg-accent hover:text-foreground">
                    <s.icon className="h-4 w-4 text-primary" />
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/proyectos" className="rounded-md px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground">Proyectos</Link>
          <Link to="/zonas" className="rounded-md px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground">Zonas</Link>
          <Link to="/sobre-nosotros" className="rounded-md px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground">Sobre nosotros</Link>
          <Link to="/contacto" className="rounded-md px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground">Contacto</Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button onClick={() => openBudgetModal()}>Pide presupuesto</Button>
        </div>

        <button className="flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menú">
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 pb-4 md:hidden">
          <nav className="flex flex-col gap-1 pt-2">
            <button onClick={handleInicio} className="rounded-md px-4 py-3 text-left text-sm font-medium text-foreground/80 transition-colors hover:bg-accent">Inicio</button>
            <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)} className="flex items-center justify-between rounded-md px-4 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent">
              Servicios
              <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileServicesOpen && (
              <div className="ml-4 flex flex-col gap-1">
                {services.map((s) => (
                  <Link key={s.slug} to={`/servicios/${s.slug}`} onClick={() => setMobileOpen(false)} className="flex items-center gap-2 rounded-md px-4 py-2.5 text-sm uppercase tracking-wide text-foreground/80 transition-colors hover:bg-accent">
                    <s.icon className="h-4 w-4 text-primary" />
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
            <Link to="/proyectos" onClick={() => setMobileOpen(false)} className="rounded-md px-4 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent">Proyectos</Link>
            <Link to="/zonas" onClick={() => setMobileOpen(false)} className="rounded-md px-4 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent">Zonas</Link>
            <Link to="/sobre-nosotros" onClick={() => setMobileOpen(false)} className="rounded-md px-4 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent">Sobre nosotros</Link>
            <Link to="/contacto" onClick={() => setMobileOpen(false)} className="rounded-md px-4 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent">Contacto</Link>
          </nav>
          <div className="mt-3 flex flex-col gap-2">
            <Button className="w-full" onClick={() => { setMobileOpen(false); openBudgetModal(); }}>Pide presupuesto</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
