import React, {useEffect,useRef,useState} from "react";
import RINGS from 'vanta/dist/vanta.rings.min.js';

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
        <div ref={myRef} className="min-h-screen">
            Text
        </div>
    );
};

export default Home;