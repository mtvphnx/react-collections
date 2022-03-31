import {Component} from 'react';
import {Element, Modal} from '../../components';
import {server} from '../../services';
import styles from './Content.module.scss';
import {collection} from '../../date';

export class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first: false, second: false, content: null
        }
    }

    // <div dangerouslySetInnerHTML={{ __html: data.html }} />

    getArticle = async (link, type) => {
        let result = await server(link);
        this.setState({content: result});
        this.toggleModal(type);
    }

    toggleModal = (type) => {
        if (type === 1) {
            this.setState(({first}) => ({first: !first}));
        } else if (type === 2) {
            this.setState(({second}) => ({second: !second}));
        }
    };

    elements = collection && collection.map(item => {
        const {id, link, ...props} = item;
        return <Element key={id} id={id} clickHandler={() => this.getArticle(link, 2)} {...props}/>;
    })

    render() {
        return (
            <div className={styles.wrapper}>
                <div className={styles.bg}></div>
                {this.elements}
                {(this.state.second) ? <Modal visible={true} onClose={() => this.toggleModal(2)}>{this.state.content.title}</Modal> : null}
            </div>
        );
    }
}