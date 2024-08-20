import React from 'react';
import '../styles/ZodiacResult.css';

const ZodiacResult = ({ zodiacInfo }) => {
  return (
    <div className="zodiac-result">
      <h2>Tu signo es {zodiacInfo.sign}</h2>
      <p>Esta será tu canción de la noche</p>
      {/* Mostrar la imagen del signo */}
      <div className="image-container">
        <img src={zodiacInfo.image} alt={`Imagen de ${zodiacInfo.sign}`} className="zodiac-image" />
      </div>
      <button onClick={() => window.location.reload()}>Probar otra vez</button>
    </div>
  );
};

export default ZodiacResult;
