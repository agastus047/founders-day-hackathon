import React, {useEffect,useRef,useState} from "react";
import RINGS from 'vanta/dist/vanta.rings.min.js';
import InfoIcon from "@mui/icons-material/Info";
import About from "./About";
import Prizes from "./Prizes";

const Home = () => {
    const [vantaEffect, setVantaEffect] = useState(null);
    const myRef = useRef(null);
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(RINGS({
                el: myRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00
            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    },[vantaEffect]);

    return(
        <div className="bg-[#202428]">
            <div ref={myRef} className="min-h-screen p-5 text-white">
                <a href="" className="hidden text-white md:flex md:justify-end md:items-center md:gap-2">
                    <InfoIcon/>
                    <span>Rules & guidelines</span>
                </a>
                <div className="mt-40 md:w-[35rem] flex flex-col gap-4 md:pl-10">
                    <div className="text-[3.3rem] leading-tight font-bold md:text-8xl bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Founder's Day Hackathon</div>
                    <div className="text-2xl md:text-3xl font-semibold"> Nov 7 | 8 | 9</div>
                    <div><button className="rounded-full bg-blue-700 hover:bg-white hover:text-black py-3 px-5 md:px-8 text-xl">Register Now</button></div>
                </div>
            </div>
            <About/>
            <Prizes/>
        </div>
    );
};

export default Home;