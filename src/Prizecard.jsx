
const Prizecard = ({prop}) =>
{
    console.log(prop)
    return(
        
        <div className="bg-gray-800 text-white flex flex-col gap-5 rounded-xl items-center p-5">
            <div ><img src={prop.iconlink} className='h-10 lg:h-14'/></div>
            <div className='font-bold text-2xl lg:text-3xl text-center hover:text-cyan-400'>{prop.title}</div>
            <div className='text-xl lg:text-2xl bg-blue-400 bg-gradient-to-r from-teal-400 via-indigo-700 to-lime-400 via-r-103 text-transparent bg-clip-text font-semibold'>{prop.prize}</div>
        </div>
        
    )
}

export default Prizecard