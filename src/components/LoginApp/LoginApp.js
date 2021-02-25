import React from "react";
import Login from "../Login/Login.js";
import Signup from "../Signup/Signup.js";
import styles from "./LoginApp.module.css";

import DescriptionIcon from '@material-ui/icons/Description';
import ShareIcon from '@material-ui/icons/Share';
import DashboardIcon from '@material-ui/icons/Dashboard';
import CodeIcon from '@material-ui/icons/Code';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import ColorLensIcon from '@material-ui/icons/ColorLens';
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
                <div className={styles.sub1}>
                    <div><CodeIcon className={styles.done} />Hassle Free</div>
                    <div><AttachFileIcon className={styles.done} />Attachments</div>
                    <div><ColorLensIcon className={styles.done} />Color Themes</div>
                    <div><DescriptionIcon className={styles.done} />Add to Folders</div>
                    <div><ShareIcon className={styles.done} />Shareable</div>
                    <div><DashboardIcon className={styles.done} />Interactive UI</div>
                </div>
                <div className={styles.sub2}>
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
            </div>
        );
    }
}

export default LoginApp;
