
import React from 'react'; 
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import styles from './inputs.module.css'

export default function AdvancedDemo() {
    const header = (
        <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
    );
    const footer = (
        <>
            <Button label="Read More" icon="pi pi-check" />
            <Button label="Delete" severity="secondary" icon="pi pi-times" style={{ marginLeft: '0.5em' }} />
        </>
    );

    return (
        <div style={{margin: '20px'}}>
            <Card title="Advanced Card" subTitle="Card subtitle" footer={footer}  className="md:w-25rem">
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae 
                    numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
                </p>
                
            </Card>
        </div>
    )
}
        