import React, { useState } from 'react';
import '../styles/BirthdayForm.css';

const zodiacSigns = [
  { 
    sign: 'Acuario', 
    start: '01-20', 
    end: '02-18',
    images: ['/images/1.png', '/images/2.png', '/images/3.png', '/images/4.png'],
  },
  { 
    sign: 'Piscis', 
    start: '02-19', 
    end: '03-20',
    images: ['/images/Piscis1.png', '/images/Piscis2.png', '/images/Piscis3.png', '/images/Piscis4.png']
  },
  { 
    sign: 'Aries', 
    start: '03-21', 
    end: '04-19',
    images: ['/images/Aries1.png', '/images/Aries2.png', '/images/Aries3.png', '/images/Aries4.png']
  },
  { 
    sign: 'Tauro', 
    start: '04-20', 
    end: '05-20',
    images: ['/images/Tauro1.png', '/images/Tauro2.png', '/images/Tauro3.png', '/images/Tauro4.png']
  },
  { 
    sign: 'Géminis', 
    start: '05-21', 
    end: '06-20',
    images: ['/images/Géminis1.png', '/images/Géminis2.png', '/images/Géminis3.png', '/images/Géminis4.png']
  },
  { 
    sign: 'Cáncer', 
    start: '06-21', 
    end: '07-22',
    images: ['/images/Cáncer1.png', '/images/Cáncer2.png', '/images/Cáncer3.png', '/images/Cáncer4.png']
  },
  { 
    sign: 'Leo', 
    start: '07-23', 
    end: '08-22',
    images: ['/images/Leo1.png', '/images/Leo2.png', '/images/Leo3.png', '/images/Leo4.png']
  },
  { 
    sign: 'Virgo', 
    start: '08-23', 
    end: '09-22',
    images: ['/images/Virgo1.png', '/images/Virgo2.png', '/images/Virgo3.png', '/images/Virgo4.png']
  },
  { 
    sign: 'Libra', 
    start: '09-23', 
    end: '10-22',
    images: ['/images/Libra1.png', '/images/Libra2.png', '/images/Libra3.png', '/images/Libra4.png']
  },
  { 
    sign: 'Escorpio', 
    start: '10-23', 
    end: '11-21',
    images: ['/images/Escorpio1.png', '/images/Escorpio2.png', '/images/Escorpio3.png', '/images/Escorpio4.png']
  },
  { 
    sign: 'Sagitario', 
    start: '11-22', 
    end: '12-21',
    images: ['/images/Sagitario1.png', '/images/Sagitario2.png', '/images/Sagitario3.png', '/images/Sagitario4.png']
  },
  { 
    sign: 'Capricornio', 
    start: '12-22', 
    end: '01-19',
    images: ['/images/Capricornio1.png', '/images/Capricornio2.png', '/images/Capricornio3.png', '/images/Capricornio4.png']
  }
];


const songs = {
  Acuario: 'Canción para Acuario',
  Piscis: 'Canción para Piscis',
  Aries: 'Canción para Aries',
  Tauro: 'Canción para Tauro',
  Géminis: 'Canción para Géminis',
  Cáncer: 'Canción para Cáncer',
  Leo: 'Canción para Leo',
  Virgo: 'Canción para Virgo',
  Libra: 'Canción para Libra',
  Escorpio: 'Canción para Escorpio',
  Sagitario: 'Canción para Sagitario',
  Capricornio: 'Canción para Capricornio'
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
      const randomImage = zodiac.images[Math.floor(Math.random() * zodiac.images.length)];
      setZodiacInfo({
        sign: zodiac.sign,
        song: songs[zodiac.sign],
        image: randomImage
      });
    }
  };

  return (
    <form className="birthday-form" onSubmit={handleSubmit}>
      <p>Danos tu signo y te diremos tu canción de la noche </p>
      <div className="date-inputs">
        <input
          type="number"
          placeholder="Día (DD)"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          min="1"
          max="31"
          required
        />
        <input
          type="number"
          placeholder="Mes (MM)"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          min="1"
          max="12"
          required
        />
      </div>
      <button type="submit">Ver mi signo y canción</button>
    </form>
  );
};

export default BirthdayForm;
