import React from 'react'; 
import { Timeline } from 'primereact/timeline';

export default function App() {
    const events = [
        { status: 'Gegründet', date: '15/7/2024', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
        { status: '1. Mal Smallgroup', date: '15/10/2024', icon: 'pi pi-cog', color: '#673AB7' },
        { status: 'Erstellung von Notion', date: '15/10/2024', icon: 'pi pi-shopping-cart', color: '#FF9800' },
        { status: 'Website', date: '16/10/2024', icon: 'pi pi-check', color: '#607D8B' }
    ];
        
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className="card">
                <Timeline value={events} opposite={(item) => item.status} content={(item) => <small className="text-color-secondary">{item.date}</small>} />
            </div>
        </div>
    );
}
