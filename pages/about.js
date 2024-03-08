
import React, { useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { useFavicon } from 'primereact/hooks';
import { Toast } from 'primereact/toast';
import { Link, useHref } from 'react-router-dom';

export default function BasicDemo() {
    const [favicon, setFavicon] = useState('');
    const setFaviconToTwitter = () => setFavicon('https://twitter.com/favicon.ico');
    const setFaviconToPrimeReact = () => setFavicon('https://primefaces.org/cdn/primereact/images/favicon.ico');
    const toast = useRef(null);

    useFavicon(favicon);

    const showInfo = () => {
        toast.current.show({ severity: 'info', summary: 'Info', detail: 'Smallgroup Info', life: 3000 });
    }


    const handleButtonClickDiscord = () => {
        window.location.href = 'https://discord.com';
      };
      const handleButtonClickInstagram = () => {
        window.location.href = 'https://instagram.com';
      };



    return (
        <>
            <header>
                <h1>SMALLGROUP</h1>

            </header>
            <footer>
                <div className="card flex justify-content-center gap-2">
                    <Button style={{marginTop: "20px", marginRight: "20px" }} icon="pi pi-discord" label="Discord" onClick={handleButtonClickDiscord} />
                    <Button icon="pi pi-instagram" label="Instagram" className="p-button-secondary" onClick={handleButtonClickInstagram}/>
                </div>
            </footer>
        </>


    )
}

