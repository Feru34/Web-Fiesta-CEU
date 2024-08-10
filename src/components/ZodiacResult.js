import React from 'react';
import '../styles/ZodiacResult.css';

const ZodiacResult = ({ zodiacInfo }) => {
  return (
    <div className="zodiac-result">
      <h2>Tu signo es {zodiacInfo.sign}!</h2>
      <p>Te recomendamos escuchar: {zodiacInfo.song}</p>
      <button onClick={() => window.location.reload()}>Probar otra vez</button>
    </div>
  );
};

export default ZodiacResult;
