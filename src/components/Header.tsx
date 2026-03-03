import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import logoSoroca from "@/assets/logo-soroca.jpeg";

const navItems = [
  { label: "Servicios", href: "#servicios" },
  { label: "Zonas", href: "#zonas" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="h-10 w-10 overflow-hidden rounded-lg">
            <img src={logoSoroca} alt="Grupo Soroca" className="h-full w-full object-cover" />
          </div>
          <div className="hidden sm:block">
            <span className="text-lg font-bold text-foreground">Grupo Soroca</span>
            <span className="block text-xs text-muted-foreground">Reformas y mantenimiento</span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA + phone */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+34600000000"
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <Phone className="h-4 w-4" />
            600 000 000
          </a>
          <Button asChild>
            <a href="#contacto">Pide presupuesto</a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menú"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 pb-4 md:hidden">
          <nav className="flex flex-col gap-1 pt-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-4 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-3 flex flex-col gap-2">
            <a
              href="tel:+34600000000"
              className="flex items-center justify-center gap-2 rounded-md border border-border px-4 py-3 text-sm font-medium"
            >
              <Phone className="h-4 w-4" /> 600 000 000
            </a>
            <Button asChild className="w-full">
              <a href="#contacto" onClick={() => setMobileOpen(false)}>
                Pide presupuesto
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
