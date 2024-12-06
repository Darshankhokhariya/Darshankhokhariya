import 'aos/dist/aos.css';
import '../app/globals.css';
import { useEffect } from 'react';
import AOS from 'aos';
import Navbar from '@/components/Nav';
import Head from 'next/head';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ToastContainer />
            <Navbar />
            <div className="min-h-screen bg-gray-800 text-white">
                <Component {...pageProps} />
            </div>
        </>
    );
}

export default MyApp;
