import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { InputText } from "primereact/inputtext";
import { Editor } from 'primereact/editor';

const CreateCardPage = () => {
    const [cardTitle, setCardTitle] = useState('');
    const [cardSubtitle, setCardSubtitle] = useState('');
    const [cardContent, setCardContent] = useState('');

    const createCard = () => {
        const newCard = {
            title: cardTitle,
            subTitle: cardSubtitle,
            content: cardContent
        };
    };

    return (
        <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <div className="card flex justify-content" style={{ marginTop: '30px', marginBottom: '30px' }}>
                <span className={`p-float-label ${cardTitle && 'p-float-label-filled'}`}>
                    <InputText style={{ width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }} value={cardTitle} onChange={(e) => setCardTitle(e.target.value)} />
                    <label htmlFor='cardTitle' style={{ display: 'block', marginBottom: '5px' }}>Title</label>
                </span>
            </div>
            <div style={{ marginBottom: '30px' }}>
                <span className={`p-float-label ${cardSubtitle && 'p-float-label-filled'}`}>
                    <InputText style={{ width: '100%', padding: '10px', boxSizing: 'border-box', border: '1px solid #ccc', borderRadius: '4px' }} type="text" value={cardSubtitle} onChange={(e) => setCardSubtitle(e.target.value)} />
                    <label htmlFor='cardSubtitle' style={{ display: 'block', marginBottom: '5px' }}>Subtitle</label>
                </span>
            </div>
            <div style={{ marginBottom: '10px' }}>
                <Editor value={cardContent} onTextChange={(e) => setCardContent(e.htmlValue)} style={{ height: '320px', border: '1px solid #ccc', borderRadius: '4px' }} />
            </div>
            <Button style={{ backgroundColor: '#4caf50', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '4px', cursor: 'pointer' }} label="Create Card" onClick={createCard} />
        </div>
    );
};

export default CreateCardPage;