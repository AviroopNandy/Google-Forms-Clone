import React, { Component } from 'react';
import styles from './Home.module.css';

import DnsIcon from '@material-ui/icons/Dns';
import ListAltOutlinedIcon from '@material-ui/icons/ListAlt';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PermContactCalendarOutlinedIcon from '@material-ui/icons/PermContactCalendarOutlined';
export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className={styles.container}>
                   <div className={styles.sideContainer}>
                       <h1><DnsIcon />Fab Forms</h1>
                       <ul>
                           <li><HomeOutlinedIcon className={styles.sideIcons}/><h4>Home</h4></li>
                           <li><ListAltOutlinedIcon className={styles.sideIcons}/><h4>Forms</h4></li>
                           <li><DeleteOutlinedIcon className={styles.sideIcons}/><h4>Bin</h4></li>
                           <li><PermContactCalendarOutlinedIcon className={styles.sideIcons}/><h4>Contact</h4></li>
                       </ul>
                   </div>
                   <div className={styles.formsContainer}>
                       <hi>lorem</hi>
                   </div>
                </div>
            </React.Fragment>
        )
    }
}

