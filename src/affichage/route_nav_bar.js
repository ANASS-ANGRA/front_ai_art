import Afficher_post from "./Afficher_post";
import Nav_bar from "./nav_bar";
import { BrowserRouter , Route, Routes } from "react-router-dom";



function Route_nav_bar(){

    return(
        <div>
            <BrowserRouter>
                <Routes>
                  <Route path="/" element={Nav_bar}>
                  <Route index element={<Afficher_post/>} />
                  </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Route_nav_bar