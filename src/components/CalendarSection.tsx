import React from "react";
import { Calendar, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CalendarSection = () => {
  const events = [
    {
      id: 1,
      date: "15 FEB 2024",
      title: "Concierto en Teatro Principal",
      location: "Valencia, España",
      time: "20:30",
    },
    {
      id: 2,
      date: "22 FEB 2024",
      title: "Festival de Música Tradicional",
      location: "Sevilla, España",
      time: "19:00",
    },
    {
      id: 3,
      date: "08 MAR 2024",
      title: "Recital Íntimo - 'Palabras'",
      location: "Madrid, España",
      time: "21:00",
    },
    {
      id: 4,
      date: "20 MAR 2024",
      title: "Colaboración con Orquesta Sinfónica",
      location: "Barcelona, España",
      time: "20:00",
    },
  ];

  return (
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

          <div className="space-y-6">
            {events.map((event) => (
              <Card
                key={event.id}
                className="overflow-hidden border border-border hover:shadow-soft transition-all duration-300"
              >
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-accent text-accent-foreground p-4 rounded-lg text-center min-w-[80px]">
                        <div className="font-sans text-sm font-medium">
                          {event.date.split(" ")[0]}
                        </div>
                        <div className="font-display text-lg font-bold">
                          {event.date.split(" ")[1]}
                        </div>
                        <div className="font-sans text-sm">
                          {event.date.split(" ")[2]}
                        </div>
                      </div>
                    </div>

                    <div className="flex-grow space-y-2">
                      <h3 className="font-display text-xl font-semibold text-primary">
                        {event.title}
                      </h3>

                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span className="font-sans">{event.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span className="font-sans">{event.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* <div className="text-center mt-12">
            <p className="font-sans text-sm text-muted-foreground mb-4">
              ¿Quieres estar al día de todos mis conciertos?
            </p>
            <button className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-sans font-medium hover:bg-accent/90 transition-colors">
              <Calendar className="w-4 h-4 inline mr-2" />
              Suscríbete a mi calendario
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;
