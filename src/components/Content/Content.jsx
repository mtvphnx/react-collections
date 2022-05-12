import {Component, useEffect} from 'react';
import PropTypes from 'prop-types';
import Scroll from 'react-scrollbar';
import {useMediaQuery} from 'react-responsive';
import {Element, Article, Arrows} from '../../components';
import styles from './Content.module.scss';
import collection from '../../data/collection';

export const Content = ({toggleState, first, content, getArticle}) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

    const elements = collection && collection.map(item => {
        const {id, link, ...props} = item;
        return (
            <Element handler={() => getArticle(link, 'first')} key={id} id={id} link={link} {...props}/>
        );
    })

    const desktop = <Scroll className="canvas-wrapper" horizontal={true} smoothScrolling={true}><Wrapper children={elements} /></Scroll>,
        mobile = <Wrapper children={elements} />

    return (

        <>
            {isMobile ? mobile : desktop}
            {first ? <Article content={content} handler={() => toggleState('first')}/> : null}
        </>
    );
}

class Wrapper extends Component {
    moveLayoute = (e) => {
        const currentArrow = e.currentTarget.getAttribute('data-arrow');
        switch (currentArrow) {
            case 'top':
                this.context.scrollArea.scrollTop();
                break;
            case 'right':
                this.context.scrollArea.scrollRight();
                break;
            case 'left':
                this.context.scrollArea.scrollLeft();
                break;
            case 'bottom':
                this.context.scrollArea.scrollBottom();
                break;
            default:
                break;
        }
        this.context.scrollArea.refresh();
    }

    render(){
        return (
            <>
            <div className={styles.block}>
                <div className={styles.wrapper}>
                    <div className={styles.bg}></div>
                    {this.props.children}
                </div>
            </div>
            <Arrows handlerClick={(e) => this.moveLayoute(e)}/>
            </>
        );
    }
}

Wrapper.contextTypes = {
    scrollArea: PropTypes.object
};