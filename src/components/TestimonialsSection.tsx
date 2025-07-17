import React from "react";
import { Star, Quote, Music } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Chucho Valdés",
      role: "sobre el álbum Camino a Santa Clara",
      comment:
        "Se trata de un trabajo fresco, novedoso, tradicional y al mismo tiempo contemporáneo, respetando la raíz de su origen. Los arreglos, los solos y especialmente la vocalista Ángela Cervantes son maravillosos.",
    },
    {
      id: 2,
      name: "Antonio M. Beneyto. ",
      role: "Diario El Mundo",
      comment:
        "El milagro de una buena voz, aparte de años de técnica y estudios, es aquella que con su personalidad te hace olvidar los problemas diarios con los que nos toca convivir, que te enamora, te duelen o te hace viajar.",
    },
    {
      id: 3,
      name: "La Shica",
      role: "Cantante y compositora",
      comment:
        "La primera vez que la vi cantar en directo, no pude cerrar la boca en todo el concierto... No entendía cómo alguien tan joven, podía tener todo eso dentro. Si cierras los ojos cuando ella está cantando, puedes sentir cómo las más grandes divas de la canción desfilan por su garganta...",
    },
    {
      id: 4,
      name: "North West End Press",
      role: "Press",
      comment:
        "Angela Cervantes, who takes on the indefinable role of Clare Torry in ‘Great Gig in the Sky’ is superb in her unearthly rendition",
    },
    {
      id: 5,
      name: "Mutxo por contar",
      role: "México",
      comment:
        "... una de las piezas vocales más arduas de cantar en la escena rockera: “The great gig in the sky”, la cual fue ejecutada soberbiamente por Ángela Cervantes, con los míticos tonos de Clare Torry en el icónico álbum.",
    },
    {
      id: 6,
      name: "Blues Doodles",
      role: "",
      comment:
        "The highlight of the evening for me though was Angela Cervantes rendition of ‘The Great Gig in The Sky’ it was an epic Floyd moment",
    },
  ];

  return (
    <section id="comentarios" className="py-20 bg-soft-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
              Comentarios
            </h2>
            <p className="font-sans text-lg text-muted-foreground">
              Lo que dicen los profesionales y amantes de la música tradicional
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card
                key={testimonial.id}
                className={`relative border-0 shadow-soft hover:shadow-warm transition-all duration-300 bg-white
                  ${
                    idx % 2 === 0
                      ? "border-l-4 border-accent"
                      : "border-r-4 border-warm-gold"
                  }
                `}
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <Quote className="w-8 h-8 text-accent flex-shrink-0" />
                    <p className="font-sans text-foreground leading-relaxed italic">
                      "{testimonial.comment}"
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex-grow">
                      <h4 className="font-sans font-semibold text-primary">
                        {testimonial.name}
                      </h4>
                      <p className="font-sans text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  {/* Icono decorativo */}
                  <Quote className="w-10 h-10 text-accent/10 absolute bottom-4 right-4 pointer-events-none" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
