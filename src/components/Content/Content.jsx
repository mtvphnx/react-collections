import PerfectScrollbar from 'react-perfect-scrollbar';
import {Element, Article} from '../../components';
import styles from './Content.module.scss';
import {collection} from '../../date';

export const Content = ({toggleState, first, content, getArticle}) => {

    const elements = collection && collection.map(item => {
        const {id, link, ...props} = item;
        return <Element key={id} id={id} link={link} handler={() => getArticle(link, 'first')} {...props}/>;
    })

    return (
        <>
            <PerfectScrollbar>
                <div className={styles.block}>
                    <div className={styles.wrapper}>
                        <div className={styles.bg}></div>
                        {elements}
                    </div>
                </div>
            </PerfectScrollbar>

            {first ? <Article content={content} handler={() => toggleState('first')}/> : null}
        </>
    );
}