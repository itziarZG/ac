import React, { useEffect, useState } from "react";
import { Music } from "lucide-react";
const frasesCarrusel = [
  "Una voz mestiza que viaja entre orillas.",
  "Canta desde la entraña. Compromiso, belleza y verdad.",
  "Del Mediterráneo al mundo: jazz, raíz y emoción.",
  "Canciones que unen lo ancestral y lo contemporáneo.",
  "Una artista con alma libre y raíz profunda.",
];
const HeroSection = () => {
  const [fraseIdx, setFraseIdx] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setFade(false), 3000); // Empieza fade-out antes de cambiar
    const interval = setInterval(() => {
      setFade(false); // Empieza fade-out
      setTimeout(() => {
        setFraseIdx((prev) => (prev + 1) % frasesCarrusel.length);
        setFade(true); // Fade-in de la nueva frase
      }, 500); // Duración del fade-out
    }, 3500);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    setFade(true); // Asegura fade-in al montar/cambiar frase
  }, [fraseIdx]);

  return (
    <section
      id="inicio"
      className="pt-18 flex items-center justify-center bg-gradient-mediterranean"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary mb-6">
            Ángela Cervantes
          </h1>

          <p
            className={`font-display text-2xl md:text-3xl text-accent mb-6 min-h-[2.5em] transition-opacity duration-500 ease-in-out ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            {frasesCarrusel[fraseIdx]}
          </p>

          <div className="relative max-w-md mx-auto mb-12">
            <div className="aspect-square rounded-full overflow-hidden shadow-warm border-4 border-warm-gold/20">
              <img
                src="/images_new/ÁngelaCervantes_1.webp"
                alt="Ángela Cervantes"
                className="w-full h-full object-cover object-top "
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() =>
                document
                  .getElementById("proyectos")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className=" bg-[linear-gradient(135deg,hsl(var(--warm-gold)),hsl(var(--terracotta)))]  text-primary-foreground px-8 py-3 rounded-lg font-sans font-medium hover:shadow-warm transition-all duration-300 transform hover:scale-105"
            >
              Descubre mis proyectos
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contacto")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border-2 border-accent text-accent px-8 py-3 rounded-lg font-sans font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              Contacto
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://tidal.com/browse/artist/6213027?u",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
              className="flex items-center gap-2 bg-gradient-to-r from-accent to-primary text-white px-4 py-3 rounded-lg font-sans font-medium hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-soft"
              title="Escucha mi música en TIDAL"
            >
              <Music className="h-4 w-4" />
              <span className="hidden sm:inline">Escucha mi música</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
