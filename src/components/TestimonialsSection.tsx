import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "María González",
      role: "Crítica Musical - El País",
      comment: "Ángela Cervantes posee una voz que trasciende el tiempo, conectando las tradiciones ancestrales con la sensibilidad contemporánea de manera excepcional.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616c6a92e64?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Carlos Ruiz",
      role: "Director Artístico - Festival Flamenco",
      comment: "Su interpretación de 'Palabras' fue simplemente conmovedora. Ángela tiene la capacidad única de hacer que cada canción cobre vida propia.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Isabel Martín",
      role: "Musicóloga - Universidad Complutense",
      comment: "El trabajo de investigación y preservación cultural que realiza Ángela es invaluable. Es una guardiana de nuestro patrimonio musical.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Antonio López",
      role: "Productor Musical",
      comment: "Trabajar con Ángela ha sido una experiencia enriquecedora. Su pasión por la música tradicional es contagiosa y su profesionalismo, excepcional.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    }
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
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-0 shadow-soft hover:shadow-warm transition-all duration-300 bg-background">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <Quote className="w-8 h-8 text-accent flex-shrink-0" />
                    <p className="font-sans text-foreground leading-relaxed italic">
                      "{testimonial.comment}"
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-grow">
                      <h4 className="font-sans font-semibold text-primary">
                        {testimonial.name}
                      </h4>
                      <p className="font-sans text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-warm-gold text-warm-gold" />
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="font-sans text-muted-foreground mb-4">
              ¿Has asistido a alguno de mis conciertos?
            </p>
            <button className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-sans font-medium hover:bg-accent/90 transition-colors">
              Comparte tu experiencia
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;