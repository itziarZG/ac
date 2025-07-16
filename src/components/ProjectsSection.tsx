import React from 'react';
import { ExternalLink, Play } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Olas y Arenas",
      description: "Su más reciente trabajo discográfico, dedicado a la compositora puertorriqueña Sylvia Rexach, realizado junto al pianista cubano Pepe Rivero. Un álbum que marca una nueva etapa artística y una declaración de madurez creativa.",
      image: "/lovable-uploads/5e3a140d-2212-42fa-94ba-033d623709be.png",
      year: "2024",
      pressKit: "#",
      hasLink: true
    },
    {
      id: 2,
      title: "Camino a Santa Clara",
      description: "Un homenaje entrañable a la mítica agrupación cubana Los Fakires y también a su abuela, celebrado incluso por Chucho Valdés por su belleza y autenticidad.",
      image: "/lovable-uploads/63e9a152-1436-4731-b4db-ca036e6e9577.png",
      year: "2016",
      pressKit: "#",
      hasLink: true
    },
    {
      id: 3,
      title: "Recordando a Ella Fitzgerald & Joe Pass",
      description: "Un álbum grabado a dúo con Chema Saiz que rinde homenaje a los grandes del jazz, explorando el repertorio clásico con una perspectiva contemporánea.",
      image: "/lovable-uploads/a9049171-2cc6-4e75-aa81-f59a8d34fd54.png",
      year: "2014",
      pressKit: null,
      hasLink: false
    },
    {
      id: 4,
      title: "En esta Orilla de Drexler",
      description: "Su primer álbum en solitario, que cuenta con la participación del propio Jorge Drexler y marca un hito emocional en su carrera artística.",
      image: "/lovable-uploads/6b0546e7-391b-4d2e-98c7-3156cf67e826.png",
      year: "2012",
      pressKit: "#",
      hasLink: true
    }
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
              Una colección de trabajos que reflejan mi compromiso con la música tradicional española
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="group overflow-hidden border-0 shadow-soft hover:shadow-warm transition-all duration-300">
                <div className="relative aspect-square overflow-hidden">
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
                    <h3 className="font-display text-xl font-semibold text-primary">{project.title}</h3>
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