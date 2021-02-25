import React from "react";
import Login from "../Login/Login.js";
import Signup from "../Signup/Signup.js";
import module from "./LoginApp.module.css";

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
            <div className={ module.rootContainer }>
                <div className={ module.boxController }>
                    <div className={ module.controller } onClick={ this.showLoginBox.bind(this) }>
                        <div className={ (this.state.isLoginActive ? module.selectedController : "") }>
                            Log-In
                        </div>
                    </div>
                    <div className={ module.controller } onClick={ this.showSignupBox.bind(this) }>
                        <div className={ (this.state.isSignupActive ? module.selectedController : "") }>
                            Sign-Up
                        </div>
                    </div>
                </div>
                <div className={ module.boxContainer }>
                    { this.state.isLoginActive && <Login /> }
                    { this.state.isSignupActive && <Signup /> }
                </div>
            </div>
        );
    }
}

export default LoginApp;
