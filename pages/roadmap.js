import React from 'react';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export default function RoadmapPage() {
    const events = [
        { status: 'Gegründet', date: '15/7/2024', icon: 'pi pi-sitemap', color: 'lightGray' },
        { status: '1. Mal Smallgroup', date: '15/10/2024', icon: 'pi pi-users', color: 'lightGray' },
        { status: 'Erstellung von Notion', date: '15/10/2024', icon: 'pi pi-wrench', color: 'lightGray' },
        { status: 'Website', date: '16/10/2024', icon: 'pi pi-wifi', color: 'lightGray' }
    ];
    const customizedMarker = (item) => {
        return (
            <span className="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1" style={{ backgroundColor: item.color, padding: "5px", height: "25px", width: "25px", borderRadius: "5px" }}>
                <i className={item.icon}></i>
            </span>
        );
    };

    const customizedContent = (item) => {
        return (
            <Card title={item.status} subTitle={item.date}>
                <p>{item.status}</p>
            </Card>
        );
    };

    return (
        <div className="card">
            <Timeline value={events} align="alternate" className="customized-timeline" marker={customizedMarker} content={customizedContent} style={{ margin: "20px" }} />
        </div>
    )
}
