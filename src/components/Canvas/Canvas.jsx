import {Component} from 'react';
import {Header, Modal, Author, Link, Content} from '../../components'
import cn from 'classnames';
import {author} from '../../date';
import styles from './Canvas.module.scss';

export class Canvas extends Component {
    state = {
        author: true
    }

    onClickAuthor = () => {
        this.setState(({author}) => ({
            author: !author
        }));
    }

    text = author.map(item => {
        const {id, text} = item;

        const little = <p key={id} className={cn('text-small', styles.little)}>{text}</p>,
            big = <p key={id} className={cn('text-body', styles.big)}>{text}</p>;

        return (id < 2) ? big : little;
    })

    modalContent = (
        <div className={styles.modal}>
            <Author />
            {this.text}
            <Link tag={'div'} text="Смотреть коллекцию" onClick={this.onClickAuthor}/>
        </div>
    )

    render() {
        const {author} = this.state;

        return (
            <>
                <Header/>
                {author ? <Modal type={'big'} onClose={this.onClickAuthor}>{this.modalContent}</Modal> : null}
                <div className={styles.canvas}>
                    <Content/>
                </div>
            </>
        );
    }
};
