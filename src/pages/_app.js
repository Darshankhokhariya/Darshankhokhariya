import 'aos/dist/aos.css';
import '../app/globals.css';
import { useEffect } from 'react';
import AOS from 'aos';
import Navbar from '@/components/Nav';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            {/* <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white"> */}
            <Navbar />
            <div className="min-h-screen  bg-gray-800 text-white">
                <Component {...pageProps} />
            </div>
        </>
    );
}

export default MyApp;
