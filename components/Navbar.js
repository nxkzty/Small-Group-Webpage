import React from 'react';
import { Menubar } from 'primereact/menubar';
import 'primeicons/primeicons.css';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { useSession } from "@/lib/hooks/session"


export default function Navbar() {
    const router = useRouter();
    const [visible, setVisible] = useState(false);
    const { session, signOut } = useSession()

    const handleClick = async (e) => {
        e.preventDefault()
        signOut()
        router.push("/")
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        router.push("/login")
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
        {
            label: 'Create',
            icon: 'pi pi-book',
            command: () => {
                router.push('/posts/Create')
            }
        }
    ];



    const start =
        <>
            <img alt="logo" src="https://cdn1.iconfinder.com/data/icons/winter-119/48/Jesus_Christ-512.png" height="40" className="mr-2" onClick={() => setVisible(true)}></img>
        </>


    const end =
        <>
            <div>
                <Button label="logout" onClick={handleClick} style={{marginRight: "10px"}}>

                </Button>
                <Button label="Login" onClick={handleLogin}>

                </Button>
            </div>



        </>


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
