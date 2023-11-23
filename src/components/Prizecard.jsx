
const Prizecard = ({prop}) =>
{
    return(
        
        <div data-aos="fade" className="bg-gray-800 text-white flex flex-col gap-5 rounded-xl items-center p-5">
            <div ><img src={prop.iconlink} className='h-10 lg:h-14'/></div>
            <div className='font-bold text-2xl lg:text-3xl text-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  text-transparent bg-clip-text'>{prop.title}</div>
            <div className='text-xl lg:text-2xl bg-gradient-to-r from-blue-600 to-light-blue-300 text-transparent bg-clip-text  font-semibold'>{prop.prize}</div>
        </div>
        
    )
}

export default Prizecard
