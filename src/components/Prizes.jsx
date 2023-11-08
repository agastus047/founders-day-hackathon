import Prizecard from "./Prizecard"
import prizelist from './prizelist'

const Prizes = () =>
{
    const cards = prizelist.map(item =>
    (
      <Prizecard key={item.id} prop={item}/>
    ));
    
    return(
        <div className="mt-16">
         <div className="text-white font-bold text-5xl text-center my-4 ">
            PRIZES
         </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 h-min gap-10 mx-5 my-8 ">
            {cards}
         </div>
        </div>
    )
}

export default Prizes