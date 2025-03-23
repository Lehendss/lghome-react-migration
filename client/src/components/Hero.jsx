import React from 'react';

function Hero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[80vh] flex items-center justify-center"
      style={{ backgroundImage: 'url("/images/hero.webp")' }}
    >
      {/* Overlay para oscurecer un poco la imagen */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl sm:text-5xl text-white font-bold mb-4">
          WE CREATE PLACES <br /> THAT DESERVE TO BE CALLED HOME
        </h1>
      </div>
    </section>
  );
}

export default Hero;
