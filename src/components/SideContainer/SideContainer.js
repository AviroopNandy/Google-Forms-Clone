import React, { Component } from 'react';
import styles from './SideContainer.module.css';

import DnsIcon from '@material-ui/icons/Dns';
import ListAltOutlinedIcon from '@material-ui/icons/ListAlt';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PermMediaOutlinedIcon from '@material-ui/icons/PermMediaOutlined';
import PermContactCalendarOutlinedIcon from '@material-ui/icons/PermContactCalendarOutlined';

export default class SideContainer extends Component {
    render() {
        return (
            <div className={styles.sideContainer}>
                <h1><DnsIcon />Fab Forms</h1>
                <ul>
                    <li><HomeOutlinedIcon className={styles.sideIcons}/><h4>Home</h4></li>
                    <li><ListAltOutlinedIcon className={styles.sideIcons}/><h4>Forms</h4></li>
                    <li><PermMediaOutlinedIcon className={styles.sideIcons}/><h4>Folders</h4></li>
                    <li><DeleteOutlinedIcon className={styles.sideIcons}/><h4>Bin</h4></li>
                    <li><PermContactCalendarOutlinedIcon className={styles.sideIcons}/><h4>Contact</h4></li>
                </ul>
                <div style={{marginTop:"45%"}}>
                    <h3>Statistics</h3>
                    <div className={styles.statistics}>
                        <div><p>Created</p><h3>8</h3></div>
                        <div><p>Submitted</p><h3>32</h3></div>
                        <div><p>Favourites</p><h3>45</h3></div>
                        <div><p>Deleted</p><h3>2</h3></div>                    
                    </div>
                </div>
        </div>
        )
    }
}
