import React from "react";
import { Mail, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  const espacioCWeb =
    "https://espacioc.es/so/bePRioX4h?languageTag=es&status=Draft&cid=00000000-0000-0000-0000-000000000000";
  return (
    <section id="contacto" className="py-20 bg-soft-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
              Contratación y management
            </h2>
            <p className="font-sans text-lg text-muted-foreground">
              Para contrataciones, colaboraciones y consultas profesionales
            </p>
          </div>

          {/* Bloque fijo de clases al inicio de la sección */}
          <div className="mb-12 p-6 rounded-xl bg-soft-cream border border-border">
            <p className="font-sans text-primary mb-2">
              ¿Te gustaría profundizar en el canto conmigo o necesitas
              asesoramiento artístico para tu proyecto? Escríbeme y cuéntame lo
              que necesitas. Te contestaré lo antes posible.
            </p>

            <a href="/clases">
              <Button className="bg-accent text-white hover:opacity-90">
                Solicitar clases
              </Button>
            </a>
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
                          href="mailto:comunicacion@espacioc.es"
                          className="font-sans text-foreground hover:text-accent transition-colors cursor-pointer"
                        >
                          comunicacion@espacioc.es
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
                    {/* Sección de web usando la variable espacioCWeb */}
                    <div className="flex items-center gap-4 p-4 bg-soft-cream rounded-lg">
                      <Globe className="w-5 h-5 text-accent flex-shrink-0" />
                      <div>
                        <p className="font-sans font-medium text-primary">
                          Web
                        </p>
                        <a
                          href={espacioCWeb}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-sans text-foreground hover:text-accent transition-colors underline"
                        >
                          Vísitanos
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
