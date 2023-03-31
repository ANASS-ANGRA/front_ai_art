import { Link, Outlet } from "react-router-dom"
import "./style/Title_accueil.css"


function Title_accueil(){
    return(
      <div id="title_accueil">
        <div id="T_accueil">
          <h1>Ai_art</h1>
          <ul>
            <li><Link to="inscri">inscription</Link>  </li>
            <li><Link to="/login">connection</Link> </li>
            <li><Link to="/accueil">accueil</Link> </li>
          </ul>
          <Outlet/>
        </div>
        </div>
    )
}

export default Title_accueil