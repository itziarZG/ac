import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CallToActionFloating = () => {
  const { toast } = useToast();

  const handleEmailClick = () => {
    const email = "comunicacion@espacioc.es";
    const mailtoLink = `mailto:${email}`;

    try {
      // Intentar abrir el cliente de correo
      window.location.href = mailtoLink;

      // Si estamos en desarrollo o no hay cliente de correo, mostrar un toast después de un breve delay
      setTimeout(() => {
        toast({
          title: "¿No se abrió tu cliente de correo?",
          description: `Puedes escribirnos a: ${email}`,
        });
      }, 1000);
    } catch (error) {
      // Fallback si hay algún error
      toast({
        title: "Contacto",
        description: `Escríbenos a: ${email}`,
      });
    }
  };

  const copyEmail = () => {
    navigator.clipboard
      .writeText("comunicacion@espacioc.es")
      .then(() => {
        toast({
          title: "¡Email copiado!",
          description: "El email se ha copiado al portapapeles correctamente.",
        });
      })
      .catch(() => {
        toast({
          title: "Error al copiar",
          description: "No se pudo copiar el email al portapapeles.",
          variant: "destructive",
        });
      });
  };

  return (
    <>
      {/* Mobile banner */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-[60]">
        <div className="mx-4 mb-4 rounded-xl bg-gradient-to-r from-accent to-primary text-white shadow-soft px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-white/90 animate-pulse" />
            <span className="font-display text-base">Contratación</span>
          </div>
          <div className="flex items-center gap-2 opacity-95">
            <button
              onClick={handleEmailClick}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <span className="hidden xs:inline font-sans text-sm">
                Escríbenos
              </span>
              <Mail className="h-5 w-5" />
            </button>
            <button
              onClick={copyEmail}
              className="flex items-center gap-1 hover:opacity-80 transition-opacity"
              title="Copiar email"
            >
              <Copy className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Desktop floating pill */}
      <div className="hidden md:block fixed bottom-6 right-6 z-[60]">
        <div className="relative">
          <span className="absolute -top-1 -right-1 inline-flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-accent" />
          </span>
          <div className="flex gap-2">
            <Button
              onClick={handleEmailClick}
              className="shadow-soft bg-gradient-to-r from-accent to-primary text-white hover:opacity-90 hover:shadow-lg transition-all cursor-pointer"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contratación
            </Button>
            <Button
              onClick={copyEmail}
              variant="outline"
              size="sm"
              className="shadow-soft hover:opacity-90 transition-all cursor-pointer"
              title="Copiar email"
            >
              <Copy className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToActionFloating;
