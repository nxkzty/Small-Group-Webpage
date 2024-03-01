import Navbar from '../components/Navbar.js'
import "primereact/resources/themes/lara-light-indigo/theme.css";


export default function MyApp({ Component, pageProps }) {


    return (
        <div>
          <Navbar />
          

          <Component {...pageProps}/>
        </div>
      );
}
         