import axios from "axios"
import { useState } from "react"
import {  useNavigate } from "react-router-dom"
import "./style/validation.css"
import Title_accueil from "./Title_accueil"



function Validation(){
const [email,setemail]=useState("anassangra2003@gmail.com")
const [code,setcode]=useState("")
const [erreur,seterreur]=useState("")
const nav=useNavigate()

function valide(){
    const data={
        email:email,
        code:code  
    }
    const env=axios.post("http://127.0.0.1:8000/api/code_validation",data).then((Response)=>{
       console.log(Response.data)
       if(Response.data=="email_verifie"){
        nav("/login")
       }else{
        seterreur("code incorrect")
       }
    })
}



    return(
    <div>
         <Title_accueil/>
        <div id="validation">
            
            <h1>bonjour nom_user </h1>
            <h2>ecrire votre code de validation qui envoyer sur email :</h2>
            <input type="text" placeholder="code validation" value={code} onChange={(e)=>{setcode(e.target.value)}} /><br></br>
            <p>code incorrect</p>
            <button onClick={valide}>valide</button>
            

        </div>
        </div>
    )
}

export default Validation

/*{erreur && <span >{erreur}</span>}*/