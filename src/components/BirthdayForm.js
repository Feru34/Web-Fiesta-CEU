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
    images: ['/images/5.png', '/images/6.png', '/images/7.png', '/images/8.png']
  },
  { 
    sign: 'Aries', 
    start: '03-21', 
    end: '04-19',
    images: ['/images/9.png', '/images/10.png', '/images/11.png', '/images/12.png']
  },
  { 
    sign: 'Tauro', 
    start: '04-20', 
    end: '05-20',
    images: ['/images/13.png', '/images/14.png', '/images/15.png', '/images/16.png']
  },
  { 
    sign: 'Géminis', 
    start: '05-21', 
    end: '06-20',
    images: ['/images/17.png', '/images/18.png', '/images/19.png', '/images/20.png']
  },
  { 
    sign: 'Cáncer', 
    start: '06-21', 
    end: '07-22',
    images: ['/images/21.png', '/images/22.png', '/images/23.png', '/images/24.png']
  },
  { 
    sign: 'Leo', 
    start: '07-23', 
    end: '08-22',
    images: ['/images/25.png', '/images/26.png', '/images/27.png', '/images/28.png']
  },
  { 
    sign: 'Virgo', 
    start: '08-23', 
    end: '09-22',
    images: ['/images/29.png', '/images/30.png', '/images/31.png', '/images/32.png']
  },
  { 
    sign: 'Libra', 
    start: '09-23', 
    end: '10-22',
    images: ['/images/33.png', '/images/34.png', '/images/35.png', '/images/36.png']
  },
  { 
    sign: 'Escorpio', 
    start: '10-23', 
    end: '11-21',
    images: ['/images/37.png', '/images/38.png', '/images/39.png', '/images/40.png']
  },
  { 
    sign: 'Sagitario', 
    start: '11-22', 
    end: '12-21',
    images: ['/images/41.png', '/images/42.png', '/images/43.png', '/images/44.png']
  },
  { 
    sign: 'Capricornio', 
    start: '12-22', 
    end: '01-19',
    images: ['/images/45.png', '/images/46.png', '/images/47.png', '/images/48.png']
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
