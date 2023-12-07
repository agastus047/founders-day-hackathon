import './text.css';
const Theme = () => {
  
  return (
    <div className="flex justify-center items-center flex-col my-8 gap-3 mx-5">
    <div className="text-white font-bold text-4xl md:text-5xl text-center my-5   ">THEME</div>
     <div className="mt-5 text-3xl lg:text-5xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text font-extrabold h-max uppercase text-center font-jost">
        <p className="text-transparent bg-gradient-to-l from-[#1b0362] to-[#50fefe] bg-clip-text text-shadows leading-relaxed" >Smart and Sustainable Designs for Agriculture, Food and Rural Development.</p>
      </div>   
    </div>
  )
}

export default Theme