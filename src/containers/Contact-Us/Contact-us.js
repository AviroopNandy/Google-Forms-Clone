import React, { Component } from 'react';
import styles from './Contact-us.module.css';

export default class Contact extends Component {
    render() {
        return (
            <React.Fragment>
                <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.left}>
                        <div>
                            <h2>Contact Us</h2>
                            <p>We are always happy to help you and we will try our best to get back to you within a day. Feedback appreciated!</p>
                        </div>
                    </div>
                    <div className={styles.right}>
                        bruhh
                    </div>
                </div>
                </div>
            </React.Fragment>
        )
    }
}
