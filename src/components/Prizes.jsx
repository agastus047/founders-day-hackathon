import Mainprize from "./Mainprize";
import Prizecard from "./Prizecard"
import prizelist from './prizelist'
import best from '../assets/logos/tkm-logo.png'
const Prizes = () =>
{
    const cards = prizelist.map(item =>
    (
      <Prizecard key={item.id} prop={item}/>
    ));
    
    return(
        <div className="lg:mt-16">
         <div className="text-white font-bold text-4xl lg:text-5xl text-center my-4 ">
            PRIZES
         </div>
         <Mainprize/>
         <div className="text-white font-bold text-4xl text-center my-16 lg:text-5xl">
            SPECIAL PRIZE
         </div>
        
         <div className="bg-gradient-to-l from-[#1b0362] to-[#50feff]  flex gap-2 md:gap-8 items-center justify-center md:mx-32 lg:mx-64 mx-8 rounded-3xl p-5 lg:px-16" data-aos="flip-up" 
     data-aos-duration="2000">
         {/* <div className="max-w-[40%]"><img src={best} /></div> */}
         <div className="flex flex-col gap-5 lg:gap-10 items-center justify-center lg:w-full ">
            <div className='font-bold text-2xl  lg:text-5xl text-center text-white'>Innovation by TKM</div>
            <div className='text-xl md:text-2xl lg:text-4xl text-white  font-semibold'>₹30000</div>
            </div>
         </div>
         <div className="text-white font-bold text-4xl text-center my-16 lg:text-5xl">
            TRACK PRIZES
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 h-min gap-10 mx-5 my-8 ">
            {cards}
         </div>
        </div>
    )
}

export default Prizes

// lg:bg-gradient-to-b from-purple-600 via-purple-800 to-blue-500