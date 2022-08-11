import {Component} from 'react';
import {useMediaQuery} from 'react-responsive';
import {Header, Modal, Author, Content} from '../../components';
import Server from '../../services/Server'
import styles from './App.module.scss';

export class App extends Component {
    state = {
        author: true,
        hideAuthor: false,
        hideArticle: false,
        menu: false,
        first: false,
        second: false,
        content: null
    }

    targetElement = null;
    scrollPosition = null;

    async componentDidMount(){
        const list = new Server();
        list.getResource().then(data => {
            const ready = data.map(item => item.slug);

            const collectionElements = document.querySelectorAll('.element'),
                navElements = document.querySelectorAll('.nav');

            collectionElements && collectionElements.forEach((item, index) => {
                if (ready.indexOf(item.getAttribute('data-link')) !== -1) {
                    item.classList.remove('disabled');
                    navElements[index].classList.remove('disabled');
                }
            });
        })

        this.targetElement = document.querySelector('body');
    }

    checkoutOverflow = () => {
        if (this.state.first || this.state.menu) {
            this.scrollPosition = window.pageYOffset;
            document.body.classList.add('lock')
        } else {
            if (document.body.classList.contains('lock') && this.scrollPosition !== null && this.scrollPosition !== window.pageYOffset) {
                window.scrollTo(0, this.scrollPosition);
                this.scrollPosition = null;
            }
            document.body.classList.remove('lock');
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

    onClickAuthor = () => {
        this.toggleState('hideAuthor');
        setTimeout(() => {
            this.toggleState('author');
        }, 600);
    }

    onClickArticle = () => {
        if (!this.state.first) {
            this.toggleState('first');
        } else {
            this.toggleState('hideArticle');
            setTimeout(() => {
                this.toggleState('first');
                this.toggleState('hideArticle');
            }, 600);
        }
    }


    onClickMenu = () =>  this.toggleState('menu');

    render() {
        const {author, menu, first, content, hideAuthor, hideArticle} = this.state;

        return (
            <>
                <Header handler={this.onClickMenu}
                        getArticle={this.getArticle}
                        toggleState={this.toggleState}
                        opened={menu}/>

                {author ? <AuthorBlock hide={hideAuthor ? 'hide': ''} handler={this.onClickAuthor} onClose={this.onClickAuthor}/> : null}
                <div className={styles.canvas}>
                    <Content getArticle={this.getArticle}
                             click={this.onClickArticle}
                             first={first}
                             content={content}
                             hide={hideArticle}/>
                </div>
            </>
        );
    }
};

const AuthorBlock = ({handler, onClose, hide}) => {
    const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

    const content = <div className={styles.modal}><Author handler={handler}/></div>,
        modal = <Modal show={hide} type={'big'} onClose={onClose}>{content}</Modal>;

    return !isMobile ? modal : null;
}
