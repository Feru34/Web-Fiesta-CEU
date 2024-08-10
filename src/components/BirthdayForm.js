import React, { useState } from 'react';
import '../styles/BirthdayForm.css';

const zodiacSigns = [
  { sign: 'Aries', start: '03-21', end: '04-19' },
  { sign: 'Tauro', start: '04-20', end: '05-20' },
  { sign: 'Géminis', start: '05-21', end: '06-20' },
  { sign: 'Cáncer', start: '06-21', end: '07-22' },
  { sign: 'Leo', start: '07-23', end: '08-22' },
  { sign: 'Virgo', start: '08-23', end: '09-22' },
  { sign: 'Libra', start: '09-23', end: '10-22' },
  { sign: 'Escorpio', start: '10-23', end: '11-21' },
  { sign: 'Sagitario', start: '11-22', end: '12-21' },
  { sign: 'Capricornio', start: '12-22', end: '01-19' },
  { sign: 'Acuario', start: '01-20', end: '02-18' },
  { sign: 'Piscis', start: '02-19', end: '03-20' }
];

const songs = {
  Aries: 'Canción para Aries',
  Tauro: 'Canción para Tauro',
  Géminis: 'Canción para Géminis',
  Cáncer: 'Canción para Cáncer',
  Leo: 'Canción para Leo',
  Virgo: 'Canción para Virgo',
  Libra: 'Canción para Libra',
  Escorpio: 'Canción para Escorpio',
  Sagitario: 'Canción para Sagitario',
  Capricornio: 'Canción para Capricornio',
  Acuario: 'Canción para Acuario',
  Piscis: 'Canción para Piscis'
};

const BirthdayForm = ({ setZodiacInfo }) => {
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const monthDay = `${month.padStart(2, '0')}-${day.padStart(2, '0')}`;

    const zodiac = zodiacSigns.find((z) =>
      (monthDay >= z.start && monthDay <= z.end) ||
      (z.sign === 'Capricornio' && (monthDay >= '12-22' || monthDay <= '01-19'))
    );

    if (zodiac) {
      setZodiacInfo({
        sign: zodiac.sign,
        song: songs[zodiac.sign],
      });
    }
  };

  return (
    <form className="birthday-form" onSubmit={handleSubmit}>
      <label>Introduce tu fecha de cumpleaños:</label>
      <div className="date-inputs">
        <input
          type="number"
          placeholder="Mes (MM)"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          min="1"
          max="12"
          required
        />
        <input
          type="number"
          placeholder="Día (DD)"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          min="1"
          max="31"
          required
        />
      </div>
      <button type="submit">Ver mi signo y canción</button>
    </form>
  );
};

export default BirthdayForm;
