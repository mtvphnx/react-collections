import React from 'react';
import ReactDOM from 'react-dom';
import {Hero, App, Spinner} from './components';
import './styles/reset.scss';
import './styles/global.scss';

import collection from "./data/collection";
import heroPic from './resources/pics/hero.jpg';
import authorPic from './resources/pics/author.jpg';
import pinPic from './resources/pics/pin.png';
import arrowBlackPic from './resources/pics/arrow-black.png';
import arrowWhitePic from './resources/pics/arrow-white.png';
import paperPic from './resources/pics/papper.jpg';
import iconsPic from './resources/pics/icons.png';
import burgerIcon from './resources/icons/burger.svg';
import closeIcon from './resources/icons/close.svg';
import logoIcon from './resources/icons/logo.svg';
import okIcon from './resources/icons/ok.svg';
import tgIcon from './resources/icons/tg.svg';
import vkIcon from './resources/icons/vk.svg';
import ybIcon from './resources/icons/yb.svg';

export class Collection extends React.Component {
    state = {
        start: true,
        loading: true
    }

    onClickStart = () => {
        this.setState(({start}) => ({
            start: !start
        }));
    };

    componentDidMount() {
        let images = [heroPic, iconsPic, paperPic, authorPic, pinPic, arrowBlackPic, arrowWhitePic, burgerIcon, closeIcon, logoIcon, okIcon, vkIcon, tgIcon, ybIcon];
        let promises = [];

        images.forEach(image => {
            promises.push(new Promise((resolve, reject) => {
                const newImage = new Image();

                newImage.addEventListener("load", function () {
                    resolve();
                });

                newImage.src = image;
                window[image] = newImage;
            }));
        });

        Promise.all(promises).then(() => {
            this.setState(({loading}) => ({
                loading: !loading
            }));
        });

        const preloadImages = [];
        collection.forEach(item => preloadImages.push(`${process.env.PUBLIC_URL}/elements/${item.id}.png`))
        preloadImages.forEach((image, index) => {
            const newImage = new Image();

            newImage.src = image;
            window[image] = newImage;
        });
    }

    render() {
        const {start, loading} = this.state;
        const content = start ? <Hero handler={this.onClickStart}/> : <App/>

        return (
            <div className="wrapper">
                {loading ? <Spinner/> : content}
            </div>
        );
    }
}


ReactDOM.render(
  <React.StrictMode>
    <Collection/>
  </React.StrictMode>,
  document.getElementById('root')
);
