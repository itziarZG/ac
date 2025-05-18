import React from 'react';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@angelacervantesmusic',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
        </svg>
      )
    },
    {
      name: 'Spotify',
      url: 'https://open.spotify.com/artist/3Cmri0Agw9HwVy2fNTblZ6',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm-1.834 15.496c3.063 0 5.834-1.241 7.834-3.241l-1.414-1.414c-1.622 1.622-3.858 2.655-6.42 2.655-2.564 0-4.798-1.033-6.42-2.655l-1.414 1.414c2 2 4.771 3.241 7.834 3.241zm.328-3.992c2.101 0 4.023-.743 5.523-2.242l-1.414-1.414c-1.105 1.104-2.63 1.656-4.109 1.656-1.477 0-3.004-.551-4.108-1.656l-1.414 1.414c1.499 1.499 3.422 2.242 5.522 2.242zm-.331-4c1.688 0 3.224-.676 4.342-1.793l-1.414-1.414c-.729.729-1.738 1.207-2.928 1.207-1.189 0-2.199-.478-2.928-1.207l-1.414 1.414c1.118 1.118 2.654 1.793 4.342 1.793z"/>
        </svg>
      )
    },
  ];

  return (
    <div className="mx-auto my-1 w-1/4 flex justify-evenly bg-white text-black p-1 rounded-xl">
      {socialLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon hover:text-green-700 transition-colors duration-300"
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
