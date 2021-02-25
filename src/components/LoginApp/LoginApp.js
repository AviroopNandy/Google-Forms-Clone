import React from "react";
import Login from "../Login/Login.js";
import Signup from "../Signup/Signup.js";
import styles from "./LoginApp.module.css";

class LoginApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoginActive: true,
            isSignupActive: false
        };
    }

    showLoginBox() {
        this.setState({
            isLoginActive: true,
            isSignupActive: false
        });
    }

    showSignupBox() {
        this.setState({
            isLoginActive: false,
            isSignupActive: true
        });
    }

    render() {
        return(
            <div className={ styles.rootContainer }>
                <div className={ styles.boxController }>
                    <div className={ styles.controller } onClick={ this.showLoginBox.bind(this) }>
                        <div className={ (this.state.isLoginActive ? styles.selectedController : "") }>
                            Log-In
                        </div>
                    </div>
                    <div className={ styles.controller } onClick={ this.showSignupBox.bind(this) }>
                        <div className={ (this.state.isSignupActive ? styles.selectedController : "") }>
                            Sign-Up
                        </div>
                    </div>
                </div>
                <div className={ styles.boxContainer }>
                    { this.state.isLoginActive && <Login /> }
                    { this.state.isSignupActive && <Signup /> }
                </div>
            </div>
        );
    }
}

export default LoginApp;
