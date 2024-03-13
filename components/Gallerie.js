import React from 'react';
import { Carousel } from 'primereact/carousel';

const itemTemplate = (item) => {
    return (
        <div style={{ overflow: 'hidden' }}>
            <img src={item.url} alt={item.alt} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
            <div className="item-caption" style={{ textAlign: 'center', marginTop: '10px' }}>{item.caption}</div>
        </div>
    );
};

const items = [
    {
        url: 'https://images6.alphacoders.com/341/thumb-1920-341223.jpg',
        alt: 'Image 1',
        caption: (
            <>
                - Sprüche 17,17 <br />
                Auf einen Freund kannst du dich immer verlassen; wenn es dir schlecht geht, ist er für dich wie ein Bruder.
            </>
        )
    },
    {
        url: 'https://wallpaperaccess.com/full/3396229.jpg',
        alt: 'Image 2',
        caption: (
            <>
                - Johannes 3,16 <br />
                Denn Gott hat die Menschen so sehr geliebt, dass er seinen einzigen Sohn für sie hergab. <br /> Jeder, der an ihn glaubt, wird nicht zugrunde gehen, sondern das ewige Leben haben.
            </>
        )
    },
    {
        url: 'https://wallpaperaccess.com/full/3788160.jpg',
        alt: 'Image 3',
        caption: (
            <>
                Ich lebe, doch nun nicht ich, sondern Christus lebt in mir. <br /> Denn was ich jetzt lebe im Fleisch, das lebe ich im Glauben an den Sohn Gottes, der mich geliebt hat und sich selbst für mich dahingegeben.            </>
        )
    },
];

export default function Gallerie() {
    return (
        <div className="card" style={{ marginTop: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 60px)' }}>
            <Carousel value={items} itemTemplate={itemTemplate} style={{ width: '75vw' }} />
        </div>
    );
}
