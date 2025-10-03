import React from "react";
import { ExternalLink, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "A T E M P O R A L",
      description:
        "Un rito sonoro que trasciende fronteras, lenguas y siglos. Conectando la poesía mística de Rumi con el canto tradicional, desde las dunas árabes hasta las cumbres sefardies, pasando por los ecos flamencos y el belcanto europeo. El Mediterráneo como cuna, la diáspora como latido, y la mezcla como identidad. Un canto colectivo que bebe de la tradición oral, revive el legado femenino y lo actualiza sin nostalgia. De Rumi a Drexler, de Fayruz a Carmen París, de Noa a Valderrama...\n La voz de Ángela Cervantes se entrelaza con una banda de músicos excepcionales: Ariel Bringuez (saxofón soprano y zaphoon y arreglos), Chema Sáiz guitarra y pedales electrónicos), Pablo Martín Caminero (contrabajo), Andrés Litwin (batería híbrida y percusión). \n El folclore se entrelaza con la creación espontánea, lo étnico con lo electrónico, lo íntimo con lo colectivo.",
      image: "images/atemporal.webp",
      year: "2025",
      pressKit:
        "https://espacioc.es/so/e7PbE0Xz5?languageTag=es&status=Draft&cid=00000000-0000-0000-0000-000000000000",
      hasLink: true,
      listenUrl: null,
      hover:
        "Un repertorio mestizo que nace de mi búsqueda personal y fascinación por el encuentro con la esencia del alma a través de la voz",
      featured: true,
    },
    {
      id: 2,
      title: "Drexleriana",
      description:
        "'En Esta Orilla de Drexler', su primer álbum en solitario, que contó con la complicidad de Jorge Drexler y supuso un antes y un después en su carrera profesional, siendo su debut discográfico, se reimagina ahora para dar origen a Drexleriana. Este proyecto renace en formato de quinteto y sale de gira acompañado por la voz y la guitarra de Gladston Galliza como artista invitado, abriendo un nuevo capítulo sonoro que dialoga con aquel inicio y lo expande hacia el presente.",
      image: "images/drexler.webp",
      year: "2012",
      pressKit: null,
      hasLink: false,
      listenUrl: null,
    },

    {
      id: 3,
      title: "Camino a Santa Clara",
      description:
        "Un homenaje entrañable a la mítica agrupación cubana Los Fakires y también a su abuela, celebrado incluso por Chucho Valdés por su belleza y autenticidad.",
      image: "images/camino.webp",
      year: "2016",
      pressKit: null,
      hasLink: false,
      listenUrl: null,
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
      listenUrl: null,
    },

    {
      id: 5,
      title: "Olas y Arenas",
      description:
        "Su primer álbum en solitario, que contó con la complicidad de Jorge Drexler y supuso un antes y un después en su carrera profesional, siendo su debut discográfico, se reimagina ahora para dar origen a Drexleriana. Este proyecto renace en formato de quinteto y sale de gira acompañado por la voz y la guitarra de Gladston Galliza como artista invitado, abriendo un nuevo capítulo sonoro que dialoga con aquel inicio y lo expande hacia el presente.",
      image: "/images/olasarenas.webp",
      year: "2021",
      pressKit: null,
      hasLink: false,
      listenUrl: null,
    },
  ];

  const featuredProject = projects.find((p) => p.featured);
  const regularProjects = projects.filter((p) => !p.featured);

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

          {/* Proyecto Destacado */}
          {featuredProject && (
            <div className="mb-16">
              <Card className="group overflow-hidden border-0 shadow-soft hover:shadow-warm transition-all duration-300 bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative aspect-square md:aspect-auto md:h-auto overflow-hidden">
                    {/* Titular hover, si existe */}
                    {featuredProject.hover && (
                      <div className="absolute bottomgit l-0 left-0 w-full z-10 bg-primary/80 text-primary-foreground font-display text-sm md:text-lg px-4 py-2 rounded-b-xl shadow-md">
                        {featuredProject.hover}
                      </div>
                    )}
                    <img
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="flex items-center gap-2 flex-wrap">
                        {featuredProject.pressKit && (
                          <a
                            href={featuredProject.pressKit}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-primary-foreground text-primary px-3 py-1 rounded-full text-sm font-medium"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Press Kit
                          </a>
                        )}
                        {featuredProject.listenUrl && (
                          <a
                            href={featuredProject.listenUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium"
                          >
                            <Play className="w-4 h-4" />
                            Escuchar
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-semibold text-primary">
                        {featuredProject.title}
                      </h3>
                      <span className="font-sans text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                        {featuredProject.year}
                      </span>
                    </div>
                    <p className="font-sans text-foreground leading-relaxed text-base md:text-lg">
                      {featuredProject.description}
                    </p>
                  </CardContent>
                </div>
              </Card>
            </div>
          )}

          {/* Resto de Proyectos */}
          <div className="grid md:grid-cols-2 gap-8">
            {regularProjects.map((project) => (
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
                      {project.pressKit && (
                        <a
                          href={project.pressKit}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-primary-foreground text-primary px-3 py-1 rounded-full text-sm font-medium"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Press Kit
                        </a>
                      )}
                      {project.listenUrl && (
                        <a
                          href={project.listenUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium"
                        >
                          <Play className="w-4 h-4" />
                          Escuchar
                        </a>
                      )}
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
