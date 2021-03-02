import React, { Component } from 'react';
import { Redirect } from 'react-router';
import styles from './Home.module.css';
import CarouselContainer from '../../components/Carousel/Carousel';
import Form from '../../components/Form/Form';
import SideContainer from '../../components/SideContainer/SideContainer';

import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';

export default class Home extends Component {
    constructor(props) {
        super(props);
        // this.handleLoginClick = this.handleLoginClick.bind(this);
    }
    state={
        forms:[1,2,3,4,5,6,7,8]
    }

    // handleLoginClick() {
        
    // }

    render() {
        return (
            <React.Fragment>
                <div className={styles.wrapper}>
                <div className={styles.container}>
                    <SideContainer />
                    <div className={styles.mainContainer}>
                        <div className={styles.top}>
                            <div className={styles.search}>
                                <input placeholder="Search"></input>
                                <SearchOutlinedIcon />
                            </div>
                            <div className={styles.topLeft}>
                                <div className={styles.profile} title="Create form"><AddOutlinedIcon /></div>
                                <div className={styles.profile} title="Your Profile"><PermIdentityOutlinedIcon /></div>
                                <div className={styles.profile} title="Login" onClick={ () => { this.props.history.push("/user/auth") } }><LockOpenOutlinedIcon /></div>
{/* 
                                <div id="profile-body">
                                    <div id="profile-container">
                                        <div id="profile-wrapper">
                                            <a href="#">
                                                <img id="profile-image" src="{{image}}" alt="src/public/favicon.png" />
                                            </a>
                                            <div id="profile-title">Mounvi</div>
                                        </div>
                                        <br />
                                        <a href="/auth/logout"><button id="logout-button">Logout</button></a>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <CarouselContainer />
                        <h3>All Forms</h3>
                        <div className={styles.formsContainer}>
                            {this.state.forms.map((form,index)=>{
                               return( <Form key={index} />)
                            })}
                        </div>
                    </div>
                </div>
                </div>
            </React.Fragment>
        )
    }
}

