import React from "react";
const titulares = [
  "Cuatro discos, mil paisajes sonoros y un solo pulso: el de la emoción.",
  "Escenarios de todo el mundo, géneros que dialogan.",
  "De su isla natal al continente americano, para regresar a las músicas del Mediterráneo y a la música de su propio vientre.",
  "Una artista con alma libre y raíz profunda.",
];
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
                  Cantante y compositora ibicenca con alma mestiza y vuelo
                  internacional. Su voz, libre y versátil, recorre escenarios de
                  varios continentes —desde festivales de músicas del mundo,
                  jazz o gospel europeos, hasta el Royal Albert Hall de Londres
                  o el Radio City Music Hall de Nueva York—. Ángela se mueve con
                  naturalidad entre géneros como el bolero, el gospel, el jazz o
                  la canción de raíz, brillando junto a artistas y proyectos
                  como Brit Floyd, Emmanuel Pi Djob, Ariel Bringuez, Ressonadors
                  o la compañía de Antonio Najarro. Con cuatro discos
                  publicados, transita una etapa íntima, autoral y profundamente
                  emocional.
                </p>
                <p>
                  Actualmente esta sumergida en A T E M P O R A L, un proyecto
                  de búsqueda y retorno, donde explora su raíz mediterránea y la
                  fusión de culturas y paisajes sonoros que habitan su
                  identidad. Es un viaje hacia la comprensión profunda de que
                  todos venimos del mismo vientre, de las mismas orillas y eso
                  queda plasmado inequívocamente en el viaje mestizo y melódico
                  de su repertorio, arreglado por el saxofonista Ariel Bringuez.
                  Un espacio de pausa y revelación, donde lo ancestral y lo
                  contemporáneo dialogan desde la emoción y la memoria.
                  Inspirada por la maternidad y sus raíces, prepara su primer
                  álbum de composiciones propias, mientras gira con su proyecto
                  Drexleriana, con arreglos a la música de Jorge Drexler que
                  viajan entre el jazz y el world music, con el pianista cubano
                  Pepe Rivero presentando Olas y Arenas con canciones de la
                  puertorriqueña, Sylvia Rexach, o con su trío junto a Israel
                  Sandoval y Chema Saiz, con quienes revisitan con sofisticación
                  hermosas canciones del vasto repertorio iberoamericana. Una
                  artista que canta desde la entraña, con compromiso, belleza y
                  verdad.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-8">
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
              {/* Bloque lateral destacado */}
              <aside className="bg-soft-cream rounded-xl shadow-soft p-6 border-l-4 border-accent">
                <ul className="space-y-3">
                  {titulares.map((titular, idx) => (
                    <li
                      key={idx}
                      className="font-sans text-primary text-base leading-snug before:content-['★'] before:text-accent before:mr-2"
                    >
                      {titular}
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
