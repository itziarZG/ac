import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  const menuItems = [
    { id: "inicio", label: "Inicio" },
    { id: "quien-soy", label: "Quién soy" },
    { id: "proyectos", label: "Proyectos" },
    { id: "calendario", label: "Calendario" },
    { id: "comentarios", label: "Comentarios" },
    { id: "contacto", label: "Contacto" },
  ];

  const handleNavClick = (sectionId: string, event?: React.MouseEvent) => {
    const isHome = window.location.pathname === "/";
    if (isHome) {
      event?.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        // fallback: update hash so next paint scrolls
        window.location.hash = sectionId;
      }
      setIsMenuOpen(false);
    } else {
      // Navega a inicio con hash; el scroll ocurrirá al cargar
      // No prevenimos el default para permitir la navegación
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map((item) =>
        document.getElementById(item.id)
      );
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(menuItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full bg-background/90 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a
            href="/#inicio"
            onClick={(e) => handleNavClick("inicio", e)}
            className="font-display text-xl font-medium text-primary hover:text-accent transition-colors"
          >
            Ángela Cervantes
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`/#${item.id}`}
                onClick={(e) => handleNavClick(item.id, e)}
                className={`font-sans text-sm font-medium transition-colors hover:text-accent ${
                  activeSection === item.id ? "text-accent" : "text-foreground"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border shadow-soft">
            <div className="px-4 py-4 space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={`/#${item.id}`}
                  onClick={(e) => handleNavClick(item.id, e)}
                  className={`block w-full text-left font-sans text-sm font-medium py-2 transition-colors hover:text-accent ${
                    activeSection === item.id
                      ? "text-accent"
                      : "text-foreground"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
