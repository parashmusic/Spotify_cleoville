import React from "react";

const Card = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black p-6">
      {/* Blurred Circles Animation */}
      {/* <h2 className="text-white pb-4 font-bold  relative bottom-[60px]">DEDICATED</h2> */}
      {/* <div className="absolute top-0 left-0 w-72 h-72 bg-green-500 blur-3xl rounded-full opacity-30 animate-pulse" /> */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-blue-500 blur-3xl rounded-full opacity-30 animate-pulse" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-purple-500 blur-3xl rounded-full opacity-30 animate-pulse" />

      {/* Spotify Embed Container */}
      <div className="relative w-full max-w-lg bg-gray-800 bg-opacity-30 backdrop-blur-lg backdrop-filter shadow-lg rounded-3xl p-6 text-white">

        {/* Artist Info */}
        <div className="flex flex-col items-start mb-4">
          <h2 className="text-2xl font-bold tracking-tight">Joubona</h2>
          <p className="text-lg text-gray-400">Bhaskar Opswel</p>
        </div>
        {/* Spotify Embed */}
        <iframe
          className="rounded-2xl shadow-lg"
          src="https://open.spotify.com/embed/track/7rxz1T2sVH6uP5z0BSK09S?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Card;
