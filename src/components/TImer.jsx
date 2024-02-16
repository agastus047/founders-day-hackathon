import React, { useState, useEffect } from 'react';

const Stopwatch = () => {
  const startTime = new Date("2024-02-16T18:00:00Z"); // 6:00 PM on February 16
  const endTime = new Date("2024-02-18T01:30:00Z"); // 7:00 AM on February 18
  const timerDuration = 37 * 60 * 60; // 37 hours in seconds

  const calculateTimeRemaining = () => {
    const istCurrentTime = new Date(new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
    const remainingTimeInSeconds = Math.floor((endTime - istCurrentTime) / 1000);

    let timeRemaining = {};

    if (remainingTimeInSeconds >= 0) {
      timeRemaining = {
        hours: Math.floor(remainingTimeInSeconds / 3600),
        minutes: Math.floor((remainingTimeInSeconds % 3600) / 60),
        seconds: remainingTimeInSeconds % 60
      };
    }

    return timeRemaining;
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timerComponents = [
    <span key="hours">{timeRemaining.hours.toString().padStart(2, '0')}</span>,
    <span key="separator">:</span>,
    <span key="minutes">{timeRemaining.minutes.toString().padStart(2, '0')}</span>,
    <span key="separator">:</span>,
    <span key="seconds">{timeRemaining.seconds.toString().padStart(2, '0')}</span>
  ];

  return (
    <div className="bg-black text-blue-500 p-4 text-center text-6xl">
      <div className="text-white text-4xl font-bold">Time Remaining</div>
      <div className='text-transparent bg-gradient-to-t from-[#148ef9] to-[#50feff] bg-clip-text leading-relaxed'>{timerComponents}</div>
    </div>
  );
};

export default Stopwatch;
