import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Accueil from "./accueil/accueil";
import Afficher_post from "./affichage/Afficher_post";
import Ajouter_post from "./affichage/Ajouter_post";
import Nav_bar from "./affichage/nav_bar";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Nav_bar/>}>
        <Route index element={<Afficher_post/>} />
        <Route path="/new_post" element={<Ajouter_post/>} />
      </Route>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App;
