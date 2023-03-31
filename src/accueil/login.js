import { useState } from "react"
import "./style/login.css"
import axios from "axios"


function Login(){
 const[email,setemail]=useState("")
 const[password,setpassword]=useState("")
 const [errors, setErrors] = useState({});


 function isValidEmail(email) {
    return /^\S+@\S+\.\S+$/.test(email);
  }

 function log(){
    const validationErrors = {};
    let isValid = true;

    if (!email.trim()) {
      validationErrors.email = 'L\'email est requis';
      isValid = false;
    } else if (!isValidEmail(email)) {
      validationErrors.email = 'L\'email n\'est pas valide';
      isValid = false;
    }
    if (!isValid) {
        setErrors(validationErrors);
        return;
      }
      const  data= {
        email:email,
        password:password
      }
      const env=axios.post("http://127.0.0.1:8000/api/login",data).then((Response)=>{
      if(Response.data.message=="connected") {
         console.log(Response.data.token)
      }else{
        validationErrors.password="password incorrecte"
        setErrors(validationErrors)
      }
    })   
 }


    return(
        <div id="login">
            <div id="page_login">
                <div className="info_login" id="email_login">
                    <label>Email :</label><br></br>
                    <input type="text" placeholder="exemple@gmail.com" className="input_login" id="email_input_login" value={email} onChange={(e)=> setemail(e.target.value)}  /><br></br>
                    {errors.email && <span className="error">{errors.email}</span>}  
                </div>
                <div className="info_login" id="password">
                    <label>password :</label><br></br>
                    <input type="PASSWORD" placeholder="password" className="input_login" id="password_input_login" value={password} onChange={(e)=> setpassword(e.target.value)}  /> <br></br>
                    {errors.password && <span className="error">{errors.password}</span>} 
                </div>
                <div>
                    <button className="button_cn" onClick={log}>connection</button>
                </div>
            </div>
        </div>
    )
}

export default Login