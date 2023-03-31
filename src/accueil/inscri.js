import axios from "axios"
import { useState } from "react"
import "./style/inscri.css"
import { useNavigate } from "react-router-dom"


function Inscri(){
 const nav=useNavigate()
           
  const [nom_c, setnom_c] = useState('');
  const [nom_u, setnom_u] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [v_pass, setv_pass] = useState('');
  const [errors, setErrors] = useState({});


  function isValidEmail(email) {
    return /^\S+@\S+\.\S+$/.test(email);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = {};
    let isValid = true;

    if (!nom_c.trim()) {
      validationErrors.nom_c = 'Le nom complet est requis';
      isValid = false;
    }

    if (!nom_u.trim()) {
      validationErrors.nom_u = 'Le nom utilisateur est requis';
      isValid = false;
    }

    if (!email.trim()) {
      validationErrors.email = 'L\'email est requis';
      isValid = false;
    } else if (!isValidEmail(email)) {
      validationErrors.email = 'L\'email n\'est pas valide';
      isValid = false;
    }

    if (!password.trim()) {
      validationErrors.password = 'Le mot de passe est requis';
      isValid = false;
    } else if (password.trim().length < 8) {
      validationErrors.password = 'Le mot de passe doit contenir au moins 8 caractères';
      isValid = false;
    }

    if (password !== v_pass) {
      validationErrors.v_pass = 'Les mots de passe ne correspondent pas';
      isValid = false;
    }
     
    if (!isValid) {
      setErrors(validationErrors);
      return;
    }
    
    const data={
        name:nom_c,
        fake_name:nom_u,
        email:email,
        password:password
    }
    const env=axios.post("http://127.0.0.1:8000/api/register",data).then((Response)=>{
       console.log(Response.data)
     if(Response.data.message=="create compte") {
        nav("/validation")
        
     }
    })



  
  }

  return (
    <form onSubmit={handleSubmit} id="page_inscri">
      <div className="info_inscri" id="nom">
        <label>Nom Complet :</label><br></br>
        <input type="text" placeholder="nom complet" className="input_inscri" value={nom_c} onChange={(e) => setnom_c(e.target.value)} /><br></br>
        {errors.nom_c && <span className="error">{errors.nom_c}</span>}
      </div>
      <div className="info_inscri" id="nom_utilisateur">
        <label>Nom utilisateur :</label><br></br>
        <input type="text" placeholder="nom utilisateur" className="input_inscri" value={nom_u} onChange={(e) => setnom_u(e.target.value)} /><br></br>
        {errors.nom_u && <span className="error">{errors.nom_u}</span>}
      </div>
      <div className="info_inscri" id="email_inscri">
        <label>Email :</label><br></br>
        <input type="text" placeholder="exemple@gmail.com" className="input_inscri" value={email} onChange={(e) => setemail(e.target.value)} /><br></br>
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div className="info_inscri" id="password_insri">
        <label>Password :</label><br></br>
        <input type="password" placeholder="password" className="input_inscri" value={password} onChange={(e) => setpassword(e.target.value)} /><br></br>
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
      <div className="info_inscri" id="valide_password_insri">
        <label>Validation Password :</label><br></br>
        <input type="password" placeholder="valide password" className="input_inscri" value={v_pass} onChange={(e)=> setv_pass(e.target.value)} /><br></br>
        {errors.v_pass && <span className="error">{errors.v_pass}</span>}
    </div>
   <button id="button_inscri" >inscription</button> 
   </form> 
  )

} 

export default Inscri