import React, { Component } from 'react';
import styles from './Form.module.css';

import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

export default class Form extends Component {
    render() {
        console.log("hi");
        return (
            <React.Fragment>
                            <div className={styles.form}>
                                <div>
                                    <div className={styles.formHeader}>
                                        <div className={styles.status}>• New</div>
                                        <div>Feb 24</div>
                                    </div>
                                    <div className={styles.heading}>
                                        <h2>Form1</h2>
                                        <p>text text text lol</p>
                                    </div>
                                    <div className={styles.formIcons}>
                                        <FavoriteBorderIcon />
                                        <DeleteIcon />
                                    </div>
                                </div>
                            </div>                        
            </React.Fragment>
        )
    }
}
