import "./style/login.css"


function Login(){
    return(
        <div id="login">
            <div id="page_login">
                <div className="info_login" id="email">
                    <label>Email :</label><br></br>
                    <input type="text" placeholder="exemple@gmail.com" className="input_login" id="email_input_login"/>  
                </div>
                <div className="info_login" id="password">
                    <label>password :</label><br></br>
                    <input type="PASSWORD" placeholder="password" className="input_login" id="password_input_login"/>  
                </div>
                <div>
                    <button className="button_cn">connection</button>
                </div>
            </div>
        </div>
    )
}

export default Login