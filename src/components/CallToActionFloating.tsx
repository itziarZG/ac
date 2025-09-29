import React from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const CallToActionFloating = () => {
  return (
    <>
      {/* Mobile banner */}
      <a
        href="mailto:hola@espacioc.es"
        aria-label="Contacto / Management"
        className="md:hidden fixed bottom-0 left-0 right-0 z-[60]"
      >
        <div className="mx-4 mb-4 rounded-xl bg-gradient-to-r from-accent to-primary text-white shadow-soft px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-white/90 animate-pulse" />
            <span className="font-display text-base">Management</span>
          </div>
          <div className="flex items-center gap-2 opacity-95">
            <span className="hidden xs:inline font-sans text-sm">
              Escríbenos
            </span>
            <Mail className="h-5 w-5" />
          </div>
        </div>
      </a>

      {/* Desktop floating pill */}
      <div className="hidden md:block fixed bottom-6 right-6 z-[60]">
        <a href="mailto:hola@espacioc.es" aria-label="Contacto / Management">
          <div className="relative">
            <span className="absolute -top-1 -right-1 inline-flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent" />
            </span>
            <Button className="shadow-soft bg-gradient-to-r from-accent to-primary text-white hover:opacity-90 hover:shadow-lg transition-all">
              <Mail className="mr-2 h-5 w-5" />
              Management
            </Button>
          </div>
        </a>
      </div>
    </>
  );
};

export default CallToActionFloating;
