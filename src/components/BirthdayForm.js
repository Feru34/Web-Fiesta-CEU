import React, { useState } from 'react';
import '../styles/BirthdayForm.css';

const zodiacSigns = [
  { 
    sign: 'Acuario', 
    start: '01-20', 
    end: '02-18',
    images: ['/images/1.png', '/images/2.png', '/images/3.png', '/images/4.png', '/images/5.png'],
    phrase: 'Acuario, ponte pa las situaciones excesivas y la indulgencia'
  },
  { 
    sign: 'Piscis', 
    start: '02-19', 
    end: '03-20',
    images: ['/images/6.png', '/images/7.png', '/images/8.png', '/images/9.png', '/images/10.png'],
    phrase: 'Piscis, no lo eches todo por la borda, por un amor que no lo merece'
  },
  { 
    sign: 'Aries', 
    start: '03-21', 
    end: '04-19',
    images: ['/images/11.png', '/images/12.png', '/images/13.png', '/images/14.png', '/images/15.png'],
    phrase: 'Aries, sigue con tu táctica de no darlo todo en bandeja'
  },
  { 
    sign: 'Tauro', 
    start: '04-20', 
    end: '05-20',
    images: ['/images/16.png', '/images/17.png', '/images/18.png', '/images/19.png', '/images/20.png'],
    phrase: 'Tauro, hoy es un día propicio para que surja un flechazo'
  },
  { 
    sign: 'Géminis', 
    start: '05-21', 
    end: '06-20',
    images: ['/images/21.png', '/images/22.png', '/images/23.png', '/images/24.png', '/images/25.png'],
    phrase: 'Géminis, coquetea un poco'
  },
  { 
    sign: 'Cáncer', 
    start: '06-21', 
    end: '07-22',
    images: ['/images/26.png', '/images/27.png', '/images/28.png', '/images/29.png', '/images/30.png'],
    phrase: 'Cáncer, ábrete al amor'
  },
  { 
    sign: 'Leo', 
    start: '07-23', 
    end: '08-22',
    images: ['/images/31.png', '/images/32.png', '/images/33.png', '/images/34.png', '/images/35.png'],
    phrase: 'Leo, procura seguir a tu voz interior hacia el perreo'
  },
  { 
    sign: 'Virgo', 
    start: '08-23', 
    end: '09-22',
    images: ['/images/36.png', '/images/37.png', '/images/38.png', '/images/39.png', '/images/40.png'],
    phrase: 'Virgo, día propicio para enamorarte sin prudencia'
  },
  { 
    sign: 'Libra', 
    start: '09-23', 
    end: '10-22',
    images: ['/images/41.png', '/images/42.png', '/images/43.png', '/images/44.png', '/images/45.png'],
    phrase: 'Libra, haz caso de la intuición'
  },
  { 
    sign: 'Escorpio', 
    start: '10-23', 
    end: '11-21',
    images: ['/images/46.png', '/images/47.png', '/images/48.png', '/images/49.png', '/images/50.png'],
    phrase: 'Escorpio, deja que todo fluya'
  },
  { 
    sign: 'Sagitario', 
    start: '11-22', 
    end: '12-21',
    images: ['/images/51.png', '/images/52.png', '/images/53.png', '/images/54.png', '/images/55.png'],
    phrase: 'Sagitario, escucha a la persona que ocupa tu corazón'
  },
  { 
    sign: 'Capricornio', 
    start: '12-22', 
    end: '01-19',
    images: ['/images/56.png', '/images/57.png', '/images/58.png', '/images/59.png', '/images/60.png'],
    phrase: 'Capricornio, céntrate en el presente y disfrútalo bailando'
  }
];




const songs = {
  Acuario: 'Acuario, ponte pa las situaciones excesivas y la indulgencia',
  Piscis: 'Piscis, no lo eches todo por la borda, por un amor que no lo merece',
  Aries: 'Aries, sigue con tu táctica de no darlo todo en bandeja',
  Tauro: 'Tauro, hoy es un día propicio para que surja un flechazo',
  Géminis: 'Géminis, coquetea un poco',
  Cáncer: 'Cáncer, ábrete al amor',
  Leo: 'Leo, procura seguir a tu voz interior hacia el perreo',
  Virgo: 'Virgo, día propicio para enamorarte sin prudencia',
  Libra: 'Libra, haz caso de la intuición',
  Escorpio: 'Escorpio, deja que todo fluya',
  Sagitario: 'Sagitario, escucha a la persona que ocupa tu corazón',
  Capricornio: 'Capricornio, céntrate en el presente y disfrútalo bailando'
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
        image: randomImage,
        phrase : zodiac.phrase
      });
    }
  };

  return (
    <form className="birthday-form" onSubmit={handleSubmit}>
      <h1>Sinica</h1>
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
