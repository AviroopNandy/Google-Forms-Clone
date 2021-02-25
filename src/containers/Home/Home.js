import React, { Component } from 'react';
import styles from './Home.module.css';
import CarouselContainer from '../../components/Carousel/Carousel';
import Form from '../../components/Form/Form';

import DnsIcon from '@material-ui/icons/Dns';
import ListAltOutlinedIcon from '@material-ui/icons/ListAlt';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PermContactCalendarOutlinedIcon from '@material-ui/icons/PermContactCalendarOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import PermMediaOutlinedIcon from '@material-ui/icons/PermMediaOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
export default class Home extends Component {
    state={
        forms:[1,2,3,4,5,6,7,8]
    }
    render() {
        return (
            <React.Fragment>
                <div className={styles.container}>
                   <div className={styles.sideContainer}>
                       <h1><DnsIcon />Fab Forms</h1>
                       <ul>
                           <li><HomeOutlinedIcon className={styles.sideIcons}/><h4>Home</h4></li>
                           <li><ListAltOutlinedIcon className={styles.sideIcons}/><h4>Forms</h4></li>
                           <li><PermMediaOutlinedIcon className={styles.sideIcons}/><h4>Folders</h4></li>
                           <li><DeleteOutlinedIcon className={styles.sideIcons}/><h4>Bin</h4></li>
                           <li><PermContactCalendarOutlinedIcon className={styles.sideIcons}/><h4>Contact</h4></li>
                       </ul>
                   </div>
                   <div className={styles.mainContainer}>
                        <div className={styles.top}>
                            <div className={styles.search}>
                                <input placeholder="Search"></input>
                                <SearchOutlinedIcon />
                            </div>
                            <div className={styles.topLeft}>
                                <div className={styles.profile} title="Create form"><AddOutlinedIcon /></div>
                                <div className={styles.profile} title="Your Profile"><PermIdentityOutlinedIcon /></div>
                            </div>
                        </div>
                        <CarouselContainer />
                        <h3>All Forms</h3>
                        <div className={styles.formsContainer}>
                            {this.state.forms.map(form=>{
                               return( <Form />)
                            })}
                        </div>

                   </div>
                </div>
            </React.Fragment>
        )
    }
}

