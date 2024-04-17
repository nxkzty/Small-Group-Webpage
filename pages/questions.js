import React from 'react';
import {Accordion, AccordionTab} from 'primereact/accordion';
import {Divider} from 'primereact/divider';
import {Button} from 'primereact/button';
import myImage from '../assets/fragen.jpg';



export default function QuestionPage() {


    const handleButtonClickDiscord = () => {
        window.location.href = 'https://discord.com';
    };


    return (
        <div className="card">
            <Accordion activeIndex={0}>
                <AccordionTab style={{
                    marginTop: "20px",
                    background: "#f5f5f5",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    borderRadius: "5px"
                }} header={<><i className="pi pi-info-circle" style={{marginRight: "5px"}}></i>How does prayer play a
                    role in the life of a Christian?</>}>
                    <p className="m-0">
                        Prayer plays a multifaceted role in the life of a Christian, nurturing a <strong>personal
                        relationship with God</strong> through direct communication. It serves as a form of <strong>worship
                        and adoration</strong>, expressing reverence for God's greatness and goodness. Additionally,
                        prayer facilitates <strong>confession and repentance</strong>, allowing believers to seek
                        forgiveness and spiritual renewal. Christians engage in <strong>petition and
                        intercession</strong>, bringing their own needs and those of others before God. This practice
                        fosters <strong>spiritual growth</strong>, aligns believers with <strong>God's will</strong>,
                        and strengthens <strong>faith and resilience</strong>, providing <strong>comfort and
                        hope</strong> amid life's challenges. Prayer is also a <strong>communal practice</strong> that
                        promotes <strong>unity among believers</strong>, reinforcing <strong>shared values</strong> and
                        deepening <strong>fellowship within Christian communities</strong>.
                    </p>
                </AccordionTab>
                <AccordionTab style={{
                    marginTop: "20px",
                    background: "#f5f5f5",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    borderRadius: "5px"
                }} header={<><i className="pi pi-info-circle" style={{marginRight: "5px"}}></i>Where should I start
                    reading the Bible?</>}>
                    <p className="m-0">
                        <strong>1. The Gospel of John:</strong> Many suggest starting with the Gospel of John in the New
                        Testament. It
                        provides a deep and reflective account of the life, teachings, and significance of Jesus Christ.<br/><br/>
                        <strong>2. The Book of Psalms:</strong> The Psalms offer beautiful poetry and prayers that
                        express a range of
                        emotions and experiences, providing spiritual comfort and inspiration.<br/><br/>
                        <strong>3. A Bible Reading Plan:</strong> Consider using a Bible reading plan that guides you
                        through specific passages or books each day. This can help you explore different parts of the
                        Bible systematically.
                    </p>
                </AccordionTab>
                <AccordionTab style={{
                    marginTop: "20px",
                    background: "#f5f5f5",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    borderRadius: "5px"
                }} header={<><i className="pi pi-info-circle" style={{marginRight: "5px"}}></i>How can I connect with
                    Christians?</>}>
                    <p className="m-0">
                        Are you looking to connect with fellow Christians and engage in meaningful discussions or
                        activities? Join us on our Discord server where we gather to share our faith, support one
                        another, and build community together. We have channels for prayer requests, Bible studies, and
                        general fellowship. Let's grow in faith together!
                    </p>
                </AccordionTab>
            </Accordion>

            <Divider style={{marginTop: "7px", marginBottom: "10px"}}/>
            <div style={{position: 'relative', textAlign: 'center'}}>
                <img
                    src="https://media.istockphoto.com/id/1221796138/de/foto/ein-satz-d%C3%BCnner-str%C3%A4nge-die-in-form-von-drei-fragezeichen-auf-schwarzem-hintergrund.jpg?s=612x612&w=0&k=20&c=PaUzTTF6zONA6DB1Yvi7Ojm-uaz0HiGRK90a7Zvw14M="
                    alt="Beschreibung des Bildes"
                    style={{width: '50%', height: '80%', borderRadius: '15px', filter: 'blur(8px)'}}
                />
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: '1'
                }}>
                    <h3 style={{color: 'white', fontSize: '24px'}}>If you have more questions, join our Discord
                        community:</h3>
                    <Button icon="pi pi-discord" label="Join our Discord" onClick={handleButtonClickDiscord}
                            className="p-button-raised"/>
                </div>
            </div>


        </div>
    )
}
