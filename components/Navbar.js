import React from 'react';
import { Menubar } from 'primereact/menubar';
import 'primeicons/primeicons.css';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { useSession } from "@/lib/hooks/session"
import Link from 'next/link';

export default function Navigation() {
    const { session, signOut } = useSession()
    const [isOpen, setIsOpen] = useState(false);
    const user = session.user;
    const router = useRouter();

    const handleClick = async (e) => {
        e.preventDefault();
        signOut();
        setIsOpen(false);
        router.push("/");
    }

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
        ...(user
            ? [
                {
                    label: 'Create',
                    icon: 'pi pi-book',
                    command: () => {
                        router.push('/posts/Create');
                    },
                },
            ]
            : []),
    ];

    const start = (
        <>
            <img alt="logo" src="https://cdn1.iconfinder.com/data/icons/winter-119/48/Jesus_Christ-512.png" height="40" className="mr-2" onClick={() => setIsOpen(!isOpen)}></img>
        </>
    );

    const end = (
        <>
            {!user && <Link href="/login"><Button label='Login' /></Link>}
            {user && (
                <Link href="/login">
                    <Button style={{}} label='Logout' onClick={handleClick} />
                </Link>
            )}
        </>
    );

    return (
        <div>
            <Menubar model={items} start={start} end={end} />
            <div className="card flex justify-content-center">
                <Sidebar visible={isOpen} onHide={() => setIsOpen(false)} className="w-full md:w-20rem lg:w-30rem">
                    <h2>Smallgroup</h2>
                    <p>
                        Wilkommen auf unsere Smallgroup Webpage. Hier finden Sie alle Informationen über unsere Gruppe und Glauben. Viel Vergnügen.
                    </p>
                </Sidebar>
            </div>
        </div>
    );
}
