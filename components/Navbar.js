import React from 'react';
import { Menubar } from 'primereact/menubar';
import 'primeicons/primeicons.css';
import styles from "./Navbar.module.css"
import { useRouter } from 'next/router';

export default function Navbar() {
    const router = useRouter();
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
    ];

    const start =
        <>
            <img alt="logo" src="https://cdn1.iconfinder.com/data/icons/winter-119/48/Jesus_Christ-512.png" height="40" className="mr-2"></img>            
        </>
    const end = (
        <button className="p-button p-button-text">
            Logout
        </button>
    );

    return (
        <div >
            <Menubar model={items} start={start} end={end} />
        </div>
    );
}
