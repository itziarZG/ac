import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  const menuItems = [
    { href: "/", label: "Inicio" },
    { href: "/quien-soy", label: "Quién soy" },
    { href: "/proyectos", label: "Proyectos" },
    { href: "/calendario", label: "Calendario" },
    { href: "/comentarios", label: "Comentarios" },
    { href: "/contacto", label: "Contacto" },
  ];

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  // Helper to check if link is active
  const isActive = (href: string) => {
    if (href === "/" && currentPath === "/") return true;
    if (href !== "/" && currentPath.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="fixed top-0 w-full bg-background/90 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a
            href="/"
            className="font-display text-xl font-medium text-primary hover:text-accent transition-colors"
          >
            Ángela Cervantes
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`font-sans text-sm font-medium transition-colors hover:text-accent ${
                  isActive(item.href) ? "text-accent" : "text-foreground"
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
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full text-left font-sans text-sm font-medium py-2 transition-colors hover:text-accent ${
                    isActive(item.href)
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
