import Navbar from '../components/Navbar.js'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { useSession } from "@/lib/hooks/session"
import { useAuthRedirect } from "@/lib/hooks/authredirect"
import Head from 'next/head.js';


export default function MyApp({ Component, pageProps }) {
    const { isLoaded, isSignedIn } = useSession()
    useAuthRedirect(pageProps)


    return (

        <>
            <Head>
                <link rel="icon" href="https://cdn1.iconfinder.com/data/icons/winter-119/48/Jesus_Christ-512.png" type="image/x-icon"></link>
            </Head>
            <Navbar />


            <main className="page">
                {(!pageProps.secured || isSignedIn) && <Component {...pageProps} />}
            </main>
        </>
    );
}
