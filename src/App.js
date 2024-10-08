import React, { useState } from 'react';
import BirthdayForm from './components/BirthdayForm';
import ZodiacResult from './components/ZodiacResult';
import './styles/App.css';

const App = () => {
  const [zodiacInfo, setZodiacInfo] = useState(null);

  return (
    <div className="app-container">
      
      {!zodiacInfo ? (
        <BirthdayForm setZodiacInfo={setZodiacInfo} />
      ) : (
        <ZodiacResult zodiacInfo={zodiacInfo} />
      )}
    </div>
  );
};

export default App;
