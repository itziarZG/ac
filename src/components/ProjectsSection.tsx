import React from "react";
import { ExternalLink, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "A T E M P O R A L",
      description:
        "Un rito sonoro que trasciende fronteras, lenguas y siglos.Conectando la poesía mística de Rumi con el canto tradicional, desde las dunas árabes hasta las cumbres sefardies, pasando por los ecos flamencos y el belcanto europeo.El Mediterráneo como cuna, la diáspora como latido, y la mezcla como identidad.Un canto colectivo que bebe de la tradición oral, revive el legado femenino y lo actualiza sin nostalgia.De Rumi a Serrat, de Fayruz a Drexler, de Noa a Valderrama...\n La voz de Ángela Cervantes se entrelaza con una banda de músicos excepcionales:*Ariel Bringuez (saxofón soprano y zaphoon y arreglos) Chema Sáiz guitarra y pedales electrónicos) Pablo Martín Caminero (contrabajo) Andrés Litwin (batería híbrida y percusión) \n El folclore se entrelaza con la creación espontánea, lo étnico con lo electrónico, lo íntimo con lo colectivo.",
      image: "images/atemporal.jpg",
      year: "2025",
      pressKit:
        "https://www.espacioc.es/_files/ugd/46812f_b9264cedd45347a6a1e86e78da63f8b6.pdf",
      hasLink: true,
      hover:
        "Un repertorio mestizo que nace de mi búsqueda personal y fascinación por el encuentro con la esencia del alma a través de la voz",
    },
    {
      id: 2,
      title: "En Esta Orilla de Drexler",
      description:
        "Su primer álbum en solitario, que contó con Jorge Drexler y supuso un antes y un después en su obra, y que ahora se readapta para dar origen a Drexleriana.",
      image: "images/drexler.webp",
      year: "2012",
      pressKit: "#",
      hasLink: false,
    },

    {
      id: 3,
      title: "Camino a Santa Clara",
      description:
        "Un homenaje entrañable a la mítica agrupación cubana Los Fakires y también a su abuela, celebrado incluso por Chucho Valdés por su belleza y autenticidad.",
      image: "images/camino.webp",
      year: "2016",
      pressKit: "#",
      hasLink: true,
    },
    {
      id: 4,
      title: "Recordando a Ella Fitzgerald & Joe Pass",
      description:
        "Un álbum grabado a dúo con Chema Saiz que rinde homenaje a estos dos titanes del jazz, explorando el repertorio clásico con una perspectiva contemporánea.",
      image: "images/fitgeral.webp",
      year: "2014",
      pressKit: null,
      hasLink: false,
    },

    {
      id: 5,
      title: "Olas y Arenas",
      description:
        "Su más reciente trabajo discográfico, de la mano del pianista cubano Pepe Rivero, quien además es el arreglista, honrando ambos la memoria y la obra de la compositora puertorriqueña Sylvia Rexach. Un álbum que marca una nueva etapa artística para Ángela y una declaración de madurez creativa junto a Rivero.",
      image: "/images/olasarenas.webp",
      year: "2024",
      pressKit: "#",
      hasLink: true,
    },
  ];

  return (
    <section id="proyectos" className="py-20 bg-soft-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
              Proyectos
            </h2>
            <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
              Una colección de trabajos que reflejan mi compromiso con la música
              de raíz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden border-0 shadow-soft hover:shadow-warm transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden">
                  {/* Titular hover, si existe */}
                  {project.hover && (
                    <div className="absolute top-0 left-0 w-full z-10 bg-primary/80 text-primary-foreground font-display text-lg px-4 py-2 rounded-b-xl shadow-md">
                      {project.hover}
                    </div>
                  )}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex items-center gap-2">
                      {project.hasLink && (
                        <button className="flex items-center gap-2 bg-primary-foreground text-primary px-3 py-1 rounded-full text-sm font-medium">
                          <ExternalLink className="w-4 h-4" />
                          Press Kit
                        </button>
                      )}
                      <button className="flex items-center gap-2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                        <Play className="w-4 h-4" />
                        Escuchar
                      </button>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display text-xl font-semibold text-primary">
                      {project.title}
                    </h3>
                    <span className="font-sans text-sm text-muted-foreground bg-muted px-2 py-1 rounded">
                      {project.year}
                    </span>
                  </div>
                  <p className="font-sans text-foreground leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
