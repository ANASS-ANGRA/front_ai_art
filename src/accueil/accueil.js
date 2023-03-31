import"./style/accueil.css"
import { BrowserRouter ,Router,  Route, Routes, Outlet } from "react-router-dom";
import Principale from "./principale";
import Login from "./login";
import Inscri from "./inscri";
import Title_accueil from "./Title_accueil";
import Validation from "./validation";

function Accueil(){
    return(
        <div id="accueil">
      <BrowserRouter>
  <Routes>
    <Route path="/" element={<Title_accueil />}>
      <Route index element={<Principale />} />
      <Route path="/login" element={<Login />} />
      <Route path="/inscri" element={<Inscri />} />
      <Route path="/validation" element={<Validation />} />
    </Route>
  </Routes>
</BrowserRouter>
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