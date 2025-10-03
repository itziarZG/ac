import React from "react";
import { Instagram, Facebook, Youtube, Music } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="font-display text-xl font-semibold">
                Ángela Cervantes
              </h3>
            </div>

            <div className="space-y-4">
              <h4 className="font-sans font-semibold">Enlaces rápidos</h4>
              <ul className="space-y-2 font-sans text-sm">
                <li>
                  <button
                    onClick={() =>
                      document
                        .getElementById("quien-soy")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Quién soy
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      document
                        .getElementById("proyectos")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Proyectos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      document
                        .getElementById("calendario")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Calendario
                  </button>
                </li>
                <li>
                  <button
                    onClick={() =>
                      document
                        .getElementById("contacto")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Contacto
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-sans font-semibold">Sígueme</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <Music className="w-5 h-5" />
                </a>
              </div>
              <p className="font-sans text-xs text-primary-foreground/60">
                Management: Rocío Royo Durán
                <br />
                Espacio C - +34 678 007 121
              </p>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center">
            <p className="font-sans text-sm text-primary-foreground/60">
              © 2024 Ángela Cervantes. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
