import '../css/NavBar.css'

const NavBar = ({}) => {

    return (
        <div className="nav">
            <a href="#" className="text-white/90 hover:text-white">Accueil</a>
            <a href="#Compétences" className="text-white/90 hover:text-white">Compétences</a>
            <a href="#Expérience" className="text-white/90 hover:text-white">Expériences</a>
            <a href="#Projets" className="text-white/90 hover:text-white">Projets</a>
            <a href="#Bénévolat" className="text-white/90 hover:text-white">Bénévolat</a>
            <a href="#Contact" className="text-white/90 hover:text-white">Contact</a>
        </div>

    );
};

export default NavBar;
