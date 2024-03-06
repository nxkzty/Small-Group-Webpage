
import React from 'react'; 
import { Fieldset } from 'primereact/fieldset';


export default function TemplateDemo() {
    const legendTemplate = (
        <div className="flex align-items-center gap-2 px-2">
            <span className="font-bold">Amy Elsner</span>
        </div>
    );

    return (
        <div className="card">
            <Fieldset legend={legendTemplate}>
                <p className="m-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Fieldset>
        </div>
    )
}
        