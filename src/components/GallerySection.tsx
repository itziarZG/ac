import React, { useState } from "react";
import { Play, X } from "lucide-react";
import { Card } from "@/components/ui/card";

const GallerySection = () => {
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);

  const mediaItems = [
    {
      id: 1,
      type: "image",
      src: "/images_new/ÁngelaCervantes_1.webp",
      alt: "Ángela Cervantes en concierto",
      category: "Sesiones",
    },
    {
      id: 2,
      type: "image",
      src: "/images_new/ÁngelaCervantes_2.webp",
      alt: "Sesión fotográfica en vestimenta tradicional",
      category: "Sesiones",
    },
    {
      id: 3,
      type: "video",
      src: "https://youtu.be/rW1iYcm2U9g?si=qu07fmPeZcxB1nN2",
      thumbnail: "/images/logoYT.png",
      alt: "Video tema Tres Palabras",
      category: "Videos",
    },
    {
      id: 4,
      type: "image",
      src: "/images/drexler.webp",
      alt: "Portada del álbum En esta orilla de Drexler",
      category: "Álbumes",
    },

    {
      id: 6,
      type: "image",
      src: "/images/hero-bg.webp",
      alt: "Ángela posando frente a un lago",
      category: "Estudio",
    },
  ];

  const categories = [
    "Todos",
    "Conciertos",
    "Sesiones",
    "Videos",
    "Álbumes",
    "Estudio",
  ];
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredMedia =
    activeCategory === "Todos"
      ? mediaItems
      : mediaItems.filter((item) => item.category === activeCategory);

  return (
    <section id="galeria" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
              Galería
            </h2>
            <p className="font-sans text-lg text-muted-foreground mb-8">
              Una colección visual de mi trayectoria artística
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full font-sans text-sm font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? "bg-accent text-accent-foreground shadow-soft"
                      : "bg-muted text-muted-foreground hover:bg-accent/20"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMedia.map((item) => (
              <Card
                key={item.id}
                className="group overflow-hidden border-0 shadow-soft hover:shadow-warm transition-all duration-300 cursor-pointer"
                onClick={() =>
                  setSelectedMedia(item.type === "video" ? item.src : item.src)
                }
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={item.type === "video" ? item.thumbnail : item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {item.type === "video" && (
                    <div className="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-accent text-accent-foreground p-3 rounded-full">
                        <Play className="w-6 h-6" />
                      </div>
                    </div>
                  )}

                  <div className="absolute top-3 left-3">
                    <span className="bg-background/90 text-foreground px-2 py-1 rounded text-xs font-sans font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Modal for enlarged view */}
          {selectedMedia && (
            <div className="fixed inset-0 bg-primary/90 z-50 flex items-center justify-center p-4">
              <div className="relative  max-h-11/12">
                <button
                  onClick={() => setSelectedMedia(null)}
                  className="absolute -top-12 right-0 text-primary-foreground hover:text-accent transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>

                {selectedMedia.includes("youtube") ? (
                  <div className="aspect-video">
                    <iframe
                      src={selectedMedia}
                      className="w-full h-full rounded-lg"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <img
                    src={selectedMedia}
                    alt="Enlarged view"
                    className="object-cover rounded-lg shadow-warm"
                  />
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
