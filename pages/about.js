
import React, { useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { useFavicon } from 'primereact/hooks';
import { Toast } from 'primereact/toast';
import { Link, useHref } from 'react-router-dom';
import Image from 'next/image';
import { Divider } from 'primereact/divider';

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

            Herzlich willkommen auf der Website unserer Kleingruppe, gegründet von Jeremy und Leon!

Wir freuen uns sehr, dass du den Weg zu uns gefunden hast. Unsere Kleingruppe ist ein Ort der Gemeinschaft, des Austauschs und des Wachstums. Jeremy und Leon haben diese Gruppe ins Leben gerufen, um Menschen wie dich einzuladen, Teil einer unterstützenden und inspirierenden Gemeinschaft zu sein.

Unser Ziel ist es, einen Raum zu schaffen, in dem wir uns gegenseitig ermutigen, herausfordern und unterstützen können. Egal, wo du in deinem Leben stehst, ob du gerade eine schwierige Zeit durchmachst oder einfach nur nach Gleichgesinnten suchst, um gemeinsam zu wachsen - hier bist du willkommen.

In unserer Kleingruppe treffen sich Menschen verschiedener Hintergründe, Lebenssituationen und Lebensphasen. Wir glauben fest daran, dass Vielfalt eine Stärke ist und dass wir voneinander lernen können. Durch gemeinsame Gespräche, Gebete und Aktivitäten streben wir danach, uns gegenseitig zu unterstützen und zu ermutigen, unsere individuellen Ziele zu erreichen und unsere Beziehung zu Gott zu vertiefen.

Wir laden dich herzlich ein, an unseren Treffen teilzunehmen und Teil unserer Gemeinschaft zu werden. Egal, ob du schon lange dabei bist oder gerade erst dazukommst, es gibt immer Platz für dich bei uns.

Schau dich gerne auf unserer Website um, um mehr über unsere Gruppe, unsere Treffen und Veranstaltungen zu erfahren. Wenn du Fragen hast oder einfach nur mit uns in Kontakt treten möchtest, zögere nicht, uns zu kontaktieren. Wir freuen uns darauf, dich kennenzulernen und gemeinsam mit dir zu wachsen.

Herzlichst,
Jeremy und Leon

            <Divider layout='vertical'/>

            <Image
                width={1080}   
                height={500}
                src='/jeremy_leon.png'
            />


            <footer>
                <div className="card flex justify-content-center gap-2">
                    <Button style={{marginTop: "20px", marginRight: "20px" }} icon="pi pi-discord" label="Discord" onClick={handleButtonClickDiscord} />
                    <Button icon="pi pi-instagram" label="Instagram" className="p-button-secondary" onClick={handleButtonClickInstagram}/>
                </div>
            </footer>
        </>


    )
}

