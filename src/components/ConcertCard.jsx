import React from 'react';

const ConcertCard = ({ date, month, title, location, time, ticketUrl }) => {
  return (
    <article className="bg-white bg-opacity-90 rounded-xl overflow-hidden flex shadow-lg transition-transform duration-300 ease-in-out hover:translate-y-[-5px] hover:shadow-xl">
      <div className="bg-green-700 text-white p-4 flex flex-col items-center justify-center min-w-[80px] text-center">
        <span className="text-3xl font-bold leading-none">{date}</span>
        <span className="text-base font-semibold mt-0.5">{month}</span>
      </div>
      <div className="flex-1 p-4">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-gray-600 mb-2">{location}</p>
        <p className="text-gray-500 text-sm mb-3">{time}</p>
        {ticketUrl && (
          <a
            href={ticketUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors duration-300"
          >
            Entradas
          </a>
        )}
      </div>
    </article>
  );
};

export default ConcertCard;
