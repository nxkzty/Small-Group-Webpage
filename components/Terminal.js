import React, { useEffect } from 'react';
import { Terminal } from 'primereact/terminal';
import { TerminalService } from 'primereact/terminalservice';

export default function TerminalAbout() {
    const commandHandler = (text) => {
        let response;
        let argsIndex = text.indexOf(' ');
        let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

        switch (command) {

            case 'help':
                response = 'help | date | clear | members | about | devs | contact'
                break;

            case 'date':
                response = new Date().toDateString();
                break;

            case 'clear':
                response = null;
                break;

            case 'members':
                response = 'jeremy, leon, louis'
                break;

            case 'about':
                response = 'Jeremy und Leon haben eine unterstützende und inspirierende Kleingruppe gegründet, die Menschen verschiedener Hintergründe und Lebensphasen willkommen heißt, um gemeinsam zu wachsen und ihre Beziehung zu Gott zu vertiefen.'
                break;

            case 'devs':
                response = 'This website was developed by: Jeremy Hefti & Leon Höfferer'
                break;

            case 'contact':
                response = 'Ihr könnt uns gerne auf Instagram, Discord sowie YouTube folgen.'
                break;

            default:
                response = 'Unknown command: ' + command;
                break;
        }

        if (response)
            TerminalService.emit('response', response);
        else
            TerminalService.emit('clear');
    };

    useEffect(() => {
        TerminalService.on('command', commandHandler);

        return () => {
            TerminalService.off('command', commandHandler);
        };
    }, []);

    return (
        <div className="card terminal-demo">
            <Terminal
                prompt="christlizzes ~$"
                style={{ backgroundColor: "Black", color: "LightBlue", width: "auto", borderRadius: "10px" }}
            />
        </div>
    );
}
