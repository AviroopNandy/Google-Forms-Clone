import React, { useState } from 'react';
import styles from './Contact-us.module.css';
import axios from 'axios';

import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PeopleIcon from '@material-ui/icons/People';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
export default function Contact() {
    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
      });
      const handleServerResponse = (ok, msg, form) => {
        setServerState({
          submitting: false,
          status: { ok, msg }
        });
        if (ok) {
          form.reset();
        }
      };
      const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        setServerState({ submitting: true });
        axios({
          method: "post",
          url: "https://formspree.io/f/xpzkzwng",
          data: new FormData(form)
        })
          .then(r => {
            handleServerResponse(true, "Thanks!", form);
          })
          .catch(r => {
            handleServerResponse(false, r.response.data.error, form);
          });
      };
        return (
            <React.Fragment>
                <div className={styles.wrapper}>
                    <h1>Contact Us</h1>
                    <p>Always happy to help!</p>
                <div className={styles.container}>
                    <div className={styles.left}>
                        <div>
                            <h2>Our Social Handles</h2>
                            <p>We will try our best to get back to you within a day. Feedback appreciated!</p>
                        </div>
                        <div className={styles.details}>
                            <div><CallIcon />+91 9686662439</div>
                            <div><EmailIcon />fabforms@gmail.com</div>
                            <div><LocationOnIcon />Vellore Institute of Technology , Vellore</div>
                            <div><PeopleIcon />Made by - Aviroop Nandy | Mounvi Podapati</div>
                        </div>
                        <div className={styles.socialIcons}>
                            <FacebookIcon />
                            <TwitterIcon />
                            <LinkedInIcon />
                            <InstagramIcon />
                            <GitHubIcon />
                        </div>
                    </div>
                    <form className={styles.right} onSubmit={handleOnSubmit}>
                        <div className={styles.rightContainer}>
                            <div>
                            <div>
                                <label htmlFor='fname'>First Name</label>
                                <input type="text" name='fname' placeholder='John' />
                            </div>
                            <div>
                                <label htmlFor='fname'>Last Name</label>
                                <input type="text" name='lname' placeholder='Doe' />
                            </div>
                            <div>
                                <label htmlFor='email'>Email Address</label>
                                <input type="email" name='email' placeholder='example@gmail.com' />
                            </div>
                            <div>
                                <label htmlFor='phone'>Phone Number</label>
                                <input type="phone" name='phone' placeholder='+91 XXXXXXXXXX' />
                            </div>
                            </div>
                            <h3>Tell us what's your query is about?!</h3>
                            <div className={styles.query}>
                                <div>
                                    <label htmlFor='c1'><input type="radio" name='c' id='c1'/>Feedback</label>
                                </div>
                                <div>
                                    <label htmlFor='c2'> <input type="radio" name='c' id='c2'/>Found a bug?</label>
                                </div><div>
                                    <label htmlFor='c3'><input type="radio" name='c' id='c3'/>Form Issues</label>
                                </div><div>
                                    <label htmlFor='c4'><input type="radio" name='c' id='c3'/>Others</label>
                                </div>
                            </div>
                            <div className={styles.message}>
                                <label htmlFor='message'><p>Message</p></label>
                                <input type="text" name='message' placeholder='Your message' />
                            </div>
                            {serverState.status ? 
                                <div className={styles.thanks}>
                                    <p className={!serverState.status.ok ? "errorMsg" : ""}>
                                        {serverState.status.msg}
                                    </p>
                                </div>
                                : <button type="submit" className={styles.send}>Send</button>
                                }
                        </div>
                    </form>
                </div>
                </div>
            </React.Fragment>
        )
}
