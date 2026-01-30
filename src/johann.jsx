import React, { useEffect, useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import github from './assets/github.svg';
import linkedin from './assets/linkedin.svg';
import mail from './assets/mail.svg';
import './main.css';
import SplitText from "./assets/SplitText.jsx";
import NavBar from "./components/NavBar.jsx";
import FadeContent from "./assets/Fade.jsx";
import TextType from "./assets/TextType.jsx";
import Card from "./components/Card.jsx";

function JohannPage() {

    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };


    return (
    <div className="App">

        <FadeContent><NavBar/></FadeContent>

        <div className={"primary-block"}>
            <div className={"profile"}>
                <SplitText
                    text="Johann PAROLA"
                    tag="h1"
                    className="text-2xl font-semibold text-center bg-white/10"
                    style={{ color: '#ffffff' }}
                    delay={70}
                    duration={2}
                    ease="elastic.out(1, 0.3)"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-100px"
                    textAlign="center"
                    onLetterAnimationComplete={handleAnimationComplete}
                />

                <TextType
                    text={["Étudiant", "Ingénieur DevOps", "Ingénieur R&D", "Électronicien"]}
                    className={"text-center"}
                    typingSpeed={75}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                />
            </div>
        </div>

        <div className={"secondary-block"} id="Compétences">
            <h1>Compétences</h1>
            <div className={"card-container"}>
                <Card
                    Titre="DevOps"
                    Tags={["Proxmox", "Docker", "Linux"]}
                />
                <Card
                    Titre="Hardware"
                    Tags={["Arduino", "PCB", "KiCAD"]}
                />
                <Card
                    Titre="Web"
                    Tags={["React", "APIs", "HTML/CSS/JS"]}
                />
                <Card
                    Titre="Applications"
                    Tags={["Python", "C++"]}
                />

            </div>
        </div>

        <div className={"secondary-block"} id="Expérience">
            <h1>Expérience</h1>
            <div className={"card-container"}>
                <Card
                    Titre={"Agent Communal"}
                    Contenu={"St Georges d'Espéranche"}
                    Tags={["Juillet 2024 - Août 2024"]}
                    Expend={true}
                />
                <Card
                    Titre={"Ingénieur R&D"}
                    Contenu={"Lynred"}
                    Tags={["Mai 2025 - Août 2025"]}
                    Expend={true}
                />
            </div>
        </div>

        <div className={"secondary-block"} id="Projets">
            <h1>Projets</h1>
            <div className={"card-container"}>
                <Card
                    Titre={"HomeLab"}
                    Tags={["Depuis Septembre 2025"]}
                    Expend={true}
                />
                <Card
                    Titre={"Portfolio"}
                    Tags={["Janvier 2026"]}
                    Expend={true}
                />
            </div>
        </div>

        <div className={"secondary-block"} id="Bénévolat">
            <h1>Bénévolat</h1>
            <div className={"card-container"}>
                <Card
                    Titre={"Nettoyage de printemps"}
                    Contenu={"St Georges d'Espéranche"}
                    Tags={["Novembre 2013"]}
                    Expend={true}
                />
                <Card
                    Titre={"Banque Alimentaire"}
                    Contenu={"Lyon"}
                    Tags={["Depuis Novembre 2026"]}
                    Expend={true}
                />
            </div>
        </div>

        <div className={"secondary-block"} id="Contact">
            <h1>Contact</h1>
            <div className={"contact-container"}>
                <img src={mail} alt="mail" className="icons" onClick={() => window.location.href = `mailto:${profil.email || 'johann.parola@gmail.com'}`} />
                <img src={github} alt="github" className="icons" onClick={() => window.location.href = "https://github.com/Zibraltar-XIX"}/>
                <img src={linkedin} alt="linkedin" className="icons" onClick={() => window.location.href = `${profil.linkedin}`} />
            </div>
        </div>

    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <JohannPage />
  </React.StrictMode>
);

export default JohannPage;
