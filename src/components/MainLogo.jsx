import React, { useState, useEffect } from 'react';
import hack4tkm_color from "../assets/logos/HACK4TKM_COLOR2.png";
import { ThreeCircles } from 'react-loader-spinner';

const MainLogo = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Simulate a 2-second delay before hiding the loader
    const timeoutId = setTimeout(() => {
      setShowLoader(false);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      <div>
        {showLoader ? (
          <div className='flex flex-col md:flex-row justify-center items-center m-5'>
             <ThreeCircles
            height={50}
            width={50}
            color="#4fa94d"
            visible={showLoader}
            ariaLabel="three-circles-rotating"
            outerCircleColor="#50fefe"
            innerCircleColor="#1b0362"
            middleCircleColor="#50fefe"
          />
          </div>
         
        ) : (
          <div>
             <img src={hack4tkm_color} alt="hack4tkm_color" className="" />

{/* <h2 className="font-bold text-5xl text-transparent bg-gradient-to-b from-[#1b0362] to-[#50fefe] bg-clip-text">Build beyond limits</h2> */}
            </div>
         
        )}
      </div>
    </div>
  );
};

export default MainLogo;
