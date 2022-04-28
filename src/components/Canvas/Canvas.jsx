import {Component} from 'react';
import {Header, Modal, Author, Content} from '../../components';
import {server} from '../../services';
import styles from './Canvas.module.scss';

export class Canvas extends Component {
    state = {
        author: true,
        menu: false,
        first: false,
        second: false,
        content: null
    }

    getArticle = async (link, type) => {
        const result = await server(link);
        this.setState({content: result[0]});
        this.toggleState(type);
    }

    toggleState = (name) => {
        this.setState({
            [name]: !this.state[`${name}`]
        })
    };

    onClickAuthor = () => this.toggleState('author');

    onClickMenu = () => this.toggleState('menu');

    render() {
        const {author, menu, first, content} = this.state;

        return (
            <>
                <Header handler={this.onClickMenu}
                        getArticle={this.getArticle}
                        toggleState={this.toggleState}
                        opened={menu}/>
                {author ? <Modal type={'big'} onClose={this.onClickAuthor}><Author handler={this.onClickAuthor}/></Modal> : null}
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
