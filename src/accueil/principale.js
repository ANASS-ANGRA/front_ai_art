import "./style/principale.css"
import im from "../image/accueil_principale.jpg"
import { Link } from "react-router-dom"
import Title_accueil from "./Title_accueil"


function Principale(){
    return(
        <div>
        <Title_accueil/>
        <div id="accueil_Principale">
            <div id="principale">
                <div id="text_accueil_principale">
                   <p>
                      Bienvenue sur notre site d'images générées par l'IA ! Nous sommes heureux de vous offrir une plateforme pour partager vos créations avec le monde entier. Que vous soyez un artiste émergent, un photographe passionné ou simplement un amateur de belles images, nous encourageons chacun de nos utilisateurs à partager leur travail avec notre communauté.
                      Partager vos images sur notre site est une excellente opportunité pour vous de présenter votre travail à une audience plus large et de recevoir des commentaires et des critiques constructives qui vous aideront à vous améliorer en tant qu'artiste. De plus, en partageant vos images, vous contribuez à la richesse de notre bibliothèque d'images générées par l'IA et vous aidez à inspirer d'autres artistes et créatifs.
                      Nous sommes fiers d'offrir à nos utilisateurs un environnement de partage d'images convivial et respectueux. Nous encourageons nos utilisateurs à partager leur travail avec confiance, sachant que leur travail sera apprécié et respecté par notre communauté. Nous avons hâte de voir vos créations et de vous aider à les partager avec le monde entier.
                      Rejoignez notre communauté de créatifs en partageant vos images dès maintenant et découvrez la puissance de l'IA pour générer des images étonnantes. Merci de faire partie de notre communauté !
                     </p>
              
                 </div>
                 <img src={im} id="image_principale" />
            </div>
        </div>
        </div>
    )
}

export default Principale
 
 
     /* <button className="button_accueil_pricipale" id="connection_accueil"><Link to="login" >connection</Link> </button>                
     <button className="button_accueil_pricipale"><Link to="inscri">insription</Link> </button>*/