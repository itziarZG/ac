import React from "react";

const CalendarSection = () => (
  <section id="calendario" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
            Calendario
          </h2>
          <p className="font-sans text-lg text-muted-foreground">
            Próximas actuaciones y eventos donde podrás disfrutar de mi música
            en vivo
          </p>
        </div>
        <div className="flex justify-center">
          <iframe
            className="hidden md:block"
            src="https://calendar.google.com/calendar/embed?src=managementangelacervantes@gmail.com&ctz=Europe/Prague"
            style={{ border: 0, width: "100%", minHeight: 600 }}
            frameBorder="0"
            scrolling="no"
            title="Calendario de eventos"
            allowFullScreen
          ></iframe>
          <iframe
            className="block md:hidden"
            src="https://calendar.google.com/calendar/embed?src=managementangelacervantes@gmail.com&ctz=Europe/Prague&mode=AGENDA"
            style={{ border: 0, width: "100%", minHeight: 600 }}
            frameBorder="0"
            scrolling="no"
            title="Calendario de eventos"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  </section>
);

export default CalendarSection;
