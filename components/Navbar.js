import React from 'react';
import { Menubar } from 'primereact/menubar';
import 'primeicons/primeicons.css';
import styles from "./Navbar.module.css"
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

export default function Navbar() {
    const router = useRouter();
    const [visible, setVisible] = useState(false);
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            command: () => {
                router.push('/');
            }
        },
        {
            label: 'About',
            icon: 'pi pi-info-circle',
            command: () => {
                router.push('/about');
            }
        },
        {
            label: 'Questions',
            icon: 'pi pi-comments',
            command: () => {
                router.push('/questions');
            }
        },
        {
            label: 'Inputs',
            icon: 'pi pi-book',
            command: () => {
                router.push('/inputs');
            }
        },
        {
            label: 'Roadmap',
            icon: 'pi pi-map',
            command: () => {
                router.push('/roadmap');
            }
        },
        {
            label: 'Create',
            icon: 'pi pi-book',
            command: () => {
                router.push('/Create')
            }
        }
    ];

    const start =
        <>
            <img alt="logo" src="https://cdn1.iconfinder.com/data/icons/winter-119/48/Jesus_Christ-512.png" height="40" className="mr-2" onClick={()  => setVisible(true)}></img>            
        </>
    const end = (
        <button className="p-button p-button-text">
            Logout
        </button>
    );

    return (
        <div >
            <Menubar model={items} start={start} end={end} />
            <div className="card flex justify-content-center">
            <Sidebar visible={visible} onHide={() => setVisible(false)} className="w-full md:w-20rem lg:w-30rem">
                <h2>Smallgroup</h2>
                <p>
                    Wilkommen auf unsere Smallgroup Webpage. Hier finden Sie alle Information über unsere Gruppe und Glauben. Viel Vergnügen.
                </p>
            </Sidebar>
        </div>
        </div>
    );
    
}
