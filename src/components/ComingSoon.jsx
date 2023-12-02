// CountdownClock.js
import React, { useState, useEffect } from 'react';
import hack4tkm_color from "../assets/logos/HACK4TKM_COLOR.png"

const CountdownClock = () => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const deadline = new Date('December 15, 2023 00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = deadline - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    };

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-full bg-black text-white font-tech">
      <div className="  flex flex-col items-center justify-center">
        
        <img src={hack4tkm_color} alt="Coming Soon" className="w-[40%] h-[40%]" />
        <div className='text-2xl font-semibold mb-2 '>Feb 17 | 18</div>

        <div className="flex items-center space-x-4 mb-4 ">
        <div className="text-4xl font-bold">{countdown.days}d:</div>
        <div className="text-4xl font-bold">{countdown.hours}h:</div>
        <div className="text-4xl font-bold">{countdown.minutes}m:</div>
        <div className="text-4xl font-bold">{countdown.seconds}s</div>
      </div>
      </div>
      <div className="text-4xl gradient-text font-bold mb-2 p-2 font-poppins">
        Coming Soon
        
      </div>

      
    </div>
  );
};

export default CountdownClock;
