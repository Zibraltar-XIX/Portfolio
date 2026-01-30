import '../css/Card.css'
import AnimatedContent from "../assets/AnnimatedContent.jsx";

function Card({ Titre, Contenu, Tags = [], Expend }) {
    // Convertir Tags en array s'il n'est pas déjà un array
    const tagsArray = Array.isArray(Tags) 
        ? Tags 
        : (typeof Tags === 'string' ? Tags.split(',').map(t => t.trim()) : []);

    let classes = "card";
    if (Expend === true) {
        classes = "card-expend card";
    }

    return(
        <AnimatedContent
            distance={100}
            direction="vertical"
            reverse={false}
            duration={0.8}
            ease="power3.out"
            initialOpacity={0}
            animateOpacity
            scale={1.1}
            threshold={0.1}
            delay={0}
        >
            <div className={classes}>
                <div className="card-header">
                    <h2>{Titre}</h2>
                </div>
                <div className="card-body">
                    <p>{Contenu}</p>
                </div>
                <div className="adapt"></div>
                {tagsArray.length > 0 && (
                    <div className="card-footer">
                        {tagsArray.map((tag, index) => (
                            <p key={index} className={"tag"}>{tag}</p>
                        ))}
                    </div>
                )}
            </div>
        </AnimatedContent>

    )
}

export default Card;