import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext,DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styles from './Carousel.module.css';

import DoneIcon from '@material-ui/icons/Done';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import ShareIcon from '@material-ui/icons/Share';
import ColorLensIcon from '@material-ui/icons/ColorLens';
import CodeIcon from '@material-ui/icons/Code';
import DescriptionIcon from '@material-ui/icons/Description';
import DashboardIcon from '@material-ui/icons/Dashboard';
 
export default class extends React.Component {
  render() {
    return (
      <CarouselProvider
        totalSlides={3}
        interval={3000}
        naturalSlideHeight={100}
        naturalSlideWidth={50}
        isPlaying={true}
        className={styles.carouselContainer}
        lockOnWindowScroll={true}
        touchEnabled={false}
      >
        <Slider className={styles.slider}>
          <Slide index={0}>
            <div className={styles.crow}>
                <div><CodeIcon className={styles.done} />Hassle Free</div>
                <div><AttachFileIcon className={styles.done} />Attachments</div>
                <div><ColorLensIcon className={styles.done} />Color Themes</div>
            </div>
          </Slide>
          <Slide index={1}>
            <div className={styles.crow}>
                <div><DoneIcon className={styles.done} />React App</div>
                <div><DoneIcon className={styles.done} />NodeJS</div>
                <div><DoneIcon className={styles.done} />MongoDB</div>
            </div>
          </Slide>
          <Slide index={2}>
            <div className={styles.crow}>
                <div><DescriptionIcon className={styles.done} />Add to Folders</div>
                <div><ShareIcon className={styles.done} />Shareable</div>
                <div><DashboardIcon className={styles.done} />Interactive UI</div>
            </div>
          </Slide>
        </Slider>
        <div>
        <DotGroup className={styles.buttonContainer}/>
        </div>
      </CarouselProvider>
    );
  }
}
