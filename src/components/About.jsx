import pic from '../assets/hack.png'

const About = () =>
{
    return (
        <div data-aos="fade" className="w-full  text-white lg:px-20 px-4 py-10 mt-6">
        <div className="flex bg-gray-800 w-full flex-col lg:flex-row justify-around h-full">
            <div className=" text-left flex flex-col h-full w-full lg:w-1/2 p-10 gap-5">
                <h1 className="font-bold text-5xl mb-2">About Us</h1>
                <p className="text-start">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy 
                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has 
                survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised 
                in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
                like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
            <div className="relative p-5 flex items-center   lg:w-1/2 min-h-full ">
              <img src={pic}/>  

            </div>
        </div>
    </div>
    )
}

export default About