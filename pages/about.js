
import React, { useRef, useState } from 'react';
import { Button } from 'primereact/button';
import { useFavicon } from 'primereact/hooks';
import { Toast } from 'primereact/toast';
import { Link, useHref } from 'react-router-dom';
import Image from 'next/image';
import { Divider } from 'primereact/divider';
import style from './BasicDemo.module.css';

export default function BasicDemo() {
    const [favicon, setFavicon] = useState('');
    const setFaviconToTwitter = () => setFavicon('https://twitter.com/favicon.ico');
    const setFaviconToPrimeReact = () => setFavicon('https://primefaces.org/cdn/primereact/images/favicon.ico');
    const toast = useRef(null);



    const handleButtonClickDiscord = () => {
        window.location.href = 'https://discord.com';
    };
    const handleButtonClickInstagram = () => {
        window.location.href = 'https://instagram.com';
    };



    return (
        <>
            <header>

                <h1 className={`${style.title} title`}>
                    <img className={`${style.img} img`} alt="logo" src="https://cdn1.iconfinder.com/data/icons/winter-119/48/Jesus_Christ-512.png" height="40" onClick={() => setIsOpen(!isOpen)}></img>
                    Willkommen zur SMALLGROUP</h1>
            </header>
            <div className={`${style.text} text`}>
                Herzlich willkommen auf der Website unserer Kleingruppe, gegründet von Jeremy und Leon! <br/><br/>

                Wir freuen uns sehr, dass du den Weg zu uns gefunden hast. Unsere Kleingruppe ist ein Ort der <strong>Gemeinschaft, des Austauschs und des Wachstums.</strong> Jeremy und Leon haben diese Gruppe ins Leben gerufen, um Menschen wie dich einzuladen, Teil einer unterstützenden und inspirierenden Gemeinschaft zu sein.<br/>

                Unser Ziel ist es, einen Raum zu schaffen, in dem wir uns gegenseitig ermutigen, herausfordern und unterstützen können. Egal, wo du in deinem Leben stehst, ob du gerade eine schwierige Zeit durchmachst oder einfach nur nach Gleichgesinnten suchst, um gemeinsam zu wachsen -<strong> hier bist du willkommen</strong> <br/>

                In unserer Kleingruppe treffen sich Menschen verschiedener Hintergründe, Lebenssituationen und Lebensphasen. Wir glauben fest daran, dass Vielfalt eine Stärke ist und dass wir voneinander lernen können. Durch gemeinsame Gespräche, Gebete und Aktivitäten streben wir danach, uns <strong>gegenseitig zu unterstützen und zu ermutigen,</strong> unsere individuellen Ziele zu erreichen und unsere <strong>Beziehung zu Gott zu vertiefen.</strong><br/>

                <strong>Wir laden dich herzlich ein,</strong> an unseren Treffen teilzunehmen und Teil unserer Gemeinschaft zu werden. Egal, ob du schon lange dabei bist oder gerade erst dazukommst, es gibt immer Platz für dich bei uns.<br/>

                Schau dich gerne auf unserer Website um, um mehr über unsere Gruppe, unsere Treffen und Veranstaltungen zu erfahren. Wenn du Fragen hast oder einfach nur mit uns in Kontakt treten möchtest, zögere nicht, uns zu kontaktieren. Wir freuen uns darauf, dich kennenzulernen und gemeinsam mit dir zu wachsen.<br/><br/>

                <strong>Herzlichst, <br/>Jeremy und Leon</strong>
            </div>


            <Divider layout='vertical' />

            <Image
                width={1080}
                height={500}
                src='/jeremy_leon.png'
            />


            <footer>
                <div className="card flex justify-content-center gap-2">
                    <Button style={{ marginTop: "20px", marginRight: "20px" }} icon="pi pi-discord" label="Discord" onClick={handleButtonClickDiscord} />
                    <Button icon="pi pi-instagram" label="Instagram" className="p-button-secondary" onClick={handleButtonClickInstagram} />
                </div>
            </footer>
        </>


    )
}

