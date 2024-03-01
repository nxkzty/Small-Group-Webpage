import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import { Image } from 'primereact/image';



const itemTemplate = (item) => {
    return (
        <div>
            <img src={item.url} alt={item.alt} style={{height: "100%", borderRadius: "50px"}}/>
            <div className="item-caption">{item.caption}</div>
        </div>
    );
};



const items = [
    { url: 'https://images6.alphacoders.com/341/thumb-1920-341223.jpg', alt: 'Image 1,', caption: 'Vers 1'  },
    { url: 'https://wallpaperaccess.com/full/3396229.jpg', alt: 'Image 2', caption: 'Vers 2' },
];
export default function Gallerie() {



    return (
        <div className="card">
            <Carousel value={items} itemTemplate={itemTemplate} style={{width: "75vw", marginLeft: "auto", marginRight: "auto"}}/>
        </div>
    )
}