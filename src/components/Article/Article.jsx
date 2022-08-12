import {Component} from "react";
import {Modal, Link, Socials, Spinner} from '../../components';
import icon from '../../resources/icons/close.svg';
import styles from './Article.module.scss';

export class Article extends Component {
    src = this.props.content.feature_image.replace('https://media.2x2tv.ru/content/images/', 'https://media.2x2tv.ru/content/images/size/h550/');

    componentDidMount() {
        let images = [this.src],
            results = [];

        images.forEach(image => {
            results.push(new Promise((resolve, reject) => {
                const newImage = new Image();

                newImage.addEventListener("load", function () {
                    resolve();
                });

                newImage.src = image;
                window[image] = newImage;
            }));
        });

        Promise.all(results).then(() => {
            this.props.loadingHandler();
        });
    }

    render() {
        const {loading, handler, hide, content} = this.props;
        const {title, html} = content;

        const sharing = [
            {id: 0, link: `https://vk.com/share.php?url=${document.location.href}&title=${title}&image=${this.src}`},
            {id: 1, link: `https://t.me/share/url?url=${document.location.href}&text=${title}`},
            {id: 2, link: `https://connect.ok.ru/offer?url=${document.location.href}&title=${title}&imageUrl=${this.src}`},
        ];

        const articleModal =
            <Modal show={hide} type={'second'} onClose={handler}>
                <div className={styles.close} onClick={handler}>
                    <img src={icon} alt="Закрыть"/>
                </div>
                <h1 className={styles.title}>{title}</h1>
                <img className={styles.picture}
                     src={this.src}
                     alt={title}
                     decoding="async"
                     loading="lazy"/>
                <div className={styles.wrapper}>
                    <div className={styles.content}
                         dangerouslySetInnerHTML={{ __html: html }} />
                    <Link tag={'div'}
                          text={'Вернуться к коллекциям'}
                          onClick={handler}
                          className={styles.link} />
                </div>
                <Socials data={sharing} className={styles.socials}/>
            </Modal>;

        return (
            <>
                {loading ? <Spinner className={"absolute"}/> : articleModal}
            </>
        )
    }
}