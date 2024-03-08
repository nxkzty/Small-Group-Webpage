import Navbar from '../components/Navbar.js'
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { useSession } from "@/lib/hooks/session"
import { useAuthRedirect } from "@/lib/hooks/authredirect"


export default function MyApp({ Component, pageProps }) {
    const { isLoaded, isSignedIn } = useSession()
    useAuthRedirect(pageProps)


    return (

        <>
            <Navbar/>


            <main className="page">
                { (!pageProps.secured || isSignedIn) && <Component {...pageProps}/>}
            </main>
        </>
      );
}
         