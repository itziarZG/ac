import React, { useEffect, useState } from "react";
import { Calendar, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const CALENDAR_ID = "managementangelacervantes@gmail.com";
const API_KEY = "PON_AQUI_TU_API_KEY"; // <-- Reemplaza esto por tu API Key

const CalendarSection = () => {
  const [events, setEvents] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      setError(null);
      try {
        const now = new Date().toISOString();
        const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
          CALENDAR_ID
        )}/events?key=${API_KEY}&singleEvents=true&orderBy=startTime&timeMin=${now}`;
        const res = await fetch(url);
        if (!res.ok) throw new Error("No se pudo obtener el calendario");
        const data = await res.json();
        setEvents(data.items || []);
      } catch (err: any) {
        setError(err.message || "Error desconocido");
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

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
          {loading && <p className="text-center">Cargando eventos...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}
          <div className="space-y-6">
            {events.map((event) => {
              const start = event.start?.dateTime || event.start?.date;
              const dateObj = start ? new Date(start) : null;
              return (
                <Card
                  key={event.id}
                  className="overflow-hidden border border-border hover:shadow-soft transition-all duration-300"
                >
                  <CardContent className="p-4">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="flex-shrink-0">
                        <div className="bg-accent text-accent-foreground p-4 rounded-lg text-center min-w-[80px]">
                          <div className="font-sans text-sm font-medium">
                            {dateObj
                              ? dateObj.toLocaleDateString("es-ES", {
                                  day: "2-digit",
                                })
                              : ""}
                          </div>
                          <div className="font-display text-lg font-bold">
                            {dateObj
                              ? dateObj
                                  .toLocaleDateString("es-ES", {
                                    month: "short",
                                  })
                                  .toUpperCase()
                              : ""}
                          </div>
                          <div className="font-sans text-sm">
                            {dateObj
                              ? dateObj.toLocaleDateString("es-ES", {
                                  year: "numeric",
                                })
                              : ""}
                          </div>
                        </div>
                      </div>
                      <div className="flex-grow space-y-2">
                        <h3 className="font-display text-xl font-semibold text-primary">
                          {event.summary}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span className="font-sans">
                              {event.location || "Por anunciar"}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span className="font-sans">
                              {dateObj && event.start?.dateTime
                                ? dateObj.toLocaleTimeString("es-ES", {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  })
                                : ""}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
            {!loading && !error && events.length === 0 && (
              <p className="text-center text-muted-foreground">
                No hay eventos próximos.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;
