
import React, { useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { useFavicon } from 'primereact/hooks';
import { Toast } from 'primereact/toast';

export default function BasicDemo() {
    const [favicon, setFavicon] = useState('');
    const setFaviconToTwitter = () => setFavicon('https://twitter.com/favicon.ico');
    const setFaviconToPrimeReact = () => setFavicon('https://primefaces.org/cdn/primereact/images/favicon.ico');
    const toast = useRef(null);

    useFavicon(favicon);

    const showInfo = () => {
        toast.current.show({ severity: 'info', summary: 'Info', detail: 'Smallgroup Info', life: 3000 });
    }

    return (
        <>
            <header>
                <h1>SMALLGROUP</h1>

            </header>
            <footer>
                <div className="card flex justify-content-center gap-2">
                    <Button style={{marginTop: "20px", marginLeft: "20px", marginRight: "20px" }} icon="pi pi-discord" label="Discord" onClick={setFaviconToTwitter} />
                    <Button icon="pi pi-instagram" label="Instagram" onClick={setFaviconToPrimeReact} className="p-button-secondary" />
                </div>
            </footer>
        </>


    )
}
