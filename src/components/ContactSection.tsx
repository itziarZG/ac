import React from 'react';
import { Mail, Phone, MapPin, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 bg-soft-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
              Contacto
            </h2>
            <p className="font-sans text-lg text-muted-foreground">
              Para contrataciones, colaboraciones y consultas profesionales
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <Card className="border-0 shadow-soft bg-background">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-sunset rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-primary mb-2">
                      Rocío Royo Durán
                    </h3>
                    <p className="font-sans text-muted-foreground">
                      Gestión cultural y management
                    </p>
                    <p className="font-sans text-sm text-muted-foreground">
                      Dirección Espacio C
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-soft-cream rounded-lg">
                      <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                      <div>
                        <p className="font-sans font-medium text-primary">Teléfono</p>
                        <a href="tel:+34678007121" className="font-sans text-foreground hover:text-accent transition-colors">
                          +34 678 007 121
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-soft-cream rounded-lg">
                      <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                      <div>
                        <p className="font-sans font-medium text-primary">Email</p>
                        <a href="mailto:contacto@angelacervantes.es" className="font-sans text-foreground hover:text-accent transition-colors">
                          contacto@angelacervantes.es
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-soft-cream rounded-lg">
                      <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                      <div>
                        <p className="font-sans font-medium text-primary">Ubicación</p>
                        <p className="font-sans text-foreground">España</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <div className="bg-background p-8 rounded-xl shadow-soft">
                <h3 className="font-display text-xl font-semibold text-primary mb-4">
                  Tipos de eventos
                </h3>
                <ul className="space-y-3 font-sans text-foreground">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Conciertos en teatros y auditorios
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Festivales de música tradicional
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Eventos culturales y celebraciones
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Talleres y masterclasses
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Colaboraciones artísticas
                  </li>
                </ul>
              </div>

              <div className="bg-background p-8 rounded-xl shadow-soft">
                <h3 className="font-display text-xl font-semibold text-primary mb-4">
                  Disponibilidad
                </h3>
                <p className="font-sans text-foreground mb-4">
                  Actualmente disponible para actuaciones en toda España y Europa. 
                  Para fechas específicas y presupuestos, contacta con mi equipo de management.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 bg-soft-cream rounded-lg">
                    <div className="font-display font-semibold text-accent">Nacional</div>
                    <div className="font-sans text-sm text-muted-foreground">España</div>
                  </div>
                  <div className="p-3 bg-soft-cream rounded-lg">
                    <div className="font-display font-semibold text-accent">Internacional</div>
                    <div className="font-sans text-sm text-muted-foreground">Europa</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;