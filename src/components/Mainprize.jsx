import first from '../assets/first.png'
import second from '../assets/second.png'
import third from '../assets/third.png'


const Mainprize = () => {
    let prizestl = 'text-3xl lg:text-[2.75rem] text-transparent bg-gradient-to-b from-[#148ef9] to-[#50feff] bg-clip-text text-transparent bg-clip-text  font-semibold';
  return (
 <div className="flex flex-col md:flex-row  justify-center  mb-12 lg:mb-20 " >
  <div className="md:flex flex-col  hidden items-center md:mt-24" data-aos="fade-up">
   <img src={second} alt="" className="lg:max-w-[70%]"/>
   <p className={prizestl} >₹50,000</p>
     </div>
     <div className="flex flex-col  items-center " data-aos="fade-down">
     <img src={first} alt="" className="lg:max-w-[70%]"/>
     <p className={prizestl}>₹1,00,000</p>
     </div>
     <div className="flex flex-col  md:hidden items-center md:mt-24" data-aos="fade-up">
   <img src={second} alt="" className="lg:max-w-[70%]"/>
   <p className={prizestl} >₹50,000</p>
     </div>
     <div className="flex flex-col  items-center md:mt-24 " data-aos="fade-up">
     <img src={third} alt="" className="lg:max-w-[70%]"/>
     <p className={prizestl}>₹30,000</p>
     </div>
     </div>
  )
}

export default Mainprize
{/* <div className="text-light text-3xl  md:text-xl">
     <span className=" text-3xl md:text-xl mr-1 "> ₹</span>20,000</div> */}
{/* <div class="flex flex-row  justify-center items-center  "><div class="flex flex-col justify-center items-center mt-[7rem]"><img src="/static/media/1st 2.94977e9bf0219f79d2db.png" alt="" class="max-w-[70%]"><div class="text-light text-3xl font-primary md:text-xl"><span class=" text-3xl md:text-xl mr-1 "> ₹</span>20,000</div></div><div class="flex flex-col justify-center items-center "><img src="/static/media/1st 1.3a5a89a37583452190ac.png" alt="" class="max-w-[70%]"><div class="text-light text-3xl font-primary md:text-xl"><span class=" text-3xl md:text-xl mr-1 "> ₹</span>30,000</div></div><div class="flex flex-col justify-center items-center mt-[7rem]"><img src="/static/media/1st 3.6b8d67e662fd4f33e18d.png" alt="" class="max-w-[70%]"><div class="text-light text-3xl font-primary md:text-xl"><span class=" text-3xl md:text-xl mr-1 "> ₹</span>10,000</div></div></div> */}


    // <div className='flex my-16 justify-center gap-10 bg-gradient-to-t from-blue-600 to-green-400 text-transparent bg-clip-text  font-semibold  '>
    //     <div className="flex flex-col mt-32 items-center gap-6 "  data-aos="fade-up-right">
    //         <img src={icon}  className='max-w-[65%]'/>
    //         <p className='text-3xl'>₹50000</p>
    //     </div>
    //     <div className="flex flex-col items-center gap-6" data-aos="fade-down">
    //         <img src={icon} className='max-w-[65%]'/>
    //         <p className='text-3xl'>₹100000</p>
    //     </div>
    //     <div className="flex flex-col mt-32 items-center gap-6 " data-aos="fade-up-left">
    //         <img src={icon} className='max-w-[65%]'/>
    //         <p className='text-3xl'>₹30000</p>
    //     </div>
    // </div>