import { useState,useEffect } from "react";
const Theme = () => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [showCountdown, setShowCountdown] = useState(true);

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

      // If the deadline has passed, stop the countdown and show "Coming Soon" text
      if (distance <= 0) {
        setShowCountdown(false);
      }
    };

    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-8 mx-5">
      <div className="text-white font-bold text-4xl md:text-5xl text-center my-5">THEME</div>
      <div className="mt-5 text-xl lg:text-3xl bg-clip-text font-extrabold h-max uppercase text-center">
        {showCountdown ? (
          <div>
             <p className="text-transparent bg-gradient-to-t from-[#148ef9] to-[#50feff] bg-clip-text leading-relaxed">
            {countdown.days} days: {countdown.hours} hours: {countdown.minutes} minutes: {countdown.seconds} seconds
          </p>
            </div>
         
        ) : (
          <p className="text-white">Coming Soon</p>
        )}
      </div>
    </div>
  );
};

export default Theme;
