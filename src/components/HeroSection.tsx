import React from 'react';

const HeroSection = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center bg-gradient-mediterranean">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary mb-6">
            Ángela Cervantes
          </h1>
          
          <p className="font-sans text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Música tradicional española que conecta corazones y preserva nuestra herencia cultural
          </p>

          <div className="relative max-w-md mx-auto mb-12">
            <div className="aspect-square rounded-full overflow-hidden shadow-warm border-4 border-warm-gold/20">
              <img 
                src="/lovable-uploads/fc225e19-0605-4f94-937a-f89f4316913f.png"
                alt="Ángela Cervantes" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-sunset text-primary-foreground px-8 py-3 rounded-lg font-sans font-medium hover:shadow-warm transition-all duration-300 transform hover:scale-105"
            >
              Descubre mi música
            </button>
            <button 
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-accent text-accent px-8 py-3 rounded-lg font-sans font-medium hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            >
              Contacto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;