import { React, useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "../LoginApp/LoginApp.module.css";

const Login = () => {
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    let history = useHistory();

    const handleSubmit = function() {
        
    }

    return(
        <div className={ styles.innerContainer }>
            <div className={ styles.header }>
                Login
            </div>
            <div className={ styles.box }>
                <form method="post" id="loginForm">
                    <div className={ styles.inputGroup }>
                        <input type="text"
                                name="username"
                                value={ username }
                                required="required"
                                className={ styles.loginInput }
                                onChange={ (e) => setUsername(e.target.value) } />
                        <span>Username</span>
                    </div>
                    <div className={ styles.inputGroup }>
                        <input type="password"
                                name="password"
                                value={ password }
                                required="required"
                                className={ styles.loginInput }
                                onChange={ (e) => setPassword(e.target.value) } />
                        <span>Password</span>
                    </div>
                    <button type="submit"
                            className={ styles.loginBtn }
                            onClick={ handleSubmit }>
                                Continue
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
