import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Afficher_post from "./affichage/Afficher_post";
import Ajouter_post from "./affichage/Ajouter_post";
import Principale from "./accueil/principale";
import Inscri from "./accueil/inscri";
import Login from "./accueil/login";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Afficher_post/>}/>
        <Route path="/new_post" element={<Ajouter_post/>} />



        <Route path="/accueil" element={<Principale/>}/>
        <Route path="/accueil/inscri" element={<Inscri/>} />
        <Route path="/accueil/login" element={<Login/>} />
      </Routes>
    </div>
  )
}


export default App;
