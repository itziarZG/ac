import React from "react";

const AboutSection = () => {
  return (
    <section id="quien-soy" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-8">
                Quién soy
              </h2>

              <div className="space-y-4 font-sans text-lg text-foreground leading-relaxed">
                <p>
                  Ángela Cervantes es cantante y compositora española con una
                  voz que atraviesa el jazz, la raíz ibérica y la canción de
                  autor, pero sobre todo, el alma de quien escucha. Nacida en
                  Ibiza y formada en Barcelona con grandes maestros del canto,
                  ha desarrollado un lenguaje vocal expresivo, intuitivo y
                  técnicamente sólido, forjado en años de escenario y estudio
                  constante.
                </p>

                <p>
                  A lo largo de su carrera ha participado en proyectos
                  internacionales como The Black & White Xperience, Jazzing
                  Flamenco y Brit Floyd, y ha firmado una discografía personal
                  que incluye trabajos como En esta orilla de Drexler, Camino a
                  Santa Clara y Olas y Arenas, este último dedicado a Sylvia
                  Rexach junto a Pepe Rivero.
                </p>

                <p>
                  Después de la maternidad y una profunda transformación vital,
                  Ángela atraviesa un momento creativo renovado. Está
                  actualmente componiendo y produciendo su propio repertorio, un
                  cuerpo de canciones íntimas y viscerales que nacen de su
                  experiencia como mujer, madre y artista. Hoy, su música se
                  siente como un acto de escucha, memoria y presencia.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-soft">
                <img
                  src="/images_new/ÁngelaCervantes_2.webp"
                  alt="Ángela Cervantes en vestimenta tradicional"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-sunset rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
