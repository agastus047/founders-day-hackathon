/* eslint-disable react/prop-types */

const Prizecard = ({prop}) =>
{
    return(
        
        <div data-aos="fade" className="border-4 border-gradient-animation p-4 text-white flex flex-col gap-3 rounded-xl items-center  mx-5 glass">
            {/* <div ><img src={prop.iconlink} className='h-10 lg:h-14'/></div> */}
            {/* <div className='font-bold text-3xl  text-center  bg-gradient-to-b from-[#148ef9] to-[#50feff]  text-transparent bg-clip-text p-4'>{prop.title}</div>
            <div className='text-2xl lg:text-2xl text-transparent bg-gradient-to-b from-[#148ef9] to-[#50feff] bg-clip-text   font-semibold'>{prop.prize}</div> */}
            <div className='font-bold text-3xl  text-center  text-white  text-transparent bg-clip-text p-4'>{prop.title}</div>
            <div className='text-2xl lg:text-2xl text-transparent text-white bg-clip-text   font-semibold'>{prop.prize}</div>
            
        </div>
        
    )
}

export default Prizecard
