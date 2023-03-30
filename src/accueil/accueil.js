import"./style/accueil.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Principale from "./principale";
import Login from "./login";

function Accueil(){
    return(
        <div id="accueil">
          <h1 id="title_accueil">Ai art</h1>
          <div>
             <Login />
          </div>
        </div>
    )
}

export default Accueil 
/* <BrowserRouter>
          <Routes>
            <Route index element{} >

            </Route>
          </Routes>
          </BrowserRouter>*/