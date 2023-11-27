import pic from '../assets/hack.png'

const About = () =>
{
    return (
        <div data-aos="fade" className="w-full  text-white lg:px-20 px-4 py-10 mt-6">
        <div className="flex bg-gray-800 w-full flex-col lg:flex-row justify-around h-full">
            <div className=" text-left flex flex-col h-full w-full lg:w-1/2 p-10 gap-5">
                <h1 className="font-bold text-5xl mb-2 underline underline-offset-8 decoration-dashed leading-snug">About <span className='bg-gradient-to-b from-blue-500 to-light-blue-500 bg-clip-text text-transparent'>Hack4TKM</span></h1>
                <p className="text-start text-xl leading-relaxed">
                Amidst the celebration of TKM College of Engineering's Founder’s Day 2024, 
                get ready to ignite the spark of innovation with Hack4TKM – a 
                national-level hackathon, in collaboration with Innovation and Entrepreneurship
                 Development Cell TKMCE and Institute's Innovation Council TKMCE. The event is
                  a creative canvas for students across India to showcase their problem-solving 
                  skills in Smart and Sustainable Designs for Agriculture, Food, and Rural 
                  Development.
                </p>
            </div>
            <div className="relative p-5 flex items-center   lg:w-1/3 min-h-full ">
              <img src={pic}/>  

            </div>
        </div>
    </div>
    )
}

export default About
