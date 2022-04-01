import {Component} from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {Element, Modal, Article} from '../../components';
import {server} from '../../services';
import styles from './Content.module.scss';
import {collection} from '../../date';

export class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first: false,
            second: false,
            content: null
        }
    }

    async componentDidMount(){
        const result = await server(),
            ready = result.map(item => item.slug);

        const array = document.querySelectorAll('.element');
        array.forEach(item => {
            if (ready.indexOf(item.getAttribute('data-link')) === -1) {
                item.classList.add('disabled');
            }
        });
    }

    getArticle = async (link, type) => {
        const result = await server(link);
        this.setState({content: result[0]});
        this.toggleModal(type);
    }

    toggleModal = (type) => {
        if (type === 1) {
            this.setState(({first}) => ({first: !first}))
        } else if (type === 2) {
            this.setState(({second}) => ({second: !second}))
        }
    };

    elements = collection && collection.map(item => {
        const {id, link, ...props} = item;
        return <Element key={id} id={id} link={link} clickHandler={() => this.getArticle(link, 1)} {...props}/>;
    })

    render() {
        return (
            <>
            <PerfectScrollbar>
                <div className={styles.block}>
                    <div className={styles.wrapper}>
                        <div className={styles.bg}></div>
                        {this.elements}
                    </div>
                </div>
            </PerfectScrollbar>
            {(this.state.first) ? <Article content={this.state.content} onClose={() => this.toggleModal(1)}/> : null}
            </>
        );
    }
}