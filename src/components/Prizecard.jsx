
const Prizecard = ({prop}) =>
{
    return(
        
        <div data-aos="fade" className="border border-gradient-animation p-4 text-white flex flex-col gap-5 rounded-xl items-center p-5 mx-5 glass">
            {/* <div ><img src={prop.iconlink} className='h-10 lg:h-14'/></div> */}
            <div className='font-bold text-2xl lg:text-3xl text-center text-transparent bg-gradient-to-b from-[#1b0362] to-[#50fefe] bg-clip-text text-transparent bg-clip-text p-4'>{prop.title}</div>
            <div className='text-xl lg:text-2xl text-transparent bg-gradient-to-b from-[#1b0362] to-[#50fefe] bg-clip-text   font-semibold'>{prop.prize}</div>
        </div>
        
    )
}

export default Prizecard
