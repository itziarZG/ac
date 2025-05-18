import React from 'react';
import ConcertCard from './ConcertCard';

const ConcertList = () => {
  const concerts = [
    {
      date: '15',
      month: 'JUN',
      title: 'Festival Tradicionàrius',
      location: 'CAT Centre Artesà Tradicionàrius, Barcelona',
      time: '20:00',
      ticketUrl: 'https://entradium.com/events/angela-cervantes'
    },
    {
      date: '25',
      month: 'JUL',
      title: 'Festival de Verano',
      location: 'Teatro Principal, Madrid',
      time: '21:30',
      ticketUrl: 'https://example.com/tickets'
    }
    // Add more concerts as needed
  ];

  return (
    <section className="p-2 flex flex-col items-center">
      <h2 className="font-rosaline text-6xl tracking-wider">Conciertos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-auto-fill minmax(280px, 1fr) gap-6 w-full max-w-4xl mt-6">
        {concerts.map((concert, index) => (
          <ConcertCard
            key={`${concert.date}-${concert.month}-${index}`}
            {...concert}
          />
        ))}
      </div>
    </section>
  );
};

export default ConcertList;
