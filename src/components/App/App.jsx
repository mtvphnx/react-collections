import {Component} from 'react';
import {useMediaQuery} from 'react-responsive';
import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';
import {Header, Modal, Author, Content} from '../../components';
import Server from '../../services/Server'
import styles from './App.module.scss';

export class App extends Component {
    state = {
        author: true,
        menu: false,
        first: false,
        second: false,
        content: null
    }

    targetElement = null;

    async componentDidMount(){
        const list = new Server();
        list.getResource().then(data => {
            const ready = data.map(item => item.slug);

            const collectionElements = document.querySelectorAll('.element'),
                navElements = document.querySelectorAll('.nav');

            collectionElements && collectionElements.forEach((item, index) => {
                if (ready.indexOf(item.getAttribute('data-link')) === -1) {
                    item.classList.add('disabled');
                    navElements[index].classList.add('disabled');
                }
            });
        })

        this.targetElement = document.querySelector('body');
    }

    checkoutOverflow = () => {
        if (this.state.first || this.state.menu) {
            disableBodyScroll(this.targetElement);
        } else {
            enableBodyScroll(this.targetElement);
        }
    }

    componentDidUpdate() {
        this.checkoutOverflow();
    }

    getArticle = async (link, type) => {
        const result = new Server();

        result.getResource(link).then(data => {
            this.setState({content: data[0]});
            this.toggleState(type);
        })
    }

    toggleState = (name) => {
        this.setState({
            [name]: !this.state[`${name}`]
        })
    };

    onClickAuthor = () => this.toggleState('author');

    onClickMenu = () => {
        this.toggleState('menu');
    };

    render() {
        const {author, menu, first, content} = this.state;

        return (
            <>
                <Header handler={this.onClickMenu}
                        getArticle={this.getArticle}
                        toggleState={this.toggleState}
                        opened={menu}/>

                {author ? <AutorBlock handler={this.onClickAuthor} onClose={this.onClickAuthor}/> : null}
                <div className={styles.canvas}>
                    <Content getArticle={this.getArticle}
                             toggleState={this.toggleState}
                             first={first}
                             content={content} />
                </div>
            </>
        );
    }
};

const AutorBlock = ({handler, onClose}) => {
    const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

    const content = <div className={styles.modal}><Author handler={handler}/></div>,
        modal = <Modal type={'big'} onClose={onClose}>{content}</Modal>;

    return !isMobile ? modal : null;
}
