import  {useEffect,useRef,useState} from "react";
import RINGS from 'vanta/dist/vanta.rings.min.js';
import InfoIcon from "@mui/icons-material/Info"
import CustomizedTimeline from './Timeline.jsx';
import FAQ from './Faq.jsx'
import About from "./About";
import Prizes from "./Prizes";
import Logo1 from "../assets/logos/full logo (11).png";
import Logo2 from "../assets/logos/IIC (2).png";
import Logo3 from "../assets/logos/tkm-logo.png";
import Footer from "./Footer.jsx";
import LogoContainer from "./Logos.jsx";
import Container from "./Container.jsx";
import hack4tkm_color from "../assets/logos/HACK4TKM_COLOR2.png"
import tkm_it from "../assets/tkm_it2.png"
import CountdownClock from "./ComingSoon.jsx";
import MainLogo from "./MainLogo.jsx";

const Home = () => {
    const [vantaEffect, setVantaEffect] = useState(null);
    const myRef = useRef(null);
    // useEffect(() => {
    //     if (!vantaEffect) {
    //         setVantaEffect(RINGS({
    //             el: myRef.current,
    //             mouseControls: true,
    //             touchControls: true,
    //             gyroControls: false,
    //             minHeight: 200.00,
    //             minWidth: 200.00,
    //             scale: 1.00,
    //             scaleMobile: 1.00
    //         }))
    //     }
    //     return () => {
    //         if (vantaEffect) vantaEffect.destroy()
    //     }
    // },[vantaEffect]);

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://apply.devfolio.co/v2/sdk.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        }
    },[]);

    return(
        // <CountdownClock/>
        <div className="bg-black">
            <div ref={myRef} className="min-h-screen p-5 text-white">
                <a href="https://seemly-jury-e03.notion.site/HACK4TKM-HACKATHON-6a46f80f7af24ed6bdfcd73806db808e#7857277b7a5846ac92960124e6a0a367" target="_blank" className="hidden text-white md:flex md:justify-end md:items-center md:gap-2">
                    <InfoIcon/>
                    <span>Rules & guidelines</span>
                </a>
                <div className="mt-20  md:w-[35rem] mx-auto text-center flex flex-col gap-4 md:pl-10 ">
                    <div className="flex justify-center">
                        <div className="flex gap-4">
                            <img src={Logo3} alt="logo3" className="h-[35px]"></img>
                            <img src={Logo1} alt="logo1" className="h-[35px]"></img>
                            <img src={Logo2} alt="logo2" className="h-[35px]"></img>
                            <img src={tkm_it} alt="logo1" className="h-[35px]"></img>


                            
                        </div>
                    </div>
                    {/* <div className="text-[3.3rem] leading-tight font-bold md:text-8xl bg-gradient-to-b from-[#1b0362] to-[#50fefe] bg-clip-text text-transparent">HACK4TKM</div> */}
                    <div>
                    {/* <img src={hack4tkm_color} alt="hack4tkm_color" className="w-200"></img>
                    <h2 className="font-bold  text-5xl text-transparent bg-gradient-to-b from-[#1b0362] to-[#50fefe] bg-clip-text">Build beyond limits</h2> */}
<MainLogo/>
                    </div>
                    <div className="text-3xl md:text-4xl font-semibold">Feb 17 | 18</div>
                    {/* <div><button className="rounded-full bg-blue-700 hover:bg-white hover:text-black py-3 px-5 md:px-8 text-xl">Register Now</button></div> */}
                    <div className="flex justify-center items-center mt-20">
        <div className="apply-button" 
            data-hackathon-slug="hack4tkm" 
            data-button-theme="dark"
            style={{height: 44, width: 312}}
        ></div>
    </div>
                </div>
            </div>
            <LogoContainer/>
            <Container/>
            <About/>
            {/* <Theme/> */}
            <Prizes/>
            <CustomizedTimeline/>
            <FAQ/>
            <Footer/>
        </div>
    );
};

export default Home;
