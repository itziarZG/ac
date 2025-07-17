import React from "react";
import { Mail, Phone, MapPin, User, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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

          <div className="flex justify-center items-center">
            <Card className="border-0 shadow-soft bg-background">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <div className=" bg-gradient-sunset rounded-full flex items-center justify-center mx-auto mb-4">
                      <img
                        src="/images/espacioC.webp"
                        alt="Logo Espacio C"
                        className="object-contain w-full h-full"
                      />
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
                        <p className="font-sans font-medium text-primary">
                          Teléfono
                        </p>
                        <a
                          href="tel:+34678007121"
                          className="font-sans text-foreground hover:text-accent transition-colors"
                        >
                          +34 678 007 121
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-soft-cream rounded-lg">
                      <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                      <div>
                        <p className="font-sans font-medium text-primary">
                          Email
                        </p>
                        <a
                          href="mailto:hola@espacioc.es"
                          className="font-sans text-foreground hover:text-accent transition-colors"
                        >
                          hola@espacioc.es
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-soft-cream rounded-lg">
                      <Globe className="w-5 h-5 text-accent flex-shrink-0" />
                      <div>
                        <p className="font-sans font-medium text-primary">
                          Manager / Gestión
                        </p>
                        <a
                          href="https://www.espacioc.es/artists"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-sans text-foreground hover:text-accent transition-colors underline"
                        >
                          www.espacioc.es/artists
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
