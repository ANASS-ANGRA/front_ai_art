
import { BrowserRouter, Link, Outlet } from "react-router-dom"
import Afficher_post from "./Afficher_post"
import "./style/nav_bar.css"


function Nav_bar(){

    return(
        <div id="page_route">

       
        <div id="nav_bar"> 
            <div id="title_nav_bar">
                <h1>top image</h1>
            </div>
            <div id="menu_nav_bar">
                <ul id="ul_nav_bar">
                    <li><Link to="/">Accueil</Link></li>
                    <li>Tendance</li>
                    <li><Link to="/new_post">New post</Link></li>
                    <hr  id="hr_nav_bar"/>
                    <li>langage</li>
                    <li>Profil</li>
                    <li>log out</li>
                </ul>

            </div>
         
        </div>
    </div>
    )
}

export default Nav_bar