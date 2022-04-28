import {Component} from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {Element, Article} from '../../components';
import {server} from '../../services';
import styles from './Content.module.scss';
import {collection} from '../../date';

export class Content extends Component {
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

    elements = collection && collection.map(item => {
        const {id, link, ...props} = item;
        return <Element key={id} id={id} link={link} handler={() => this.props.getArticle(link, 'first')} {...props}/>;
    })

    render() {
        const {toggleState, first, content} = this.props;

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

            {first ? <Article content={content} handler={() => toggleState('first')}/> : null}
            </>
        );
    }
}