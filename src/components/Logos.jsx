import React from 'react';
import DevFolio from "../assets/logos/Devfolio_logo.png"
import Polygon from "../assets/logos/Polygon_Dark.png"
import Replit from "../assets/logos/replit_dark.png"
const LogoContainer = () => {
  return (
    <div className='mt-10'>
      <div data-aos="fade" className="mt-10 flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10">
        <a href="https://devfolio.co"><img
          className="mb-4 md:mb-0 md:mr-4 w-100 h-24"
          src={DevFolio} 
          alt="DEVFOLIO LOGO"
        /></a>
        <div className='md:hidden text-xl text-white'>
            {/* Season Partners 🤝 */}
        </div>
{/*         <a href="https://polygon.technology/"><img
          className="md:ml-4 w-48 h-24"
          src={Polygon} 
          alt="POLYGON LOGO"
        /></a>
        <a href="https://replit.com"><img
          className="md:ml-4 w-48 h-24"
          src={Replit} 
          alt="REPLIT LOGO"
        /></a> */}
      </div>
    </div>
  );
};

export default LogoContainer;
