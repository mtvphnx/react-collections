import {useState, Component} from 'react';
import axios from 'axios';
import {Element, Modal} from '../../components';
import styles from './Content.module.scss';
import {collection} from '../../date';

export class Content extends Component {
    constructor(props) {
        super(props);
        this.domain =
        this.state = {
            showLittle: null,
            showBig: null,
            modalContent: null
        }
    }

    openModal = () => {

    }

    closeModal = () => {
        this.setState(({showLittle}) => ({
            showLittle: !showLittle
        }))
    };

    generateElements = ({id, name, style, img, pin, link}) => {
        return (
            <Element key={id} pin={pin} style={style} onClickHandler={onClickHandle} link={link}>
                <img src={`/elements/${id}.png`} style={img} />
            </Element>
        )
    }

    render() {
        return (
            <div className={styles.wrapper}>
                <div className={styles.bg}></div>
                {collection && collection.map(item => this.generateElements(item))}
                {(type === 'first') ? <Modal visible={true} onClose={this.closeModal}>{modalContent}</Modal> : null}
            </div>
        );
    }
}

// export const Content = ({...props}) => {
//     const domain = 'https://media.2x2tv.ru',
//         key = 'fc62110ca6739b16228cceff36',
//         param = '',
//         api = (link) => `${domain}/ghost/api/v3/content/posts/slug/${link}/?key=${key}`;
//
//     const [type, showModal] = useState(null);
//     const [content, setContent] = useState(null);
//
//     // <div dangerouslySetInnerHTML={{ __html: content }} />
//
//     const modalContent = content ? {content} : <h2>Что-то пошло не так...</h2>;
//
//     const getDate = (link) => {
//         axios.get(api(link))
//             .then(function (response) {
//                 const data = response.data.posts[0].html;
//                 setContent(() => data);
//                 showModal('first');
//             })
//             .catch(function (error) {
//                 console.log(error);
//             })
//     }
//
//     const onClickHandle = (e) => {
//         const link = e.target.getAttribute('data-link');
//         if (link !== null) getDate(link);
//     }
//
//     const closeModal = () => showModal(false);
//
//     const generateElements = ({id, name, style, img, pin, link}) => {
//         return (
//             <Element key={id} pin={pin} style={style} onClickHandler={onClickHandle} link={link}>
//                 <img src={`/elements/${id}.png`} style={img} />
//             </Element>
//         )
//     }
//
//     return (
//         <div className={styles.wrapper}>
//             <div className={styles.bg}></div>
//             {collection && collection.map(item => generateElements(item))}
//             {(type === 'first') ? <Modal visible={true} onClose={closeModal}>{modalContent}</Modal> : null}
//         </div>
//     );
// };
