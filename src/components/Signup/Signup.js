import { React, useState } from "react";
import { useHistory } from "react-router-dom";
import module from "../LoginApp/LoginApp.module.css";

const Signup = () => {
    const [ username, setUsername ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ confirmPassword, setConfirmPassword ] = useState("");

    let history = useHistory();

    const handleSubmit = function() {
        
    }

    return(
        <div className={ module.innerContainer }>
            <div className={ module.header }>
                Signup
            </div>
            <div className={ module.box }>
                <form method="post" id="signupForm">
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
                        <input type="email"
                                name="email"
                                value={ email }
                                required="required"
                                className={ module.loginInput }
                                onChange={ (e) => setEmail(e.target.value) } />
                        <span>E-mail ID</span>
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
                    <div className={ module.inputGroup }>
                        <input type="password"
                                name="confirmPassword"
                                value={ confirmPassword }
                                required="required"
                                className={ module.loginInput }
                                onChange={ (e) => setConfirmPassword(e.target.value) } />
                        <span>Confirm Password</span>
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

export default Signup;
