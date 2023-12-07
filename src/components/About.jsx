import pic from '../assets/hack.png'

const About = () =>
{
    return (
        <div data-aos="fade" className="w-full bg-black  text-white lg:px-20 px-6 py-6 mt-6 ">
        <div className="flex  w-full flex-col lg:flex-row justify-around h-full bg-black border-4 border-gradient-animation p-4 rounded-lg">
            <div className=" text-left flex flex-col h-full w-full lg:w-1/2 p-5 md:p-10 gap-5">
                <h1 className="font-bold text-5xl mb-2 underline underline-offset-8 decoration-dashed leading-snug">About <span className=' text-transparent bg-gradient-to-b from-[#1b0362] to-[#50fefe] bg-clip-text'>HACK4TKM</span></h1>
                <p className=" text-xl  ">
                Amidst the celebration of Founder’s Day 2024, get ready to
    ignite the spark of innovation with HACK4TKM – a national-level hackathon, organized by TKM College of Engineering (TKMCE),
Kollam, in collaboration with Innovation and Entrepreneurship
Development Cell TKMCE, Institute's Innovation Council and
TKM Institute of Technology, Kollam. This event is a creative

canvas for students across India to showcase their problem-
solving skills in Smart and Sustainable Designs for Agriculture,

Food, and Rural Development.
                </p>
            </div>
            <div className="relative flex items-center   lg:w-1/3 min-h-full ">
              <img src={pic}/>  

            </div>
        </div>
    </div>
    )
}

export default About
