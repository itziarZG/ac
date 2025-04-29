import React from 'react';

const VideoCarousel = () => {
  const videos = [
    {
      id: 'item1',
      title: 'Ángela Cervantes - Arrels d\'Ara',
      url: 'https://www.youtube.com/embed/QPpQE97_EPQ'
    },
    {
      id: 'item2',
      title: 'Ángela Cervantes - Olas y Arenas',
      url: 'https://www.youtube.com/embed/Q1vOQDh5zKY'
    },
    {
      id: 'item3',
      title: 'Ángela Cervantes - Camarón',
      url: 'https://www.youtube.com/embed/2RmFBg1P5_M'
    },
    {
      id: 'item4',
      title: 'Ángela Cervantes - Live',
      url: 'https://www.youtube.com/embed/zIcjXDCyYJ8'
    }
  ];

  return (
    <section className=" flex flex-col items-center">
      <h2 className="font-sacramento text-6xl tracking-wider">Videos</h2>
      <div className="carousel w-full">
        {videos.map((video) => (
          <div key={video.id} id={video.id} className="carousel-item w-full">
            <iframe
              width="560"
              height="315"
              src={video.url}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="mx-auto"
            />
          </div>
        ))}
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        {videos.map((video, index) => (
          <a
            key={video.id}
            href={`#${video.id}`}
            className="btn btn-xs opacity-60 rounded-2xl hover:opacity-100 transition-opacity duration-300"
          >
            {index + 1}
          </a>
        ))}
      </div>
    </section>
  );
};

export default VideoCarousel;
