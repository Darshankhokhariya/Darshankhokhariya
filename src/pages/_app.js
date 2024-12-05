import 'aos/dist/aos.css';
import '../app/globals.css';
import { useEffect } from 'react';
import AOS from 'aos';
import Navbar from '@/components/Nav';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <div className="min-h-screen bg-gray-800 text-white">
                <Component {...pageProps} />
            </div>
        </>
    );
}

export default MyApp;
