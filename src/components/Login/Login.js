import { React, useState } from "react";
import { useHistory } from "react-router-dom";
import module from "../LoginApp/LoginApp.module.css";

const Login = () => {
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    let history = useHistory();

    const handleSubmit = function() {
        
    }

    return(
        <div className={ module.innerContainer }>
            <div className={ module.header }>
                Login
            </div>
            <div className={ module.box }>
                <form method="post" id="loginForm">
                    <div className={ module.inputGroup }>
                        <input type="text"
                                name="username"
                                value={ username }
                                required="required"
                                className={ module.loginInput }
                                onChange={ (e) => setUsername(e.target.value) } />
                        <span>Username</span>
                    </div>
                    <div className={ module.inputGroup }>
                        <input type="password"
                                name="password"
                                value={ password }
                                required="required"
                                className={ module.loginInput }
                                onChange={ (e) => setPassword(e.target.value) } />
                        <span>Password</span>
                    </div>
                    <button type="submit"
                            className={ module.loginBtn }
                            onClick={ handleSubmit }>
                                Continue
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
